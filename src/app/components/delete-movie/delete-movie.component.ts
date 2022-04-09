import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-delete-movie',
  template: 
  
  `<h1 style="font-size: xx-large;"> DELETE MOVIE</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="Title" #Title="ngModel" [(ngModel)]="Movie.title">
          <mat-option *ngFor="let currMovie of currentMovie" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click) = "deleteMovie()" routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private movieService : MovieService) { }

  currentMovie: Movie[] = [];
  Movie = new Movie();

  ngOnInit(): void {
    this.getMovie()
    .subscribe((data: any) => {
      this.currentMovie = data as Movie[];
      console.log(this.currentMovie[0].title);
      console.log(this.currentMovie);
  });
  }

  getMovie() {
    return this.movieService.getAllMovies();
  }
  deleteMovie(){
    this.movieService.deleteMovie("Movies/" + this.Movie.title).subscribe((response : any) => {console.log(response)} );
  }

}
