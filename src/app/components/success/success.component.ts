import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {User} from "../../../User";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  private user: User;
  path: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.user = this._spotifyService.getUser();
    this.path = this.user.path;
  }

}
