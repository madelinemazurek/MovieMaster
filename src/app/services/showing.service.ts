import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Showing } from 'src/app/models/showing-model';
import { Shows } from 'src/app/models/shows-model';

@Injectable({
  providedIn: 'root'
})
export class ShowingService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here
  getAllShowings() {
    return this.webReqService.get('Showings')
  }

  getCityShowings(val : string) {
    return this.webReqService.search('Search/City/' + val)
  }

  getTheaterShowings(val : string) {
    return this.webReqService.search('Search/Theater/' + val)
  }


  deleteShowing(pk : string){
    return this.webReqService.delete(pk)
  }

  deleteShows(pk : string){
    return this.webReqService.delete(pk)
  }
  
  addShows(shows : Shows){
    return this.webReqService.post('Shows', shows)
  }

  addShowing(showing : Showing){
    return this.webReqService.post('Showings', showing)
  }

}
