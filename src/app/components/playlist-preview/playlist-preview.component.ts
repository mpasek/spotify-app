import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {PlaylistService} from "../../services/playlist.service";

@Component({
  selector: 'app-playlist-preview',
  templateUrl: './playlist-preview.component.html',
  styleUrls: ['./playlist-preview.component.css']
})
export class PlaylistPreviewComponent implements OnInit {
  savedTracks: any;
  queryInfo: any;
  aggregatedTracks: Array<any> = [];

  constructor(private _spotifyService: SpotifyService, private _playlistService: PlaylistService) { }

  ngOnInit() {
    this._playlistService.currentQueryInfo.subscribe(queryInfo => {
      this.queryInfo = queryInfo;
      console.log(queryInfo);
    });
    this._playlistService.currentSavedTracks.subscribe(savedTracks => this.savedTracks = savedTracks);

    console.log('saved');
    console.log(this.savedTracks);
    this.aggregateIntoPlaylist();
  }

  aggregateIntoPlaylist() {
    let t1 = this.queryInfo.t1;
    let t2 = this.queryInfo.t2;
    console.log("t1: " + t1);
    console.log("t2: " + t2);

    for(let i=0; i <= this.savedTracks.length - 1; i++) {
      let date = new Date(this.savedTracks[i]['added_at']);
      let dateInMil = date.getTime();
      let track = this.savedTracks[i]['track'];

      if(dateInMil >= t1 && dateInMil <= t2) {
        this.aggregatedTracks.push(track);
        console.log(track);
      }

    }

    console.log('Number of track in playlist: ' + this.aggregatedTracks.length);

  }

}
