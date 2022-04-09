import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Showing } from 'src/app/models/showing-model';

@Injectable({
  providedIn: 'root'
})
export class ShowingService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here
  getAllShowings() {
    return this.webReqService.get('Showings')
  }
  deleteShowing(pk : string){
    return this.webReqService.delete(pk)
  }
  
}
