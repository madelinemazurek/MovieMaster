//get and display all showings in the database as filtered by city or theater name

import { Component, OnInit } from '@angular/core';
//import { MatTableDataSource } from '@angular/material/table';
import { Showing } from 'src/app/models/showing-model';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { ShowingService } from 'src/app/services/showing.service';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template : `<h1 style="font-size: xx-large;"> Home</h1>

<mat-tab-group mat-align-tabs="start">
  <mat-tab label="Search By City">

    <div class="SearchCity">
        <mat-form-field appearance="fill">
          <mat-label>Search by City</mat-label>
          <input matInput placeholder="Ex. Calgary" type="text" [(ngModel)]="cityVal">
        </mat-form-field>
        <button mat-button (click)="searchByCity()" >SEARCH</button>
        <button mat-button (click)="ngOnInit()" (click)="cityVal=''" >CLEAR</button>
    </div>

    <table class = "table table-bordered">
    <thead>
      <tr>
        <th>MovieTitle</th>
        <th>Date</th>
        <th>Time</th>
        <th>ShowRoomNo</th>
        <th>BranchID</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let currentShowings of currentShowings">
          <td><span>{{currentShowings.movieTitle}}</span></td>
          <td><span>{{currentShowings.date}}</span></td>
          <td><span>{{currentShowings.time}}</span></td>
          <td><span>{{currentShowings.showRoomNo}}</span></td>
          <td><span>{{currentShowings.branchID}}</span></td>
          <td><span><button (click) = "findTickets(currentShowings.date,currentShowings.time,currentShowings.showRoomNo,currentShowings.branchID)" routerLink = "/ticketselect">View Tickets</button></span></td>
        </tr>
      </tbody>
    </table>

  </mat-tab>

  <mat-tab label="Search By Theater">

    <div class="Search Theater">
      <mat-form-field appearance="fill">
        <mat-label>Search by theater name</mat-label>
        <input matInput placeholder="Ex. Landmark" type="text" [(ngModel)]="theaterVal">
      </mat-form-field>
      <button mat-button (click)="searchByTheater()">SEARCH</button>
      <button mat-button (click)="ngOnInit()" (click)="cityVal=''">CLEAR</button>
    </div>

    <table class = "table table-bordered">
    <thead>
      <tr>
        <th>MovieTitle</th>
        <th>Date</th>
        <th>Time</th>
        <th>ShowRoomNo</th>
        <th>BranchID</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let currentShowings of currentShowings">
          <td><span>{{currentShowings.movieTitle}}</span></td>
          <td><span>{{currentShowings.date}}</span></td>
          <td><span>{{currentShowings.time}}</span></td>
          <td><span>{{currentShowings.showRoomNo}}</span></td>
          <td><span>{{currentShowings.branchID}}</span></td>
          <td><span><button (click) = "findTickets(currentShowings.date,currentShowings.time,currentShowings.showRoomNo,currentShowings.branchID)" routerLink = "/ticketselect">View Tickets</button></span></td>
        </tr>
      </tbody>
    </table>

  </mat-tab>

</mat-tab-group>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private showingService : ShowingService) { }
  
  //make branch id branch name!!!!
  //displayedColumns : string[] = ['MovieTitle','Date','Time','ShowRoomNo','BranchID'];
  currentShowings: Showing[] = [];
  cityVal: string = "";
  theaterVal: string = "";

  ngOnInit(): void {
    this.getShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }

  getShowings() {
    return this.showingService.getAllShowings();
  }

  findTickets(date : string, time : string, showRoomNo : Number, branchID : Number ){
    ticketGlobals.date = date;
    ticketGlobals.time = time;
    ticketGlobals.showRoomNo = showRoomNo;
    ticketGlobals.branchID = branchID;
    //console.log(ticketGlobals.date);
  }

  searchByCity() {
    console.log("Searching for " + this.cityVal);
    if (this.cityVal == "") {
      return;
    }
    this.currentShowings = [];
  }

  searchByTheater() {
    console.log("Searching for " +  this.theaterVal);
    if (this.theaterVal == "") {
      return;
    }
    this.currentShowings = [];
  }
}
