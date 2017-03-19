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
  filteredItems:gameData[];

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
			this.assignCopy();
			

			// console.log(JSON.stringify(gameData));
	});

  }

  assignCopy(){
  	this.filteredItems = Object.assign([], this.gamesData);
  }


  filterGameData(searchedText:string){

  	if(!searchedText) 
  		this.assignCopy(); //when nothing has typed

  	
   this.filteredItems = Object.assign([], this.gamesData).filter(

      item => (item.title.toLowerCase().indexOf(searchedText.toLowerCase()) > -1)
   )

   console.log(JSON.stringify(this.filteredItems));


   
   

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
