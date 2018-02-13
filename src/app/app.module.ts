import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { PlaylistPreviewComponent } from './components/playlist-preview/playlist-preview.component';
import { SuccessComponent } from './components/success/success.component';
import { InfoComponent } from './components/info/info.component';



import { DynamicFormModule } from './components/dynamic-form/dynamic-form.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UserProfileComponent,
    DropdownsComponent,
    PlaylistPreviewComponent,
    SuccessComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DynamicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
