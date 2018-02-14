import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpotifyService} from '../../services/spotify.service';
import {Result} from "../../../Result";
import 'rxjs/add/operator/map';
import {DropdownsService} from "../../services/dropdowns.service";
import {DynamicFormService} from "../../services/dynamic-form.service";
import {PlaylistService} from "../../services/playlist.service";

import {Router} from '@angular/router';



@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})

export class DropdownsComponent implements OnInit {
  savedTracks: any;
  queryInfo: Object = {};

  query: any;

  pageName = 'Aggregatr';
  pageVisited: boolean = false;
  t1_mil: number;
  t2_mil: number;

  submittedData;
  form: FormGroup;
  controls: any[];

  savedRes: any;
  tracksArr: Array<any> = [];

  constructor(private _spotifyService: SpotifyService, dropdownsService: DropdownsService,
              private dynamicFormService: DynamicFormService, private _playlistService: PlaylistService, private router: Router) {

    this.controls = dropdownsService.getQuestions();
  }

  ngOnInit(){
    // Need to figure out way to only load on the first time the page visited
    if(this.pageVisited === false) {
      this.getAllSavedTracks();
    }
    this.form = this.dynamicFormService.toFormGroup(this.controls);
    this._playlistService.currentSavedTracks.subscribe(savedTracks => this.savedTracks = savedTracks);
    this._playlistService.currentQueryInfo.subscribe(queryInfo => this.queryInfo = queryInfo);
  }

  onSubmit() {
    this.submittedData = this.form.value;
    this.parseInput(this.submittedData);
    this._playlistService.setDate(this.submittedData);
    this.router.navigateByUrl('/preview');
  }

  parseInput(data) {
    let month = data.month;
    let year = data.year;
    let daysInMonth;
    let string1, string2;
    let time1, time2;

    if(month !== 'select' && year !== 'select') {

      if(month === 'February') {
        if(year === '2008' || year === '2012' || year === '2016') {
          daysInMonth = 29;
        } else {
          daysInMonth = 28;
        }
      } else {
        if(month === 'January' || month === 'March' || month === 'May' || month === 'July' ||
            month === 'August' || month === 'October' || month === 'December') {
          daysInMonth = 31;
        } else {
          daysInMonth = 30;
        }
      }
      string1 = month + " 1, " + year + " 00:00:01";
      string2 = month + " " + daysInMonth + ", " + year + " 23:59:59";
      console.log("s1: " + string1);
      console.log("s2: " + string2);

      // Get upper and lower bounds of the month
      time1 = new Date(string1);
      time2 = new Date(string2);

      // Convert to milliseconds
      this.t1_mil = time1.getTime();
      this.t2_mil = time2.getTime();

      let query = {
        t1: this.t1_mil,
        t2: this.t2_mil
      };

      console.log("t1: " + query.t1);
      console.log("t2: " + query.t2);

      this._playlistService.updateQueryInfo(query);
    }

  }


  getAllSavedTracks() {
    let numberSaved = this._spotifyService.getUser().totalSaved;

    for(let offset = 0, i=0; offset <= numberSaved; offset += 50, i++) {
      this._spotifyService.getAllUserSavedTracks(offset)
        .subscribe((res) => {
          this.savedRes = res;
          console.log(this.savedRes.items);
          for (let i = 0; i < this.savedRes.items.length; i++) {
            this.insertSortedBy(this.tracksArr, this.savedRes.items[i], function(o) { return o['added_at']; });
            this._playlistService.updateSavedTracks(this.tracksArr);
          }
        });
    }
    this.pageVisited = true;
  }

  sortedIndexBy(array, value, iteratee) {
    const MAX_ARRAY_LENGTH = 1000000000;
    const MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1;

    let retHighest = true;

    value = iteratee(value);

    let low = 0;
    let high = array == null ? 0 : array.length;
    const valIsNaN = value !== value;
    const valIsNull = value === null;
    const valIsUndefined = value === undefined;

    while (low < high) {
      let setLow;
      const mid = Math.floor((low + high) / 2);
      const computed = iteratee(array[mid]);
      const othIsDefined = computed !== undefined;
      const othIsNull = computed === null;
      const othIsReflexive = computed === computed;

      if (valIsNaN) {
        setLow = retHighest || othIsReflexive
      } else if (valIsUndefined) {
        setLow = othIsReflexive && (retHighest || othIsDefined)
      } else if (valIsNull) {
        setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull)
      } else if (othIsNull) {
        setLow = false
      } else {
        setLow = retHighest ? (computed <= value) : (computed < value)
      }
      if (setLow) {
        low = mid + 1
      } else {
        high = mid
      }
    }
    return Math.min(high, MAX_ARRAY_INDEX)
  }

  insertSortedBy = (a, v, i) => a.splice(this.sortedIndexBy(a, v, i), 0, v);

}


