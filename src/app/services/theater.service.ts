import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Theater } from 'src/app/models/theater-model';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private webReqService: WebRequestService) { }

  createTheater(theater : Theater){
    // Theater is the object payload that will be added to the database
    return this.webReqService.post('Theaters', theater )
  }

  getAllTheaters() {
    return this.webReqService.get('Theaters')
  }

  deleteTheater(pk : string){
    return this.webReqService.delete(pk)
  }
}
