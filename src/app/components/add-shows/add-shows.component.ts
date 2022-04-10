import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { TheaterService } from 'src/app/services/theater.service';
import { ShowingService } from 'src/app/services/showing.service';
import { Theater } from 'src/app/models/theater-model';
import { Movie } from 'src/app/models/movie-model';
import { Shows } from 'src/app/models/shows-model';

@Component({
  selector: 'app-add-shows',
  template: `<h1 style="font-size: xx-large;"> ADD SHOWS</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select MovieTitle</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="shows.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select TheaterName</mat-label>
        <mat-select required name="TheaterName" #TheaterName="ngModel" [(ngModel)]="shows.theaterName">
          <mat-option *ngFor="let currTheater of currentTheaters" [value]="currTheater.name"> 
            {{currTheater.name}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="addShows()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-shows.component.css']
})
export class AddShowsComponent implements OnInit {
  constructor(private theaterService : TheaterService, 
              private movieService : MovieService, 
              private showingService : ShowingService) { }

  ngOnInit(): void {
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });

      this.getTheaters()
      .subscribe((data: any) => {
        this.currentTheaters = data as Theater[];
        console.log(this.currentTheaters);
      });
  }

  shows = new Shows();
  currentMovies: Movie[] = [];
  currentTheaters: Theater[] = [];

  addShows(){
    console.log(this.shows)
    this.showingService.addShows(this.shows).subscribe((response : any) => {console.log(response)} );
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }

  getTheaters() {
    return this.theaterService.getAllTheaters();
  }
}
