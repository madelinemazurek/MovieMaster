import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-model';
import { Movie_Producer } from 'src/app/models/movie-producer-model';

@Component({
  selector: 'app-add-movie-producer',
  template: `<h1 style="font-size: xx-large;"> ADD MOVIE PRODUCER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select MovieTitle</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="movieProducer.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input ProducerName</mat-label>
        <input matInput type="movieProducer.producerName" required producerName="producerName" #name="ngModel" [(ngModel)]="movieProducer.producerName">
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="addMovieProducer()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-movie-producer.component.css']
})
export class AddMovieProducerComponent implements OnInit {
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });
  }

  movieProducer = new Movie_Producer();
  currentMovies: Movie[] = [];

  addMovieProducer(){
    console.log(this.movieProducer)
    this.movieService.addMovieProducer(this.movieProducer).subscribe((response : any) => {console.log(response)} );
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }
}
