import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { DropdownsComponent } from "./components/dropdowns/dropdowns.component";
import { PlaylistPreviewComponent } from "./components/playlist-preview/playlist-preview.component";
import { SuccessComponent } from "./components/success/success.component";
import { InfoComponent } from "./components/info/info.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'user/:userPath',
    component: UserProfileComponent
  },
  {
    path: 'aggregatr',
    component: DropdownsComponent
  },
  {
    path: 'preview',
    component: PlaylistPreviewComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {}

