import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {User} from "../../../User";
import {PlaylistService} from "../../services/playlist.service";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit {
  private _user: User;

  userPath: string;
  playlistPath: string;
  playlistName: string;
  isPublic: boolean;
  description: string;
  size: number;
  createRes: any;
  playlistRes: any;

  constructor(private _spotifyService: SpotifyService, private _playlistService: PlaylistService) { }

  ngOnInit() {
    this._user = this._spotifyService.getUser();
    this.userPath = this._user.path;
    this.playlistName = this._playlistService.getName();
    this.isPublic = this._playlistService.getPrivacy();
    this.description = this._playlistService.getDescription();
    this.size = this._playlistService.getAggregatedTracks().length;

    this.createNewPlaylist(this.playlistName, this.isPublic, this.description);
  }

  createNewPlaylist(name, privacy, description) {
    this._spotifyService.createNewUserPlaylist(name, privacy, description)
      .subscribe((res) => {
        console.log(res);
        this.createRes = res;
        let playlistId = res['id'];
        let aggregatedTracks = this._playlistService.getAggregatedTracks();
        this.playlistPath = res['href'];
        console.log(this.playlistPath);
        let splicedTracks;

        // Max post size is 100, split requests if over
        while(this.size > 100) {
          this.size -= 100;
          splicedTracks = aggregatedTracks.splice(0, 100);
          this.populateNewPlaylist(splicedTracks, playlistId);
        }
          this.populateNewPlaylist(aggregatedTracks, playlistId);
      });

  }

  populateNewPlaylist(aggregatedTracks, playlistId) {
    this._spotifyService.populateNewUserPlaylist(aggregatedTracks, playlistId)
      .subscribe((res) => {
        console.log(res);
        this.playlistRes = res;
      });
  }

  onNavigate() {
    window.open(this.playlistPath, "_blank");
  }

}
