import { Injectable }   from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlaylistService {
  date: any;
  
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

  setDate(date) {
    this.date = date;
  }
  
  getDate() {
    return this.date;
  }

}
