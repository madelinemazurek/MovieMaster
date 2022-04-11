//get and display all showings in the database as filtered by city or theater name

import { Component, OnInit } from '@angular/core';
//import { MatTableDataSource } from '@angular/material/table';
import { Showing } from 'src/app/models/showing-model';
import { Branch } from 'src/app/models/branch-model';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { ShowingService } from 'src/app/services/showing.service';
import { BranchService } from 'src/app/services/branch.service';

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
        <th>BranchName</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let currentShowings of currentShowings">
          <td><span>{{currentShowings.movieTitle}}</span></td>
          <td><span>{{currentShowings.date}}</span></td>
          <td><span>{{currentShowings.time}}</span></td>
          <td><span>{{currentShowings.showRoomNo}}</span></td>
          <td><span>{{findBranchName(currentShowings.branchID)}}</span></td>
          <td><span><button (click) = "findTickets(currentShowings.date,currentShowings.time,currentShowings.showRoomNo,currentShowings.branchID, currentShowings.movieTitle)" routerLink = "/ticketselect">View Tickets</button></span></td>
        </tr>
      </tbody>
    </table>

  </mat-tab>

  <mat-tab label="Search By Theater">

    <div class="Search Theater">
      <mat-form-field appearance="fill">
        <mat-label>Search by theater name</mat-label>
        <mat-select required placeholder="Ex. Landmark" name="branchID" #branchID="ngModel" [(ngModel)]="theaterVal">
          <mat-option *ngFor="let currBranch of currentBranches" [value]="currBranch.branchID"> 
            {{currBranch.theaterName + " : " + currBranch.branchName}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-button (click)="searchByTheater()" >SEARCH</button>
      <button mat-button (click)="ngOnInit()" (click)="cityVal=''">CLEAR</button>
    </div>

    <table class = "table table-bordered">
    <thead>
      <tr>
        <th>MovieTitle</th>
        <th>Date</th>
        <th>Time</th>
        <th>ShowRoomNo</th>
        <th>BranchName</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let currentShowings of currentShowings">
          <td><span>{{currentShowings.movieTitle}}</span></td>
          <td><span>{{currentShowings.date}}</span></td>
          <td><span>{{currentShowings.time}}</span></td>
          <td><span>{{currentShowings.showRoomNo}}</span></td>
          <td><span>{{findBranchName(currentShowings.branchID)}}</span></td>
          <td><span><button (click) = "findTickets(currentShowings.date,currentShowings.time,currentShowings.showRoomNo,currentShowings.branchID,currentShowings.movieTitle)" routerLink = "/ticketselect">View Tickets</button></span></td>
        </tr>
      </tbody>
    </table>

  </mat-tab>

</mat-tab-group>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private showingService : ShowingService, private branchService : BranchService) { }
  
  //make branch id branch name!!!!
  //displayedColumns : string[] = ['MovieTitle','Date','Time','ShowRoomNo','BranchID'];
  currentShowings: Showing[] = [];
  currentBranches: Branch[] = [];
  cityVal: string = "";
  theaterVal: string = ""; //this is a branchID

  ngOnInit(): void {
    this.getShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
    this.getBranches()
    .subscribe((data: any) => {
      this.currentBranches = data as Branch[];
      console.log(this.currentBranches);
    });
  }

  getBranches() {
    return this.branchService.getAllBranches();
  }

  getShowings() {
    return this.showingService.getAllShowings();
  }

  getCityShowings() {
    return this.showingService.getCityShowings(this.cityVal);
  }

  getTheaterShowings() {
    return this.showingService.getTheaterShowings(this.theaterVal);
  }

   findTickets(date : string, time : string, showRoomNo : Number, branchID : Number, movieTitle : string ){
    ticketGlobals.date = date;
    ticketGlobals.time = time;
    ticketGlobals.showRoomNo = showRoomNo;
    ticketGlobals.branchID = branchID;
    ticketGlobals.movieTitle = movieTitle;
    //console.log(ticketGlobals.date);
  }

  findBranchName(branchID : Number) {
    for (let currBranch of this.currentBranches) {
      if(currBranch.branchID = branchID) {
        return currBranch.branchName;
      }
    }
    return "";
  }

  searchByCity() {
    console.log("Searching for " + this.cityVal);
    if (this.cityVal == "") {
      return;
    }
    this.getCityShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }

  searchByTheater() {
    console.log("Searching for " +  this.theaterVal);
    if (this.theaterVal == "") {
      return;
    }
    this.getTheaterShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }
}
