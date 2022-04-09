import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Showroom } from 'src/app/models/showroom-model';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here

  
}
