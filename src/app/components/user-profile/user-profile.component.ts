import { Component, OnInit } from '@angular/core';
import { trigger, style, stagger, transition, animate, query, keyframes } from '@angular/animations';
import { SpotifyService } from '../../services/spotify.service';
import {User} from "../../../User";
import 'rxjs/Rx';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [
    trigger('artistsEnter', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('400ms', [
          animate('1000ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ]),
    trigger('tracksEnter', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('500ms', [
          animate('2000ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ],
})


export class UserProfileComponent implements OnInit {
  user: User;
  artistRes: any;
  tracksRes: any;
  numberSavedRes: any;
  items: any;
  trackItems: any;
  numberOfSaved: number;

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
    this.user = this._spotifyService.getUser();
    this.getTopArtists();
    this.getTopTracks();
    this.getNumberOfSavedTracks();
  }

  getTopArtists() {
    this._spotifyService.getUserTopArtists()
      .subscribe((res) => {
        console.log(res);
        this.artistRes = res;
        this.items = res['items'];
      });

  }

  getTopTracks() {
    this._spotifyService.getUserTopTracks()
      .subscribe((res) => {
        console.log(res);
        this.tracksRes = res;
        this.trackItems = res['items'];
        console.log(this.trackItems);
      });
  }

  getNumberOfSavedTracks() {
    this._spotifyService.getNumberOfSavedTracks()
      .subscribe((res) => {
        console.log(res);
        this.numberSavedRes = res;
        this.user.totalSaved = res['total'];
        this.numberOfSaved = this.user.totalSaved;
      });
  }


}
