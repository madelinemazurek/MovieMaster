import { Component, OnInit } from '@angular/core';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { TicketService } from 'src/app/services/ticket.service';
import { Tickets } from 'src/app/models/ticket-model';
import { WebRequestService } from 'src/app/services/web-request.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-ticket-select',
  template: `<h1 style="font-size: xx-large;"> Ticket Select for {{movieTitle}}</h1>
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
        <td><span><button (click) = "addTicketToCart(currentTickets.date, currentTickets.time, currentTickets.seatNo, currentTickets.row, currentTickets.price, currentTickets.showRoomNo, currentTickets.ticketID,currentTickets.type, currentTickets.branchID, currentTickets.ageRange)">Add Ticket to Cart</button></span></td>
      </tr>
    </tbody>
  </table>
  <button mat-button (click) = "clearCart()" routerLink="/">Cancel</button>
  <button mat-button routerLink="/checkout">Checkout</button>
  `,

  styleUrls: ['./ticket-select.component.css']
})
export class TicketSelectComponent implements OnInit {

  constructor(private ticketsService : TicketService, private webReqService : WebRequestService) { }

  currentTickets: Tickets[] = [];
  movieTitle : string = ticketGlobals.movieTitle;

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

  clearCart(){
    Cart.movieTitle = [];
    Cart.date = [];
    Cart.time = [];
    Cart.seatNo = [];
    Cart.row = [];
    Cart.price = [];
    Cart.showRoomNo = [];
    Cart.ticketID = [];
    Cart.ageRange = [];
    Cart.type = [];
    Cart.buyerEmail = [];
    Cart.branchID = [];
    Cart.total = 0;
  }

  addTicketToCart(date:string,time:string,seatNo:Number,row:string,price:string,showRoomNo:Number, ticketID:Number,type:string,branchID:Number,ageRange:string){
    for(let i = 0; i<Cart.ticketID.length;i++){
      if(Cart.ticketID[i] == ticketID) return;
    }
    Cart.date.push(date);
    //Cart.movieTitle.push(ticketGlobals.movieTitle);
    Cart.time.push(time);
    Cart.seatNo.push(seatNo);
    Cart.row.push(row);
    Cart.price.push(price);
    Cart.showRoomNo.push(showRoomNo);
    Cart.ticketID.push(ticketID);
    Cart.type.push(type);
    Cart.branchID.push(branchID);
    Cart.ageRange.push(ageRange);
    Cart.total = +Cart.total + +price;
  }

}
