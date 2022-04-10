import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Showroom } from 'src/app/models/showroom-model';
import { Shows } from 'src/app/models/shows-model';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here
  getAllShowrooms() {
    return this.webReqService.get('Showrooms')
  }

  deleteShowroom(pk : string){
    return this.webReqService.delete(pk)
  }

  addShowroom(showroom : Showroom){
    return this.webReqService.post('Showrooms', showroom)
  }
}
