import { Component, OnInit } from '@angular/core';
import { SystemAdminService } from 'src/app/services/system-admin.service';
import { System_Admin } from 'src/app/models/systemAdmin-model';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch-model';

@Component({
  selector: 'app-add-system-admin',
  template : `<h1 style="font-size: xx-large;"> ADD SYSTEM ADMIN</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Email</mat-label>
        <input matInput type="admin.email" required email="email" #name="ngModel" [(ngModel)]="admin.email">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Password</mat-label>
        <input matInput type="admin.password" required password="password" #name="ngModel" [(ngModel)]="admin.password">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input FName</mat-label>
        <input matInput type="admin.fName" required fName="fName" #name="ngModel" [(ngModel)]="admin.fName">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input LName</mat-label>
        <input matInput type="admin.lName" required lName="lName" #name="ngModel" [(ngModel)]="admin.lName">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select BranchID</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="admin.branchID">
          <mat-option *ngFor="let currBranch of currentBranches" [value]="currBranch.branchID"> 
            {{currBranch.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewSysAdmin()" routerLink="/adminPage">Submit</button>
  
  
  `,
  styleUrls: ['./add-system-admin.component.css']
})
export class AddSystemAdminComponent implements OnInit {

  constructor(private adminService : SystemAdminService, private branchService : BranchService) { }

  ngOnInit(): void {
    this.getBranches()
      .subscribe((data: any) => {
        this.currentBranches = data as Branch[];
        console.log(this.currentBranches);
      });
  }

  admin = new System_Admin();
  currentBranches: Branch[] = [];

  createNewSysAdmin(){
    console.log(this.admin)
    this.adminService.createAdmin(this.admin).subscribe((response : any) => {console.log(response)} );
  }

  getBranches() {
    return this.branchService.getAllBranches();
  }

}
