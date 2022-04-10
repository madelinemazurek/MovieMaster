import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/services/showroom.service';
import { Showroom } from 'src/app/models/showroom-model';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch-model';

@Component({
  selector: 'app-add-showroom',
  template: `<h1 style="font-size: xx-large;"> ADD SHOWROOM</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select BranchID</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="showroom.branchID">
          <mat-option *ngFor="let currBranch of currentBranches" [value]="currBranch.branchID"> 
            {{currBranch.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input NumberOfSeats</mat-label>
        <input matInput type="showroom.numberOfSeats" required numberOfSeats="numberOfSeats" #name="ngModel" [(ngModel)]="showroom.numberOfSeats">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input ShowRoomType</mat-label>
        <input matInput type="showroom.showRoomType" required showRoomType="showRoomType" #name="ngModel" [(ngModel)]="showroom.showRoomType">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input SeatType</mat-label>
        <input matInput type="showroom.seatType" required seatType="seatType" #name="ngModel" [(ngModel)]="showroom.seatType">
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Showroom Number</mat-label>
        <input matInput type="showroom.showRoomNo" required showRoomNo="showRoomNo" #name="ngModel" [(ngModel)]="showroom.showRoomNo">
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewShowroom()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-showroom.component.css']
})
export class AddShowroomComponent implements OnInit {

  constructor(private showroomService : ShowroomService, private branchService : BranchService) { }

  ngOnInit(): void {
    this.getBranches()
      .subscribe((data: any) => {
        this.currentBranches = data as Branch[];
        console.log(this.currentBranches);
      });
  }

  showroom = new Showroom();
  currentBranches: Branch[] = [];

  createNewShowroom(){
    console.log(this.showroom)
    this.showroomService.addShowroom(this.showroom).subscribe((response : any) => {console.log(response)} );
  }

  getBranches() {
    return this.branchService.getAllBranches();
  }
}
