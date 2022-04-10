import { Component, OnInit } from '@angular/core';
import { SystemAdminService } from 'src/app/services/system-admin.service';
import { MovieService } from 'src/app/services/movie.service';
import { System_Admin } from 'src/app/models/systemAdmin-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-add-movie',
  template : `<h1 style="font-size: xx-large;"> ADD MOVIE</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input MovieTitle</mat-label>
        <input matInput type="movie.title" required title="title" #name="ngModel" [(ngModel)]="movie.title">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Runtime</mat-label>
        <input matInput type="movie.runtime" required runtime="runtime" #name="ngModel" [(ngModel)]="movie.runtime">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Description</mat-label>
        <input matInput type="movie.description" required description="description" #name="ngModel" [(ngModel)]="movie.description">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select AdminEmail</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="movie.adminEmail">
          <mat-option *ngFor="let currAdmin of currentAdmins" [value]="currAdmin.email"> 
            {{currAdmin.email}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewMovie()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  constructor(private adminService : SystemAdminService, private movieService : MovieService) { }

  ngOnInit(): void {
    this.getAdmins()
      .subscribe((data: any) => {
        this.currentAdmins = data as System_Admin[];
        console.log(this.currentAdmins);
      });
  }

  movie = new Movie();
  currentAdmins: System_Admin[] = [];

  createNewMovie(){
    console.log(this.movie)
    this.movieService.createMovie(this.movie).subscribe((response : any) => {console.log(response)} );
  }

  getAdmins() {
    return this.adminService.getAllSystemAdmins();
  }
}
