import { Component, OnInit } from '@angular/core';
import { SystemAdminService } from 'src/app/services/system-admin.service';
import { System_Admin } from 'src/app/models/systemAdmin-model';

@Component({
  selector: 'app-delete-system-admin',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE SYSTEM ADMIN</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Admin Email</mat-label>
        <mat-select required name="Email" #Email="ngModel" [(ngModel)]="SystemAdmin.email">
          <mat-option *ngFor="let currSystemAdmin of currentSystemAdmin" [value]="currSystemAdmin.email"> 
            {{currSystemAdmin.email}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click) = "deleteSystemAdmin()"routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-system-admin.component.css']
})
export class DeleteSystemAdminComponent implements OnInit {

  constructor(private systemAdminService : SystemAdminService) { }

  currentSystemAdmin: System_Admin[] = [];
  SystemAdmin = new System_Admin();

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
  deleteSystemAdmin(){
    this.systemAdminService.deleteSystemAdmin("System_Admin/" + this.SystemAdmin.email).subscribe((response : any) => {console.log(response)} );
  }


}
