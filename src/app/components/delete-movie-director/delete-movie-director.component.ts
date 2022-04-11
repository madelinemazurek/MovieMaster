import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie_Director } from 'src/app/models/movie-director-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-delete-movie-director',
  template: `<h1 style="font-size: xx-large;"> DELETE MOVIE DIRECTOR</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="director.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Director Name</mat-label>
        <mat-select required name="directorName" #directorName="ngModel" [(ngModel)]="director.directorName">
          <mat-option *ngFor="let currdirector of currentDirector" [value]="currdirector.directorName"> 
            {{currdirector.directorName}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteDirector()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-movie-director.component.css']
})
export class DeleteMovieDirectorComponent implements OnInit {
  constructor(private movieService : MovieService) { }

ngOnInit(): void {
this.getMovieDirector()
.subscribe((data: any) => {
this.currentDirector = data as Movie_Director[];
console.log(this.currentDirector);
});
this.getMovies()
.subscribe((data: any) => {
this.currentMovies = data as Movie[];
console.log(this.currentMovies);
});

}

director = new Movie_Director();
currentDirector: Movie_Director[] = [];
currentMovies: Movie[] = [];

deleteDirector(){
  this.movieService.deleteMovieElement("Movie_Director/" + this.director.movieTitle + "/" + this.director.directorName)
    .subscribe((response : any) => {console.log(response)} );
}

getMovieDirector() {
return this.movieService.getAllMovieDirector();
}
getMovies() {
  return this.movieService.getAllMovies();
  }
}
