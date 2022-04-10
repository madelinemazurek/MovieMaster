import { Component, OnInit } from '@angular/core';
import { Tickets } from 'src/app/models/ticket-model';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-checkout',
  template: 
  
  `<h1 style="font-size: xx-large;"> CHECKOUT</h1>
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
      <th>Checkout</th>
    </tr>
    </thead>
    <tbody>
      <tr *ngFor = "let currentTicket of currentTicket">
      <td><span>{{currentTicket.ticketID}}</span></td>
        <td><span>{{currentTicket.price}}</span></td>
        <td><span>{{currentTicket.date}}</span></td>
        <td><span>{{currentTicket.time}}</span></td>
        <td><span>{{currentTicket.branchID}}</span></td>
        <td><span>{{currentTicket.showRoomNo}}</span></td>
        <td><span>{{currentTicket.row}}</span></td>
        <td><span>{{currentTicket.seatNo}}</span></td>
        <td><span>{{currentTicket.ageRange}}</span></td>
        <td><span>{{currentTicket.type}}</span></td>
        <td><span><button (click) = "updateTicketEmail(currentTicket.ticketID)" routerLink = "/checkout">Purchase Ticket</button></span></td>
      </tr>
    </tbody>
  </table>
  <button mat-button routerLink = "/">Confirm Purchase</button>
  `,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  currentTicket: Tickets[] = [];

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(){
    return this.ticketService.getOneTicket(ticketGlobals.ticketID);
  }

  updateTicketEmail(id : Number){
    console.log("Work in Progress");
  }

}
