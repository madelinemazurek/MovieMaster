import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Tickets } from 'src/app/models/ticket-model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here

  
}
