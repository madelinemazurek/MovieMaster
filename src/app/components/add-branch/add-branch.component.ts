import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { TheaterService } from 'src/app/services/theater.service';
import { Branch } from 'src/app/models/branch-model';
import { Theater } from 'src/app/models/theater-model';

@Component({
  selector: 'app-add-branch',
  template: `
  <h1 style="font-size: xx-large;"> ADD BRANCH</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input BranchID</mat-label>
        <input matInput type="branch.BranchID" required BranchID="BranchID" #BranchID="ngModel" [(ngModel)]="Branch.branchID">
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input BranchName</mat-label>
        <input matInput type="branch.BranchName" required BranchName="BranchName" #BranchName="ngModel" [(ngModel)]="Branch.branchName">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Address</mat-label>
        <input matInput type="branch.Address" required Address="Address" #Address="ngModel" [(ngModel)]="Branch.address">
      </mat-form-field>
  </div>
  <!-- type="branch.TheaterName" -->
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select TheaterName</mat-label>
        <mat-select required name="TheaterName" #TheaterName="ngModel" [(ngModel)]="Branch.theaterName">
          <mat-option *ngFor="let currTheater of currentTheaters" [value]="currTheater.name"> 
            {{currTheater.name}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewBranch()" routerLink="/adminPage">Submit</button>
  `, 
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private branchService : BranchService, private theaterService : TheaterService) { }

  Branch = new Branch();
  selectedValue: string = "";
  currentTheaters: Theater[] = [];

  ngOnInit(): void {
    this.getTheaters()
      .subscribe((data: any) => {
        this.currentTheaters = data as Theater[];
        console.log(this.currentTheaters[0].name);
        console.log(this.currentTheaters);
      });
  }

  createNewBranch(){
    this.branchService.createBranch(this.Branch).subscribe((response : any) => {console.log(response)} );
  }

  getTheaters() {
    return this.theaterService.getAllTheaters();
  }

}
