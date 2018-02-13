import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../User';
import 'rxjs/add/operator/map';
import {Option} from "../../Option";
import {Timeframe} from "../../Timeframe";
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
    console.log('Offset: ' + offset);

    let savedTracksUrl = this._baseUrl + '/tracks?limit=50&offset=' + offset;
    return this._http.get(savedTracksUrl, {headers: this._headers});

    /*for(let offset = 0, i=0; offset <= this._user.totalSaved; offset += 50, i++) {
      let savedTracksUrl = this._baseUrl + '/tracks?limit=50&offset=' + offset;
      this._http.get(savedTracksUrl, {headers: this._headers})
        .pipe(res => {
          userSaved.push(res);
          console.log('Res in get: ' + res);
        });
    }
    console.log('User Saved: ' + userSaved);
    return Observable.forkJoin(userSaved);*/
  }

  /*getAllUserSavedTracks() {
    let savedTracksUrl = this._baseUrl + '/tracks?limit=50&offset=0';
    return this._http
      .get(savedTracksUrl, {headers: this._headers});
  }*/



  getOptions() {
    return [
      new Option(1, 'By Month' ),
      new Option(2, 'By Year' )
    ];
  }

  getDates() {
    return [
      new Timeframe(1, 1, 'Jan - 2017' ),
      new Timeframe(2, 1, 'Feb - 2017' ),
      new Timeframe(3, 1, 'Mar - 2017'),
      new Timeframe(4, 1, 'Apr - 2017'),
      new Timeframe(5, 1, 'May - 2017'),
      new Timeframe(6, 1, 'Jun - 2017'),
      new Timeframe(7, 1, 'Jul - 2017'),
      new Timeframe(8, 1, 'Aug - 2017'),
      new Timeframe(9, 1, 'Sep - 2017'),
      new Timeframe(10, 1, 'Oct - 2017'),
      new Timeframe(11, 1, 'Nov - 2017'),
      new Timeframe(12, 1, 'Dec - 2017'),
      new Timeframe(13, 1, 'Jan - 2018' ),
      new Timeframe(14, 1, 'Feb - 2018' ),

      new Timeframe(15, 2, '2008' ),
      new Timeframe(16, 2, '2009'),
      new Timeframe(17, 2, '2010' ),
      new Timeframe(18, 2, '2011' ),
      new Timeframe(19, 2, '2012' ),
      new Timeframe(20, 2, '2013' ),
      new Timeframe(21, 2, '2014' ),
      new Timeframe(22, 2, '2015' ),
      new Timeframe(23, 2, '2016' ),
      new Timeframe(24, 2, '2017' ),
      new Timeframe(25, 2, '2018' ),
    ];
  }

}
