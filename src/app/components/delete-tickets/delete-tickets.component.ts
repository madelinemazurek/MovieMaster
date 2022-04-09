import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Tickets } from 'src/app/models/ticket-model';

@Component({
  selector: 'app-delete-tickets',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE TICKET</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select TicketID</mat-label>
        <mat-select required name="ticketID" #ticketID="ngModel" [(ngModel)]="Ticket.ticketID">
          <mat-option *ngFor="let currTicket of currentTicket" [value]="currTicket.ticketID"> 
            {{currTicket.ticketID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteTicket()" routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-tickets.component.css']
})
export class DeleteTicketsComponent implements OnInit {

  constructor(private ticketService : TicketService) { }

  currentTicket: Tickets[] = [];
  Ticket = new Tickets();

  ngOnInit(): void {
    this.getTicket()
    .subscribe((data: any) => {
      this.currentTicket = data as Tickets[];
      console.log(this.currentTicket[0].ticketID);
      console.log(this.currentTicket);
  });
  }

  getTicket() {
    return this.ticketService.getAllTickets();
  }
  deleteTicket(){
    this.ticketService.deleteTicket("Tickets/" + this.Ticket.ticketID).subscribe((response : any) => {console.log(response)} );
  }

}
