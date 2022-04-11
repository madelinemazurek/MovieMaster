import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-model';
import { Movie_Director } from 'src/app/models/movie-director-model';

@Component({
  selector: 'app-add-director-cast',
  template: `<h1 style="font-size: xx-large;"> ADD MOVIE DIRECTOR</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select MovieTitle</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="movieDirector.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Director Name</mat-label>
        <input matInput type="movieDirector.directorName" required directorName="directorName" #name="ngModel" [(ngModel)]="movieDirector.directorName">
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="addMovieDirector()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-movie-director.component.css']
})
export class AddMovieDirectorComponent implements OnInit {
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });
  }

  movieDirector = new Movie_Director();
  currentMovies: Movie[] = [];

  addMovieDirector(){
    console.log(this.movieDirector)
    this.movieService.addMovieDirector(this.movieDirector).subscribe((response : any) => {console.log(response)} );
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }
}
