import { Component, OnInit } from '@angular/core';
import { ShowingService } from 'src/app/services/showing.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Showing } from 'src/app/models/showing-model';
import { Tickets } from 'src/app/models/ticket-model';

@Component({
  selector: 'app-add-tickets',
  template: `<h1 style="font-size: xx-large;"> ADD TICKETS</h1>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Starting Ticket ID</mat-label>
        <input matInput type="ticket.ticketID" required ticketID="ticketID" #name="ngModel" [(ngModel)]="ticketID">
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Row Count</mat-label>
        <input matInput type="ticket.ticketID" required ticketID="ticketID" #name="ngModel" [(ngModel)]="rowCount">
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Ticket Count</mat-label>
        <input matInput type="ticket.ticketID" required ticketID="ticketID" #name="ngModel" [(ngModel)]="ticketCount">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Age Range</mat-label>
        <mat-select required name="ageRange" #ageRange="ngModel" [(ngModel)]="ticket.ageRange">
          <mat-option value="All Ages">All Ages</mat-option>
          <mat-option value="13+">13+</mat-option>
          <mat-option value="18+">18+</mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Ticket Price</mat-label>
        <input matInput type="ticket.price" required price="price" #name="ngModel" [(ngModel)]="ticket.price">
      </mat-form-field>
  </div>
    
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Type</mat-label>
        <mat-select required name="type" #type="ngModel" [(ngModel)]="ticket.type">
          <mat-option value="Normal">Normal</mat-option>
          <mat-option value="Special Event">Special Event</mat-option>
          <mat-option value="Discount">Discount</mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Date</mat-label>
        <mat-select required name="date" #date="ngModel" [(ngModel)]="ticket.date">
          <mat-option *ngFor="let currShowing of currentShowings" [value]="currShowing.date"> 
            {{currShowing.date}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Time</mat-label>
        <mat-select required name="time" #time="ngModel" [(ngModel)]="ticket.time">
          <mat-option *ngFor="let currShowing of currentShowings" [value]="currShowing.time"> 
            {{currShowing.time}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Show Room Number</mat-label>
        <mat-select required name="showRoomNo" #showRoomNo="ngModel" [(ngModel)]="ticket.showRoomNo">
          <mat-option *ngFor="let currShowing of currentShowings" [value]="currShowing.showRoomNo"> 
            {{currShowing.showRoomNo}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Branch ID</mat-label>
        <mat-select required name="branchID" #branchID="ngModel" [(ngModel)]="ticket.branchID">
          <mat-option *ngFor="let currShowing of currentShowings" [value]="currShowing.branchID"> 
            {{currShowing.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
      
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createTickets()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit {
  constructor(private showingService : ShowingService, private ticketService : TicketService) { }

  ngOnInit(): void {
    this.getShowings()
      .subscribe((data: any) => {
        this.currentShowings = data as Showing[];
        console.log(this.currentShowings);
      });
  }

  ticket = new Tickets();
  rowCount : number = 0;
  ticketCount : number = 0;
  ticketID : number = 0;
  currentShowings: Showing[] = [];
  row: string[] = ["A", "B", "C", "D", "E", "F", "G", 
                  "H", "I", "J", "K", "L", "M", "N", 
                  "O", "P", "Q", "R", "S", "T", "U", 
                  "V", "W", "X", "Y", "Z"];

  createNewTicket(){
    console.log(this.ticket)
    this.ticketService.addTicket(this.ticket).subscribe((response : any) => {console.log(response)} );
  }

  getShowings() {
    return this.showingService.getAllShowings();
  }

  createTickets() {
    let countPerRow = this.ticketCount / this.rowCount;
    let lastID = +this.ticketID + +this.ticketCount;
    console.log(lastID);

    for (let i = 0; (i < this.rowCount) && (this.ticketID < lastID); i++) {
      for (let j = 0; j < countPerRow; j++) {
        this.ticket.row = this.row[i];
        this.ticket.seatNo = j+1;
        this.ticket.ticketID = this.ticketID;

        this.createNewTicket();

        this.ticketID++;
        if (this.ticketID >= lastID) {
          break;
        }
      }
    }
  }
}
