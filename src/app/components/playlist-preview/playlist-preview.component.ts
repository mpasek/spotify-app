import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../services/playlist.service";
import { trigger, style, stagger, transition, animate, query, keyframes } from '@angular/animations';

@Component({
  selector: 'app-playlist-preview',
  templateUrl: './playlist-preview.component.html',
  styleUrls: ['./playlist-preview.component.css'],
  animations: [
    trigger('tracksEnter', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('700ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-20%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.25}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
  ]
})
export class PlaylistPreviewComponent implements OnInit {
  subtitle: string;

  numberSaved: number = 0;
  savedTracks: any;
  queryInfo: any;
  aggregatedTracks: Array<any> = [];

  constructor(private _playlistService: PlaylistService) { }

  ngOnInit() {
    this._playlistService.currentQueryInfo.subscribe(queryInfo => {
      this.queryInfo = queryInfo;
      console.log(queryInfo);
    });
    this._playlistService.currentSavedTracks.subscribe(savedTracks => this.savedTracks = savedTracks);

    console.log(this.savedTracks);
    let date = this._playlistService.getDate();
    this.subtitle = date.month + " " + date.year;
    this._playlistService.setName(this.subtitle);
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
        this.numberSaved++;
        console.log(track);
      }
      

    }

    console.log('Number of track in playlist: ' + this.aggregatedTracks.length);
    this._playlistService.setAggregatedTracks(this.aggregatedTracks);
  }

}
