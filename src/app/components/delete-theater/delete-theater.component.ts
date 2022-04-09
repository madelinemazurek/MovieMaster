import { Component, OnInit } from '@angular/core';
import { TheaterService } from 'src/app/services/theater.service';
import { Theater } from 'src/app/models/theater-model';

@Component({
  selector: 'app-delete-theater',
  template: `
  <h1 style="font-size: xx-large;"> DELETE THEATER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select TheaterName</mat-label>
        <mat-select required name="TheaterName" #TheaterName="ngModel" [(ngModel)]="Theater.name">
          <mat-option *ngFor="let currTheater of currentTheaters" [value]="currTheater.name"> 
            {{currTheater.name}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  
<button mat-button routerLink="/adminPage">Back</button>
<button mat-button (click)="deleteTheater()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-theater.component.css']
})
export class DeleteTheaterComponent implements OnInit {

  constructor(private theaterService : TheaterService) { }

  currentTheaters: Theater[] = [];
  Theater = new Theater();
  pk: string = "";

  ngOnInit(): void {
    this.getTheaters()
      .subscribe((data: any) => {
        this.currentTheaters = data as Theater[];
        console.log(this.currentTheaters[0].name);
        console.log(this.currentTheaters);
      });
  }

  getTheaters() {
    return this.theaterService.getAllTheaters();
  }
  deleteTheater(){
    this.theaterService.deleteTheater(this.pk.concat("Theaters/",this.Theater.name)).subscribe((response : any) => {console.log(response)} );
  }

}
