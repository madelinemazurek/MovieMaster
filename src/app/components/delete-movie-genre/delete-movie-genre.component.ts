import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie_Genre } from 'src/app/models/movie-genre-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-delete-movie-genre',
  template: `<h1 style="font-size: xx-large;"> DELETE MOVIE GENRE</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="movGenre.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Genre Name</mat-label>
        <mat-select required name="genre" #genre="ngModel" [(ngModel)]="movGenre.genre">
          <mat-option *ngFor="let currgenre of currentgenre" [value]="currgenre.genre"> 
            {{currgenre.genre}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deletegenre()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-movie-genre.component.css']
})
export class DeleteMovieGenreComponent implements OnInit {
  constructor(private movieService : MovieService) { }

ngOnInit(): void {
this.getMoviegenre()
.subscribe((data: any) => {
this.currentgenre = data as Movie_Genre[];
console.log(this.currentgenre);
});
this.getMovies()
.subscribe((data: any) => {
this.currentMovies = data as Movie[];
console.log(this.currentMovies);
});

}

movGenre = new Movie_Genre();
currentgenre: Movie_Genre[] = [];
currentMovies: Movie[] = [];

deletegenre(){
  this.movieService.deleteMovieElement("Movie_genre/" + this.movGenre.movieTitle + "/" + this.movGenre.genre)
    .subscribe((response : any) => {console.log(response)} );
}

getMoviegenre() {
return this.movieService.getAllMovieGenre();
}
getMovies() {
  return this.movieService.getAllMovies();
  }
}
