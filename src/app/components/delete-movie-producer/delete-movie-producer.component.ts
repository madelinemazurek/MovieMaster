import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie_Producer } from 'src/app/models/movie-producer-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-delete-movie-producer',
  template: `<h1 style="font-size: xx-large;"> DELETE MOVIE PRODUCER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="movProducer.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Producer Name</mat-label>
        <mat-select required name="producer" #producer="ngModel" [(ngModel)]="movProducer.producerName">
          <mat-option *ngFor="let currproducer of currentProducer" [value]="currproducer.producerName"> 
            {{currproducer.producerName}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteProducer()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-movie-producer.component.css']
})
export class DeleteMovieProducerComponent implements OnInit {
  constructor(private movieService : MovieService) { }

ngOnInit(): void {
this.getMovieProducer()
.subscribe((data: any) => {
this.currentProducer = data as Movie_Producer[];
console.log(this.currentProducer);
});
this.getMovies()
.subscribe((data: any) => {
this.currentMovies = data as Movie[];
console.log(this.currentMovies);
});

}

movProducer = new Movie_Producer();
currentProducer: Movie_Producer[] = [];
currentMovies: Movie[] = [];

deleteProducer(){
  this.movieService.deleteMovieElement("Movie_Producer/" + this.movProducer.movieTitle + "/" + this.movProducer.producerName)
    .subscribe((response : any) => {console.log(response)} );
}

getMovieProducer() {
return this.movieService.getAllMovieProducer();
}
getMovies() {
  return this.movieService.getAllMovies();
  }
}