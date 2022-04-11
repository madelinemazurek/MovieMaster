import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Tickets } from 'src/app/models/ticket-model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here
  getAllTickets() {
    return this.webReqService.get('Tickets')
  }

  deleteTicket(pk : string){
    return this.webReqService.delete(pk)
  }
  
  getOneTicket(pk : Number) {
    return this.webReqService.get('Tickets/'+pk);
  }
  
  addTicket(ticket : Tickets){
    return this.webReqService.post('Tickets', ticket)
  }

  updateTicket(pk:string, ticket : Tickets){
    return this.webReqService.put(pk,ticket);
  }

}
