import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/services/showroom.service';
import { BranchService } from 'src/app/services/branch.service';
import { Showroom } from 'src/app/models/showroom-model';
import { Branch } from 'src/app/models/branch-model';

@Component({
  selector: 'app-delete-showroom',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE SHOWROOM</h1>
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
        <mat-select required name="branchID" #BranchID="ngModel" [(ngModel)]="Showroom.branchID">
          <mat-option *ngFor="let currBranch of currentBranches" [value]="currBranch.branchID"> 
            {{currBranch.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteShowroom()" routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-showroom.component.css']
})
export class DeleteShowroomComponent implements OnInit {

  constructor(private showroomService : ShowroomService, private branchService : BranchService) { }

  currentShowrooms: Showroom[] = [];
  currentBranches: Branch[] = [];
  Branch = new Branch();
  Showroom = new Showroom();

  ngOnInit(): void {
    this.getShowrooms()
      .subscribe((data: any) => {
        this.currentShowrooms = data as Showroom[];
      });
    this.getBranches()
      .subscribe((data: any) => {
        this.currentBranches = data as Branch[];
      });
  }

  getShowrooms() {
    return this.showroomService.getAllShowrooms();
  }
  getBranches() {
    return this.branchService.getAllBranches();
  }
  deleteShowroom(){
    this.showroomService.deleteShowroom("Showrooms/" + this.Showroom.showRoomNo + "/" + this.Showroom.branchID).subscribe((response : any) => {console.log(response)} );
  }

}
