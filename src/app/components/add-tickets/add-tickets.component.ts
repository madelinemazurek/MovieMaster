import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tickets',
  template: `<h1 style="font-size: xx-large;"> ADD TICKETS</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Row Count</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input AgeRange</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Price</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input SeatNo</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Type</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Date</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Time</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select ShowRoomNo</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select BranchID</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div>
  
  <!-- Based on number of seats -->
  <!-- <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Amount of Tickets</mat-label>
        <input matInput placeholder="" value="">
      </mat-form-field>
  </div> -->
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-tickets.component.css']
})
export class AddTicketsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
