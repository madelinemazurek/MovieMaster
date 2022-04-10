import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/services/showroom.service';
import { ShowingService } from 'src/app/services/showing.service';
import { Showing } from 'src/app/models/showing-model';
import { Showroom } from 'src/app/models/showroom-model';

@Component({
  selector: 'app-delete-showing',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE SHOWING</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select the Date</mat-label>
        <mat-select required name="date" #date="ngModel" [(ngModel)]="Showing.date">
          <mat-option *ngFor="let currShowing of currentShowings" [value]="currShowing.date"> 
            {{currShowing.date}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select the Time</mat-label>
        <mat-select required name="time" #time="ngModel" [(ngModel)]="Showing.time">
          <mat-option *ngFor="let currShowing of currentShowings" [value]="currShowing.time"> 
            {{currShowing.time}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Showroom Number</mat-label>
        <mat-select required name="showroomNo" #showroomNo="ngModel" [(ngModel)]="Showroom.showRoomNo">
          <mat-option *ngFor="let currShowroom of currentShowrooms" [value]="currShowroom.showRoomNo"> 
            {{currShowroom.showRoomNo}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select BranchID</mat-label>
        <mat-select required name="branchID" #branchID="ngModel" [(ngModel)]="Showroom.branchID">
          <mat-option *ngFor="let currShowroom of currentShowrooms" [value]="currShowroom.branchID"> 
            {{currShowroom.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteShowing()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-showing.component.css']
})
export class DeleteShowingComponent implements OnInit {

  constructor(private showroomService : ShowroomService, private showingService : ShowingService) { }

  currentShowrooms: Showroom[] = [];
  currentShowings: Showing[] = [];
  Showing = new Showing();
  Showroom = new Showroom();

  ngOnInit(): void {
    this.getShowrooms()
    .subscribe((data: any) => {
      this.currentShowrooms = data as Showroom[];
    });
  this.getShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }

  getShowrooms() {
    return this.showroomService.getAllShowrooms();
  }
  getShowings() {
    return this.showingService.getAllShowings();
  }
  deleteShowing(){
    this.showingService.deleteShowing("Showings/" + this.Showing.date + "/" + this.Showing.time + "/" + this.Showroom.showRoomNo + "/" + this.Showroom.branchID)
      .subscribe((response : any) => {console.log(response)} );
  }

}
