import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie_Writer } from 'src/app/models/movie-writer-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-delete-movie-writer',
  template: `<h1 style="font-size: xx-large;"> DELETE MOVIE WRITER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="movWriter.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Writer Name</mat-label>
        <mat-select required name="Writer" #Writer="ngModel" [(ngModel)]="movWriter.writerName">
          <mat-option *ngFor="let currWriter of currentWriter" [value]="currWriter.writerName"> 
            {{currWriter.writerName}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteWriter()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./delete-movie-writer.component.css']
})
export class DeleteMovieWriterComponent implements OnInit {
  constructor(private movieService : MovieService) { }

ngOnInit(): void {
this.getMovieWriter()
.subscribe((data: any) => {
this.currentWriter = data as Movie_Writer[];
console.log(this.currentWriter);
});
this.getMovies()
.subscribe((data: any) => {
this.currentMovies = data as Movie[];
console.log(this.currentMovies);
});

}

movWriter = new Movie_Writer();
currentWriter: Movie_Writer[] = [];
currentMovies: Movie[] = [];

deleteWriter(){
  this.movieService.deleteMovieElement("Movie_Writer/" + this.movWriter.movieTitle + "/" + this.movWriter.writerName)
    .subscribe((response : any) => {console.log(response)} );
}

getMovieWriter() {
return this.movieService.getAllMovieWriter();
}
getMovies() {
  return this.movieService.getAllMovies();
  }
}