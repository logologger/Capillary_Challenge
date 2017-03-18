import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {GetGameDataService} from './service/get-game-data.service';






const appRoutes:Routes=[
{
  path:'',
  component:HomeComponent
}
]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [GetGameDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
