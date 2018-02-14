import { Injectable }   from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlaylistService {
  date: any;
  name: string;
  description: string = 'Made with Aggregatr';
  isPublic: boolean = true;
  aggregatedTracks: Array<any> = [];

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

  setAggregatedTracks(aggregatedTracks) {
    this.aggregatedTracks = aggregatedTracks;
  }

  getAggregatedTracks() {
    return this.aggregatedTracks;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }

  setName(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  makePrivate() {
    this.isPublic = false;
  }

  makePublic() {
    this.isPublic = true;
  }

  getPrivacy() {
    return this.isPublic;
  }

}
