import { Component, OnInit } from '@angular/core';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { TicketService } from 'src/app/services/ticket.service';
import { Tickets } from 'src/app/models/ticket-model';
import { WebRequestService } from 'src/app/services/web-request.service';

@Component({
  selector: 'app-ticket-select',
  template: 
  `<h1 style="font-size: xx-large;"> TICKET SELECT</h1>
  <table class = "table table-bordered">
  <thead>
    <tr>
      <th>TicketID</th>
      <th>Price</th>
      <th>Date</th>
      <th>Time</th>
      <th>BranchID</th>
      <th>ShowRoomNo</th>
      <th>Row</th>
      <th>Seat Number</th>
      <th>Age Range</th>
      <th>Type</th>
      <th>Select</th>
    </tr>
    </thead>
    <tbody>
      <tr *ngFor = "let currentTickets of currentTickets">
      <td><span>{{currentTickets.ticketID}}</span></td>
        <td><span>{{currentTickets.price}}</span></td>
        <td><span>{{currentTickets.date}}</span></td>
        <td><span>{{currentTickets.time}}</span></td>
        <td><span>{{currentTickets.branchID}}</span></td>
        <td><span>{{currentTickets.showRoomNo}}</span></td>
        <td><span>{{currentTickets.row}}</span></td>
        <td><span>{{currentTickets.seatNo}}</span></td>
        <td><span>{{currentTickets.ageRange}}</span></td>
        <td><span>{{currentTickets.type}}</span></td>
        <td><span><button (click) = "purchaseTickets(currentTickets.ticketID)" routerLink = "/checkout">Purchase Ticket</button></span></td>
      </tr>
    </tbody>
  </table>
`,
  styleUrls: ['./ticket-select.component.css']
})
export class TicketSelectComponent implements OnInit {

  constructor(private ticketsService : TicketService, private webReqService : WebRequestService) { }

  currentTickets: Tickets[] = [];

  ngOnInit(): void {
    this.getTickets()
    .subscribe((data: any) => {
      this.currentTickets = data as Tickets[];
    });
  }

  getTickets(){
    // change enpoint to reflect stored procedure enpoint in backend
    return this.webReqService.get("Tickets/"+ ticketGlobals.date + "/" + ticketGlobals.time + "/" + ticketGlobals.showRoomNo + "/" + ticketGlobals.branchID);
  }

  purchaseTickets(ticketID : Number){
    //console.log(ticketID)
    ticketGlobals.ticketID = ticketID;
  }

}
