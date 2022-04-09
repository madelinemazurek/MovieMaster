import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/services/branch.service';
import { Branch } from 'src/app/models/branch-model';

@Component({
  selector: 'app-delete-branch',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE BRANCH</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select BranchID</mat-label>
        <mat-select required name="branchID" #BranchID="ngModel" [(ngModel)]="Branch.branchID">
          <mat-option *ngFor="let currBranch of currentBranches" [value]="currBranch.branchID"> 
            {{currBranch.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>

  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteBranch()" routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-branch.component.css']
})
export class DeleteBranchComponent implements OnInit {

  constructor(private branchService : BranchService) { }

  currentBranches: Branch[] = [];
  Branch = new Branch();
  pk: string = "";

  ngOnInit(): void {
    this.getBranches()
      .subscribe((data: any) => {
        this.currentBranches = data as Branch[];
        console.log(this.currentBranches[0].branchID);
        console.log(this.currentBranches);
    });
  }

  getBranches() {
    return this.branchService.getAllBranches();
  }
  deleteBranch(){
    this.branchService.deleteBranch("Branches/" + this.Branch.branchID).subscribe((response : any) => {console.log(response)} );
  }

}
