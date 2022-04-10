import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie-model';
import { Movie_Writer } from 'src/app/models/movie-writer-model';

@Component({
  selector: 'app-add-movie-writer',
  template: `<h1 style="font-size: xx-large;"> ADD MOVIE WRITER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select MovieTitle</mat-label>
        <mat-select required name="branchID" #branchName="ngModel" [(ngModel)]="movieWriter.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input WriterName</mat-label>
        <input matInput type="movieWriter.writerName" required writerName="writerName" #name="ngModel" [(ngModel)]="movieWriter.writerName">
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="addMovieWriter()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-movie-writer.component.css']
})
export class AddMovieWriterComponent implements OnInit {
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });
  }

  movieWriter = new Movie_Writer();
  currentMovies: Movie[] = [];

  addMovieWriter(){
    console.log(this.movieWriter)
    this.movieService.addMovieWriter(this.movieWriter).subscribe((response : any) => {console.log(response)} );
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }

}
