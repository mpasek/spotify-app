import { Component } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { DropdownsService } from './services/dropdowns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SpotifyService, DropdownsService]
})
export class AppComponent {
  title = 'app';
}
