import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-model';
import { Movie_Genre } from 'src/app/models/movie-genre-model';

@Component({
  selector: 'app-add-genre-cast',
  template: `<h1 style="font-size: xx-large;"> ADD MOVIE CAST</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select MovieTitle</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="movieGenre.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input CastMemberName</mat-label>
        <input matInput type="movieGenre.genre" required genre="genre" #name="ngModel" [(ngModel)]="movieGenre.genre">
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="addMovieGenre()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-movie-genre.component.css']
})
export class AddMovieGenreComponent implements OnInit {
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });
  }

  movieGenre = new Movie_Genre();
  currentMovies: Movie[] = [];

  addMovieGenre(){
    console.log(this.movieGenre)
    this.movieService.addMovieGenre(this.movieGenre).subscribe((response : any) => {console.log(response)} );
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }
}
