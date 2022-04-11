import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie_Cast } from 'src/app/models/movie-cast-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-delete-movie-cast',
  template: `<h1 style="font-size: xx-large;"> DELETE CAST MEMBER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="cast.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Cast Member Name</mat-label>
        <mat-select required name="castMemberName" #castMemberName="ngModel" [(ngModel)]="cast.castMemberName">
          <mat-option *ngFor="let currCast of currentCast" [value]="currCast.castMemberName"> 
            {{currCast.castMemberName}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteCast()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-movie-cast.component.css']
})
export class DeleteMovieCastComponent implements OnInit {
  constructor(private movieService : MovieService) { }

ngOnInit(): void {
this.getMovieCast()
.subscribe((data: any) => {
this.currentCast = data as Movie_Cast[];
console.log(this.currentCast);
});
this.getMovies()
.subscribe((data: any) => {
this.currentMovies = data as Movie[];
console.log(this.currentCast);
});

}

cast = new Movie_Cast();
currentCast: Movie_Cast[] = [];
currentMovies: Movie[] = [];

deleteCast(){
  this.movieService.deleteMovieElement("Movie_Cast/" + this.cast.movieTitle + "/" + this.cast.castMemberName)
    .subscribe((response : any) => {console.log(response)} );
}

getMovieCast() {
return this.movieService.getAllMovieCast();
}
getMovies() {
  return this.movieService.getAllMovies();
  }
}
