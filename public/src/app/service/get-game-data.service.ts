import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetGameDataService{

	constructor(private http:Http){
		
		console.log("post service initialized");
	}

	getGameData(){
		
		return this.http.get('/api/getData')
		.map(res => res.json());
	}
}