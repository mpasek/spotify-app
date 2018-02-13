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
          this.savedResArr.push(this.savedRes);

          console.log(this.savedResArr);
          console.log(typeof this.savedResArr);
        });
    }

  }
}
