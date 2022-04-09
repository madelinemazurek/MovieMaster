import { Component, OnInit } from '@angular/core';
import { TheaterService } from 'src/app/services/theater.service';
import { Theater } from 'src/app/models/theater-model';

@Component({
  selector: 'app-add-theater',
  //templateUrl: './add-theater.component.html',
  template: `
  <h1 style="font-size: xx-large;"> ADD THEATER</h1>
  <div>
      <mat-form-field appearance="fill" hideRequiredMarker>
        <mat-label>Input Theater Name</mat-label>
          <input matInput type="theater.Name" required Name="name" #name="ngModel" [(ngModel)]="theater.name">
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewTheater()" routerLink="/adminPage">Submit</button>
  `, 
  styleUrls: ['./add-theater.component.css']
})

export class AddTheaterComponent implements OnInit {
  constructor(private theaterService : TheaterService) { }

  ngOnInit(): void {
  }

  theater = new Theater();
  createNewTheater(){
    this.theaterService.createTheater(this.theater).subscribe((response : any) => {console.log(response)} );
  }

}
