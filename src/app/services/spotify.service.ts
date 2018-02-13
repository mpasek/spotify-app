import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../User';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/forkJoin'

@Injectable()
export class SpotifyService {
  private _baseUrl: string = 'https://api.spotify.com/v1/me';
  private _clientUrl: string = 'http://localhost:4200';
  private _accessToken: string;
  private _authString: string;
  private _headers: HttpHeaders;
  private _user: User;

  constructor(private _http: HttpClient) { }

  getUserInfo(user: User) {
    let url = this._baseUrl;

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
    let artistsUrl = this._baseUrl + '/top/artists?limit=10&offset=0';
    return this._http
      .get(artistsUrl, {headers: this._headers});
  }

  getUserTopTracks() {
    let tracksUrl = this._baseUrl + '/top/tracks?limit=10&offset=0';
    return this._http
      .get(tracksUrl, {headers: this._headers});
  }

  getNumberOfSavedTracks() {
    let savedTracksUrl = this._baseUrl + '/tracks?limit=1&offset=0';
    return this._http
      .get(savedTracksUrl, {headers: this._headers});
  }

  getAllUserSavedTracks(offset: number){
    let savedTracksUrl = this._baseUrl + '/tracks?limit=50&offset=' + offset;
    return this._http.get(savedTracksUrl, {headers: this._headers});
  }

}
