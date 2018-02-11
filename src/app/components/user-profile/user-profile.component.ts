import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {User} from "../../../User";
import {Track} from "../../../Track";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private user: User;

  artistRes: any;

  topArtists: any[];
  topTracks: Track[];

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
    /*
    // Gets access token from url
    let urlParams = new URLSearchParams(window.location.search);
    this._accessToken = urlParams.get('access_token');

    // Pass auth token to User object
    this.user.accessToken = this._accessToken;

    */
    this.user = this._spotifyService.getUser();
    this.getTopArtists();
    this.getTopTracks(this.user);
    this.getNumberOfSavedTracks(this.user);
  }

  getUserInfo() {
    return this.user;
  }

  getTopArtists() {
    this._spotifyService.getUserTopArtists()
      .subscribe(res => {
        this.artistRes = res;
        console.log("Artists: " + this.artistRes);
      });

    //this.topArtists = this.artistRes.items;
    //console.log(this.artistRes.limit);
    console.log("JSON: " + this.artistRes);
  }

  getTopTracks(user: User) {
    // TODO
  }

  getNumberOfSavedTracks(user: User) {
    // TODO
  }


}
