import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch-model';

@Component({
  selector: 'app-add-branch',
  template: `
  <h1 style="font-size: xx-large;"> ADD BRANCH</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input BranchName</mat-label>
        <input matInput type="branch.BranchName" required BranchName="BranchName" #BranchName="ngModel" [(ngModel)]="Branch.BranchName">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Address</mat-label>
        <input matInput type="branch.Address" required Address="Address" #Address="ngModel" [(ngModel)]="Branch.Address">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select TheaterName</mat-label>
        <input matInput type="branch.Address" required Address="Address" #Address="ngModel" [(ngModel)]="Branch.Address">
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewBranch()" routerLink="/adminPage">Submit</button>
  `, 
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  constructor(private branchService : BranchService) { }

  ngOnInit(): void {
  }

  Branch = new Branch();
  createNewBranch(){

    this.branchService.createBranch(this.Branch).subscribe((response : any) => {console.log(response)} );
  }

}
