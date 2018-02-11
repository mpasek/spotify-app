import { Component, OnInit } from '@angular/core';
import { SpotifyService} from '../../services/spotify.service';
import { Option } from '../../../Option';
import { Timeframe } from '../../../Timeframe';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})

export class DropdownsComponent implements OnInit {

  selectedOption: Option = new Option(0, 'Custom');
  options: Option[];
  timeframes: Timeframe[];

  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit(){
    this.options= this._spotifyService.getOptions();
  }

  onSelect(optionid) {
    this.timeframes = this._spotifyService.getDates().filter((item) => item.optionid == optionid);
  }
}
