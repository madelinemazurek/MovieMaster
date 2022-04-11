import { Component, OnInit } from '@angular/core';
import { System_Admin } from 'src/app/models/systemAdmin-model';
import { SystemAdminService } from 'src/app/services/system-admin.service';
import{ globals } from 'src/app/models/globals';

@Component({
  selector: 'app-adminlogin',
  template: 
  `<h1 style="font-size: xx-large;"> ADMIN LOGIN</h1>
  <mat-card>
      <div class="Email">
        <mat-form-field appearance="fill">
          <mat-label>Enter admin email</mat-label>
          <input matInput placeholder="" value="" #email="ngModel" [(ngModel)]="SystemAdmin.email">
        </mat-form-field>
      </div>
    
      <div class="Password">
        <mat-form-field appearance="fill">
          <mat-label>Enter admin password</mat-label>
          <input matInput placeholder="" value="" #password="ngModel" [(ngModel)]="SystemAdmin.password">
        </mat-form-field>
      </div>
      <div class="submit">
        <button mat-button (click)="validate()" routerLink = "/adminPage" >Submit</button>
      </div>
    </mat-card>
  `,
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private systemAdminService : SystemAdminService) { }

  SystemAdmin = new System_Admin();
  currentSystemAdmin: System_Admin[] = [];

  ngOnInit(): void {
    this.getSystemAdmin()
    .subscribe((data: any) => {
      this.currentSystemAdmin = data as System_Admin[];
      console.log(this.currentSystemAdmin[0].email);
      console.log(this.currentSystemAdmin);
  });
  }

  getSystemAdmin() {
    return this.systemAdminService.getAllSystemAdmins();
  }

  validate(){
    for(let i = 0; i<this.currentSystemAdmin.length;  i++){
      if(this.SystemAdmin.password == this.currentSystemAdmin[i].password && this.SystemAdmin.email == this.currentSystemAdmin[i].email){ 
        globals.adminLog = true;
        //console.log("Good log");
      }
    }
  }

}
