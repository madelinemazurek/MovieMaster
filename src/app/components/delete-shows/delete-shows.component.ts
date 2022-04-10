import { Component, OnInit } from '@angular/core';
import { ShowingService } from 'src/app/services/showing.service';
import { MovieService } from 'src/app/services/movie.service';
import { TheaterService } from 'src/app/services/theater.service';
import { Movie } from 'src/app/models/movie-model';
import { Theater } from 'src/app/models/theater-model';
import { Shows } from 'src/app/models/shows-model';

@Component({
  selector: 'app-delete-shows',
  template: `<h1 style="font-size: xx-large;"> DELETE SHOWS</h1>

  <div class>
      <mat-form-field appearance="fill">
        <mat-label>Select TheaterName</mat-label>
        <mat-select required name="theaterName" #theaterName="ngModel" [(ngModel)]="shows.theaterName">
          <mat-option *ngFor="let currTheater of currentTheaters" [value]="currTheater.name"> 
            {{currTheater.name}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <div>
    <mat-form-field appearance="fill">
      <mat-label>Select MovieTitle</mat-label>
      <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="shows.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
    </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteShows()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-shows.component.css']
})
export class DeleteShowsComponent implements OnInit {
  constructor(private movieService : MovieService, private showingService : ShowingService,
    private theaterService : TheaterService) { }

ngOnInit(): void {
this.getTheaters()
.subscribe((data: any) => {
this.currentTheaters = data as Theater[];
console.log(this.currentTheaters);
});
this.getMovies()
.subscribe((data: any) => {
this.currentMovies = data as Movie[];
console.log(this.currentMovies);
});
}

shows = new Shows();
currentTheaters: Theater[] = [];
currentMovies: Movie[] = [];

deleteShows(){
  this.showingService.deleteShowing("Shows/" + this.shows.theaterName + "/" + this.shows.movieTitle)
    .subscribe((response : any) => {console.log(response)} );
}

getTheaters() {
return this.theaterService.getAllTheaters();
}

getMovies() {
return this.movieService.getAllMovies();
}
}
