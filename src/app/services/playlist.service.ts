import { Injectable }   from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlaylistService {
  /*private _savedTracksArr: Array<any> = [];
  _queryInfo: Array<any> = [];
  private _startTime: number;
  private _endTime: number;*/


  private tracksSource = new BehaviorSubject<Array<any>>([]);
  currentSavedTracks = this.tracksSource.asObservable();

  private queryInfoSource = new BehaviorSubject<any>({});
  currentQueryInfo = this.queryInfoSource.asObservable();

  constructor() { }

  updateSavedTracks(savedTracks: any) {
    this.tracksSource.next(savedTracks);
  }

  updateQueryInfo(queryInfo: any) {
    this.queryInfoSource.next(queryInfo);
  }


  /*getQueryInfo() {
    return this._queryInfo;
  }

  setQueryInfo(time1, time2) {
    this._startTime = time1;
    this._endTime = time2;
    console.log('t1 in service is ' + this._startTime);
    this._queryInfo[0] = time1;
    this._queryInfo[1] = time2;
  }*/

}
