import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import { GetGameDataService } from '../../service/get-game-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   providers:[GetGameDataService]
})
export class HomeComponent implements OnInit {


  gamesData:gameData[];

  constructor(

	public flashMessage:FlashMessagesService,
  	private getGameDataSer:GetGameDataService
  	
  	) { 

  	this.getGameDataSer.getGameData().subscribe(gameData => {

			// this.posts=posts;
			/*
					{
					"_id":"58cd2224c33b17f60ed96fe7",
					"updatedAt":"2017-03-18T12:03:48.425Z",
					"createdAt":"2017-03-18T12:03:48.425Z",
					"title":"LittleBigPlanet PS Vita",
					"platform":"PlayStation Vita",
					"score":"9",
					"genre":"Platformer",
					"editors_choice":"Y",
					"__v":0
					}


			*/

			this.gamesData=gameData;

			// console.log(JSON.stringify(gameData));
	});

  }

  ngOnInit() {


  }

  

}
interface gameData{

	title:string;
	platform:string;
	score:string;
	genre:string;
	editors_choice:string;

}
