//get and display all showings in the database as filtered by city or theater name

import { Component, OnInit } from '@angular/core';
import { Showing } from 'src/app/models/showing-model';
import { Branch } from 'src/app/models/branch-model';
import { Movie } from 'src/app/models/movie-model';
import { Full_Movie } from 'src/app/models/full-movie-model';
import { Movie_Cast } from 'src/app/models/movie-cast-model';
import { Movie_Director } from 'src/app/models/movie-director-model';
import { Movie_Genre } from 'src/app/models/movie-genre-model';
import { Movie_Producer } from 'src/app/models/movie-producer-model';
import { Movie_Writer } from 'src/app/models/movie-writer-model';
import { ticketGlobals } from 'src/app/models/ticketGlobals';
import { ShowingService } from 'src/app/services/showing.service';
import { BranchService } from 'src/app/services/branch.service';
import { MovieService } from 'src/app/services/movie.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template : `

<mat-tab-group mat-align-tabs="start">
  <mat-tab label="Search By City">

    <div class="SearchCity">
        <mat-form-field appearance="fill">
          <mat-label>Search by City</mat-label>
          <input matInput placeholder="Ex. Calgary" type="text" [(ngModel)]="cityVal">
        </mat-form-field>
        <button mat-button (click)="searchByCity()" >SEARCH</button>
        <button mat-button (click)="ngOnInit()" (click)="cityVal=''" >CLEAR</button>
    </div>

    <table class = "table table-bordered">
    <thead>
      <tr>
        <th>MovieTitle</th>
        <th>Date</th>
        <th>Time</th>
        <th>ShowRoomNo</th>
        <th>BranchName</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let currShow of currentShowings">
          <td><span>{{currShow.movieTitle}}</span></td>
          <td><span>{{currShow.date}}</span></td>
          <td><span>{{currShow.time}}</span></td>
          <td><span>{{currShow.showRoomNo}}</span></td>
          <td><span>{{findBranchName(currShow.branchID)}}</span></td>
          <td><span><button (click) = "findTickets(currShow.date,currShow.time,currShow.showRoomNo,currShow.branchID, currShow.movieTitle)" routerLink = "/ticketselect">View Tickets</button></span></td>
          <mat-expansion-panel >
            <mat-expansion-panel-header>
              <mat-panel-title>
                View Movie Information
              </mat-panel-title>
            </mat-expansion-panel-header>
            <h1>{{currShow.movieTitle}}</h1>
            <p>{{findMovieRuntime(currShow.movieTitle)}}</p>
            <p>{{findMovieDescription(currShow.movieTitle)}}</p>
            <p>{{findMovieCast(currShow.movieTitle)}}</p>
            <p>{{findMovieDirector(currShow.movieTitle)}}</p>
            <p>{{findMovieGenre(currShow.movieTitle)}}</p>
            <p>{{findMovieProducer(currShow.movieTitle)}}</p>
            <p>{{findMovieWriter(currShow.movieTitle)}}</p>
          </mat-expansion-panel>
        </tr>
      </tbody>
    </table>

  </mat-tab>

  <mat-tab label="Search By Theater">

    <div class="Search Theater">
      <mat-form-field appearance="fill">
        <mat-label>Select Theater:Branch</mat-label>
        <mat-select name="branchID" #branchID="ngModel" [(ngModel)]="theaterVal">
          <mat-option *ngFor="let currBranch of currentBranches" [value]="currBranch.branchID"> 
            {{currBranch.theaterName + " : " + currBranch.branchName}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
      <button mat-button (click)="searchByTheater()" >SEARCH</button>
    </div>

    <table class = "table table-bordered">
    <thead>
      <tr>
        <th>MovieTitle</th>
        <th>Date</th>
        <th>Time</th>
        <th>ShowRoomNo</th>
        <th>BranchName</th>
        <th>Select</th>
      </tr>
      </thead>
      <tbody>
        <tr *ngFor = "let currShow of currentShowings">
          <td><span>{{currShow.movieTitle}}</span></td>
          <td><span>{{currShow.date}}</span></td>
          <td><span>{{currShow.time}}</span></td>
          <td><span>{{currShow.showRoomNo}}</span></td>
          <td><span>{{findBranchName(currShow.branchID)}}</span></td>
          <td><span><button (click) = "findTickets(currShow.date,currShow.time,currShow.showRoomNo,currShow.branchID, currShow.movieTitle)" routerLink = "/ticketselect">View Tickets</button></span></td>
          <mat-expansion-panel >
            <mat-expansion-panel-header>
              <mat-panel-title>
                View Movie Information
              </mat-panel-title>
            </mat-expansion-panel-header>
            <h1>{{currShow.movieTitle}}</h1>
            <p>{{findMovieRuntime(currShow.movieTitle)}}</p>
            <p>{{findMovieDescription(currShow.movieTitle)}}</p>
            <p>{{findMovieCast(currShow.movieTitle)}}</p>
            <p>{{findMovieDirector(currShow.movieTitle)}}</p>
            <p>{{findMovieGenre(currShow.movieTitle)}}</p>
            <p>{{findMovieProducer(currShow.movieTitle)}}</p>
            <p>{{findMovieWriter(currShow.movieTitle)}}</p>
          </mat-expansion-panel>
        </tr>
      </tbody>
    </table>

  </mat-tab>

</mat-tab-group>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private showingService : ShowingService, 
              private branchService : BranchService, 
              private movieService : MovieService) { }
  
  //displayedColumns : string[] = ['MovieTitle','Date','Time','ShowRoomNo','BranchID'];
  currentShowings: Showing[] = [];
  currentBranches: Branch[] = [];
  currentMovies: Movie[] = [];
  allMovies: Full_Movie[] = [];
  cityVal: string = "";
  theaterVal: string = ""; //this is a branchID

  ngOnInit(): void {
    this.getShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
    this.getBranches()
    .subscribe((data: any) => {
      this.currentBranches = data as Branch[];
      console.log(this.currentBranches);
    });
    this.getMovies()
    .subscribe((data: any) => {
      this.currentMovies = data as Movie[];
      console.log(this.currentMovies);
    

      for (let mov of this.currentMovies) {
        let fullMov = new Full_Movie();
        let cast : Movie_Cast[] = [];
        let dir : Movie_Director[] = [];
        let gen : Movie_Genre[] = [];
        let prod : Movie_Producer[] = [];
        let writ : Movie_Writer[] = [];
    
        this.getMovieCast(mov.title)
        .subscribe((data: any) => {
          cast = data as Movie_Cast[];

          this.getMovieDirector(mov.title)
          .subscribe((data: any) => {
            dir = data as Movie_Director[];

            this.getMovieGenre(mov.title)
            .subscribe((data: any) => {
              gen = data as Movie_Genre[];
  
              this.getMovieProducer(mov.title)
              .subscribe((data: any) => {
                prod = data as Movie_Producer[];
    
                this.getMovieWriter(mov.title)
                .subscribe((data: any) => {
                  writ = data as Movie_Writer[];
      
                  fullMov.movie = mov;
                  fullMov.movieCasts = cast;
                  fullMov.movieDirectors = dir;
                  fullMov.movieGenres = gen;
                  fullMov.movieProducers = prod;
                  fullMov.movieWriters = writ;
                  this.allMovies.push(fullMov);
                });
              });
            });
          });
        });
      }
    });
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }

  getMovieCast(movieTitle: string) {
    return this.movieService.getCastForMovie(movieTitle);
  }

  getMovieDirector(movieTitle: string) {
    return this.movieService.getDirectorsForMovie(movieTitle);
  }

  getMovieGenre(movieTitle: string) {
    return this.movieService.getGenresForMovie(movieTitle);
  }

  getMovieProducer(movieTitle: string) {
    return this.movieService.getProducersForMovie(movieTitle);
  }

  getMovieWriter(movieTitle: string) {
    return this.movieService.getWritersForMovie(movieTitle);
  }

  getBranches() {
    return this.branchService.getAllBranches();
  }

  getShowings() {
    return this.showingService.getAllShowings();
  }

  getCityShowings() {
    return this.showingService.getCityShowings(this.cityVal);
  }

  getTheaterShowings() {
    return this.showingService.getTheaterShowings(this.theaterVal);
  }

   findTickets(date : string, time : string, showRoomNo : Number, branchID : Number, movieTitle : string ){
    ticketGlobals.date = date;
    ticketGlobals.time = time;
    ticketGlobals.showRoomNo = showRoomNo;
    ticketGlobals.branchID = branchID;
    ticketGlobals.movieTitle = movieTitle;
    //console.log(ticketGlobals.date);
  }

  findBranchName(branchID : Number) {
    for (let currBranch of this.currentBranches) {
      if(currBranch.branchID = branchID) {
        return currBranch.branchName;
      }
    }
    return "";
  }

  findMovieRuntime(movieTitle: string) {
    let info = "";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        info += "Runtime: ";
        info += currMovie.movie.runtime;
        return info;
      }
    }
    return "";
  }

  findMovieDescription(movieTitle: string) {
    let info = "";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        info += "Description: ";
        info += currMovie.movie.description;
        return info;
      }
    }
    return "";
  }

  findMovieCast(movieTitle: string) {
    let info = "Movie Cast Members: ";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        if (currMovie.movieCasts.length == 0) {
          info += "None Listed";
          return info;
        }
    
        for (let a of currMovie.movieCasts) {
          info += a.castMemberName;
          if (currMovie.movieCasts.indexOf(a) == currMovie.movieCasts.length -1) {return info;}
          info += ", "
        }
      }
    }
    return "";
  }

  findMovieDirector(movieTitle: string) {
    let info = "Movie Director(s): ";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        if (currMovie.movieDirectors.length == 0) {
          info += "None Listed";
          return info;
        }
    
        for (let a of currMovie.movieDirectors) {
          info += a.directorName;
          if (currMovie.movieDirectors.indexOf(a) == currMovie.movieDirectors.length -1) {return info;}
          info += ", "
        }
      }
    }
    return "";
  }

  findMovieGenre(movieTitle: string) {
    let info = "Movie Genre(s): ";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        if (currMovie.movieGenres.length == 0) {
          info += "None Listed";
          return info;
        }
    
        for (let a of currMovie.movieGenres) {
          info += a.genre;
          if (currMovie.movieGenres.indexOf(a) == currMovie.movieGenres.length -1) {return info;}
          info += ", "
        }
      }
    }
    return "";
  }

  findMovieProducer(movieTitle: string) {
    let info = "Movie Producer(s): ";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        if (currMovie.movieProducers.length == 0) {
          info += "None Listed";
          return info;
        }
    
        for (let a of currMovie.movieProducers) {
          info += a.producerName;
          if (currMovie.movieProducers.indexOf(a) == currMovie.movieProducers.length -1) {return info;}
          info += ", "
        }
      }
    }
    return "";
  }

  findMovieWriter(movieTitle: string) {
    let info = "Movie Writer(s): ";
    for (let currMovie of this.allMovies) {
      if(currMovie.movie.title == movieTitle) {
        if (currMovie.movieWriters.length == 0) {
          info += "None Listed";
          return info;
        }
    
        for (let a of currMovie.movieWriters) {
          info += a.writerName;
          if (currMovie.movieWriters.indexOf(a) == currMovie.movieWriters.length -1) {return info;}
          info += ", "
        }
      }
    }
    return "";
  }

  searchByCity() {
    console.log("Searching for " + this.cityVal);
    if (this.cityVal == "") {
      return;
    }
    this.getCityShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }

  searchByTheater() {
    console.log("Searching for " +  this.theaterVal);
    if (this.theaterVal == "") {
      return;
    }
    this.getTheaterShowings()
    .subscribe((data: any) => {
      this.currentShowings = data as Showing[];
    });
  }
}
