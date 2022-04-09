import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/services/showroom.service';
import { Showroom } from 'src/app/models/showroom-model';

@Component({
  selector: 'app-delete-showroom',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE SHOWROOM</h1>


  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Showroom Nummber</mat-label>
        <mat-select required name="showroomNo" #showroomNo="ngModel" [(ngModel)]="Showroom.showroomNo">
          <mat-option *ngFor="let currShowroom of currentShowroom" [value]="currShowroom.showroomNo"> 
            {{currShowroom.showroomNo}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
    <mat-form-field appearance="fill">
      <mat-label>Select ShowroomID</mat-label>
      <input matInput placeholder="" value="">
    </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-showroom.component.css']
})
export class DeleteShowroomComponent implements OnInit {

  constructor(private showroomService : ShowroomService) { }

  currentShowrooms: Showroom[] = [];
  Showroom = new Showroom();
  pk: string = "";

  ngOnInit(): void {
    // this.getShowrooms()
    //   .subscribe((data: any) => {
    //     this.currentShowrooms = data as Showroom[];
    //   });
  }

  // getShowrooms() {
  //   return this.showroomService.getAllShowrooms();
  // }
  // deleteTheater(){
  //   this.showroomService.deleteShowroom("Showrooms/" + this.Showroom.showRoomNo + "/" + this.Showroom.branchID).subscribe((response : any) => {console.log(response)} );
  // }

}
