import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { globals } from 'src/app/models/globals';
import { Tickets } from 'src/app/models/ticket-model';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-checkout',
  template: `<h1 style="font-size: xx-large;"> CHECKOUT</h1>
  
  <table class = "table table-bordered">
  <thead>
    <tr>
      <th>Movie</th>
      <th>Date</th>
      <th>Time</th>
      <th>Seat Number</th>
      <th>Row</th>
      <th>Showroom Number</th>
      <th>Type</th>
      <th>Price</th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor = "let ticket of ticketID">
      <td>{{movieTitle}}</td>
      <td>{{date[ticketID.indexOf(ticket)]}}</td>
      <td>{{time[ticketID.indexOf(ticket)]}}</td>
      <td>{{seatNo[ticketID.indexOf(ticket)]}}</td>
      <td>{{row[ticketID.indexOf(ticket)]}}</td>
      <td>{{showRoomNo[ticketID.indexOf(ticket)]}}</td>
      <td>{{type[ticketID.indexOf(ticket)]}}</td>
      <td>\${{price[ticketID.indexOf(ticket)]}}</td>
    </tr>
    </tbody>
  </table>
  <div>Total: {{total}}</div>
  <h2 style = "font-size: large;">Payment Information:</h2>
  <div>CardNumber: {{cardNumber}}</div>
  <div>CVV: {{cVV}}</div>
  <div>ExpirationDate: {{expirationDate}}</div>
  <button mat-button (click) = "clearCart()" routerLink = "/ticketselect">Clear Cart</button>
  <button mat-button (click) = "updateTicketEmail()" routerLink = "/success">Confirm Purchase</button>
  `,
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  //displayed information

  movieTitle : string = ticketGlobals.movieTitle;
  date : string[] = Cart.date;
  time : string[] = Cart.time;
  seatNo : Number[] = Cart.seatNo;
  row : string[] = Cart.row;
  price : string[] = Cart.price;
  showRoomNo : Number[] = Cart.showRoomNo;
  ticketID : Number[] = Cart.ticketID;
  type : string[] = Cart.type;
  ageRange : string[] = Cart.ageRange;
  branchID : Number[] = Cart.branchID;
  total : Number = Cart.total;

  tickets = new Tickets();

  cardNumber = globals.cardNumber;
  cVV = globals.cVV;
  expirationDate = globals.expirationDate
  pk : string = "";

  ngOnInit(): void {
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

  updateTicketEmail(){
    for(let i = 0; i <this.ticketID.length; i++){
      this.tickets.ticketID = this.ticketID[i];
      this.tickets.row = this.row[i];
      this.tickets.ageRange = this.ageRange[i];
      this.tickets.price = this.price[i];
      this.tickets.seatNo = this.seatNo[i];
      this.tickets.type = this.type[i];
      this.tickets.buyerEmail = globals.buyerEmail;
      this.tickets.date = this.date[i];
      this.tickets.time = this.time[i];
      this.tickets.showRoomNo = this.showRoomNo[i];
      this.tickets.branchID = this.branchID[i];
     // this.ticketService.deleteTicket("Tickets/"+this.tickets.ticketID).subscribe((response : any) => {console.log(response)} );;
      this.ticketService.updateTicket("Tickets/" + this.tickets.ticketID, this.tickets).subscribe((response : any) => {console.log(response)} );
     // this.ticketService.addTicket(this.tickets).subscribe((response : any) => {console.log(response)} );
    }
  }

}
