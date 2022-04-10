//get and display all showings in the database as filtered by city or theater name

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Showing } from 'src/app/models/showing-model';
import { ShowingService } from 'src/app/services/showing.service';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template : 
  `<h1 style="font-size: xx-large;"> Home</h1>
  <div class="SearchCity">
      <mat-form-field appearance="fill">
        <mat-label>Search by City</mat-label>
        <input matInput placeholder="Ex. Calgary" value="">
      </mat-form-field>
  </div>
  
  <div class="SearchTheater">
    <mat-form-field appearance="fill">
      <mat-label>Search by theater name</mat-label>
      <input matInput placeholder="Ex. Landmark" value="">
    </mat-form-field>
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
        <td><span><button routerLink = "/ticketselect">View Tickets</button></span></td>
      </tr>
    </tbody>
  </table>
 `
 ,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private showingService : ShowingService) { }
  
  //make branch id branch name!!!!
  //displayedColumns : string[] = ['MovieTitle','Date','Time','ShowRoomNo','BranchID'];
  currentShowings: Showing[] = [];
  //Showing = new Showing();
  //dataSource = new MatTableDataSource(this.currentShowings);

  ngOnInit(): void {
    this.getShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }

  getShowings() {
    return this.showingService.getAllShowings();
  }

}
