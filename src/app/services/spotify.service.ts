import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../User';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin'

@Injectable()
export class SpotifyService {
  private _baseUrl: string = 'https://api.spotify.com/v1';
  private _clientUrl: string = 'http://localhost:4200';
  private _accessToken: string;
  private _authString: string;
  private _headers: HttpHeaders;
  private _user: User;

  constructor(private _http: HttpClient) { }

  getUserInfo(user: User) {
    let url = this._baseUrl + '/me';

    this._accessToken = user.accessToken;
    this._authString = 'Bearer ' + this._accessToken;
    this._headers = new HttpHeaders();
    this._headers = this._headers.append('Content-Type', 'application/json');
    this._headers = this._headers.append('Authorization', this._authString);

    let options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ` + this._accessToken
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(function(res) {
        user.displayName = res.display_name;
        user.externalUrl = res.external_urls.spotify;
        user.href = res.href;
        user.id = res.id;
        user.image = res.images[0];
        user.uri = res.uri;
        user.path = '/user/' + res.id;
      });

    this._user = user;
  }

  getUser() {
    return this._user;
  }

  getUserTopArtists(){
    let artistsUrl = this._baseUrl + '/me/top/artists?limit=10&offset=0';
    return this._http
      .get(artistsUrl, {headers: this._headers});
  }

  getUserTopTracks() {
    let tracksUrl = this._baseUrl + '/me/top/tracks?limit=10&offset=0';
    return this._http
      .get(tracksUrl, {headers: this._headers});
  }

  getNumberOfSavedTracks() {
    let savedTracksUrl = this._baseUrl + '/me/tracks?limit=1&offset=0';
    return this._http
      .get(savedTracksUrl, {headers: this._headers});
  }

  getAllUserSavedTracks(offset: number){
    let savedTracksUrl = this._baseUrl + '/me/tracks?limit=50&offset=' + offset;
    return this._http.get(savedTracksUrl, {headers: this._headers});
  }

  createNewUserPlaylist(name: string, isPublic: boolean, description: string) {
    let playlistUrl = this._baseUrl + '/users/' + this._user.id + '/playlists';
    let data = {
      "name": name,
      "public": isPublic,
      "description": description
    };
    return this._http.post(playlistUrl, data, {headers: this._headers});
  }

  populateNewUserPlaylist(aggregatedTracks, playlistId) {
    let playlistUrl = this._baseUrl + '/users/' + this._user.id + '/playlists/' + playlistId + '/tracks';
    let uris = [];
    
    for(let i=0; i <= aggregatedTracks.length - 1; i++) {
      uris.push(aggregatedTracks[i].uri);
    }

    let data = {
      "uris": uris
    };
    return this._http.post(playlistUrl, data, {headers: this._headers});
  }

}
