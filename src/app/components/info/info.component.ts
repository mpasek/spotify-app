import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {User} from "../../../User";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})


export class InfoComponent implements OnInit {
  private _accessToken: string;
  user: User;
  userPath: string;

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.user = new User();

    // Gets access token from url
    let urlParams = new URLSearchParams(window.location.search);
    this._accessToken = urlParams.get('access_token');
    this.user.accessToken = this._accessToken;

    //this._accessToken = window.localStorage.getItem('access_token');

    this._spotifyService.getUserInfo(this.user);
    this.user = this._spotifyService.getUser();
    this.userPath = this.user.path;
  }

}
