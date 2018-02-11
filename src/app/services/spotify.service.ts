import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { User } from '../../User';
import 'rxjs/Rx';
import {Option} from "../../Option";
import {Timeframe} from "../../Timeframe";

@Injectable()
export class SpotifyService {
  private baseUrl: string = 'https://api.spotify.com/v1/me';
  private clientUrl: string = 'http://localhost:4200';
  private userUrl: string;
  private accessToken: string;
  private user: User;

  constructor(private _http: HttpClient) {

  }



  /*getUserInfo(user: User){
    let url = this.baseUrl;
    this.accessToken = user.accessToken;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer '+ this.accessToken);

    /!*let headers = new Headers({ 'Content-Type': 'application/json' },{'Authorization': this.accessToken}); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option*!/
    return this._http.get(url, {headers})
      .map(res => res.json());


  }*/

  /*getUserInfo(user: User) {
    this.accessToken = user.accessToken;
    let url = this.baseUrl;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.accessToken = user.accessToken;
    headers.append('Authorization', `Bearer ` + this.accessToken);



    return this._http
      .get(url, headers )
      .map(res => res.json());
  }*/



  /*getUserInfo(user: User){
    this.accessToken = user.accessToken;
    let url = this.baseUrl;
    let headers = new Headers();
    headers.append('Authorization' , 'Bearer ' + this.accessToken);
    return this._http.get(url, {headers: headers})
      .map((res: Response) => res.json());
  }*/

  getUserInfo(user: User) {
    let url = this.baseUrl;
    this.accessToken = user.accessToken;
    console.log("Auth token: " + this.accessToken);

    let options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ` + this.accessToken
      }
    };

    fetch(url, options)
      .then(res => res.json())
      /*.then(res => console.log(res))*/
      .then(function(res) {
        user.displayName = res.display_name;
        user.externalUrl = res.external_urls.spotify;
        user.href = res.href;
        user.id = res.id;
        user.image = res.images[0];
        user.uri = res.uri;
        user.path = '/user/' + res.id;
        console.log(user.path);
      });
    
    this.user = user;
  }
  
  getUser() {
    return this.user;
  }


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


  /*getTopArtists() {

  }

  getTopTracks() {

  }

  getNumberOfSavedTracks() {

  }*/

}
