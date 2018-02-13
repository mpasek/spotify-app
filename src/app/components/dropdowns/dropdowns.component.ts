import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SpotifyService} from '../../services/spotify.service';
import {Result} from "../../../Result";
import 'rxjs/add/operator/map';
import {DropdownsService} from "../../services/dropdowns.service";
import {DynamicFormService} from "../../services/dynamic-form.service";



@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})

export class DropdownsComponent implements OnInit {
  name = 'Angular';

  submittedData;

  form: FormGroup;
  payLoad = '';

  controls: any[];

  savedRes: any;
  savedResArr: Array<Result> = [];
  tracksArr: Array<any> = [];

  constructor(private _spotifyService: SpotifyService, dropdownsService: DropdownsService, private dynamicFormService: DynamicFormService) {
    this.controls = dropdownsService.getQuestions();
  }

  ngOnInit(){
    this.getAllSavedTracks();
    this.form = this.dynamicFormService.toFormGroup(this.controls);
  }

  onSubmit() {
    this.submittedData = this.form.value;
    console.log("Data Submitted");
    console.log(this.submittedData);
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


