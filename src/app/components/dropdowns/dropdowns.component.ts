import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import { Option } from '../../../Option';
import { Timeframe } from '../../../Timeframe';
import {Result} from "../../../Result";
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})

export class DropdownsComponent implements OnInit {
  savedRes: any;
  savedResArr: Array<Result> = [];
  tracksArr: Array<any> = [];

  selectedOption: Option = new Option(0, 'Custom');
  options: Option[];
  timeframes: Timeframe[];

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit(){
    this.options= this._spotifyService.getOptions();
    this.getAllSavedTracks();
  }

  onSelect(optionid) {
    this.timeframes = this._spotifyService.getDates().filter((item) => item.optionid == optionid);
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

            console.log(this.tracksArr);
          }
        });
    }
  }

  sortedIndexBy(array, value, iteratee) {
    const MAX_ARRAY_LENGTH = 4294967295;
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
