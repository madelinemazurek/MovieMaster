import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-model';
import { Movie_Cast } from 'src/app/models/movie-cast-model';

@Component({
  selector: 'app-add-movie-cast',
  template: `<h1 style="font-size: xx-large;"> ADD MOVIE CAST</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select MovieTitle</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="movieCast.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input CastMemberName</mat-label>
        <input matInput type="movieCast.castMemberName" required castMemberName="castMemberName" #name="ngModel" [(ngModel)]="movieCast.castMemberName">
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="addMovieCast()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-movie-cast.component.css']
})
export class AddMovieCastComponent implements OnInit {
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });
  }

  movieCast = new Movie_Cast();
  currentMovies: Movie[] = [];

  addMovieCast(){
    console.log(this.movieCast)
    this.movieService.addMovieCast(this.movieCast).subscribe((response : any) => {console.log(response)} );
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }
}
