import { Component, OnInit } from '@angular/core';
import { ShowroomService } from 'src/app/services/showroom.service';
import { ShowingService } from 'src/app/services/showing.service';
import { SystemAdminService } from 'src/app/services/system-admin.service';
import { MovieService } from 'src/app/services/movie.service';
import { Showroom } from 'src/app/models/showroom-model';
import { Showing } from 'src/app/models/showing-model';
import { System_Admin } from 'src/app/models/systemAdmin-model';
import { Movie } from 'src/app/models/movie-model';

@Component({
  selector: 'app-add-showing',
  template: `<h1 style="font-size: xx-large;"> ADD SHOWING</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Date</mat-label>
        <input matInput type="showing.date" required date="date" #name="ngModel" [(ngModel)]="showing.date">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Input Time</mat-label>
        <input matInput type="showing.time" required time="time" #name="ngModel" [(ngModel)]="showing.time">
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select ShowRoomNo</mat-label>
        <mat-select required name="showRoomNo" #branchName="ngModel" [(ngModel)]="showing.showRoomNo">
          <mat-option *ngFor="let currShowroom of currentShowrooms" [value]="currShowroom.showRoomNo"> 
            {{currShowroom.showRoomNo}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select BranchID</mat-label>
        <mat-select required name="branchID" #branchID="ngModel" [(ngModel)]="showing.branchID">
          <mat-option *ngFor="let currShowroom of currentShowrooms" [value]="currShowroom.branchID"> 
            {{currShowroom.branchID}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select AdminEmail</mat-label>
        <mat-select required name="adminEmail" #adminEmail="ngModel" [(ngModel)]="showing.adminEmail">
          <mat-option *ngFor="let currAdmin of currentAdmins" [value]="currAdmin.email"> 
            {{currAdmin.email}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Movie Title</mat-label>
        <mat-select required name="movieTitle" #movieTitle="ngModel" [(ngModel)]="showing.movieTitle">
          <mat-option *ngFor="let currMovie of currentMovies" [value]="currMovie.title"> 
            {{currMovie.title}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
  
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="createNewShowing()" routerLink="/adminPage">Submit</button>
  `,
  styleUrls: ['./add-showing.component.css']
})
export class AddShowingComponent implements OnInit {
  constructor(private showroomService : ShowroomService, private showingService : ShowingService,
              private sysAdminService : SystemAdminService, private movieService : MovieService) { }

  ngOnInit(): void {
    this.getShowrooms()
      .subscribe((data: any) => {
        this.currentShowrooms = data as Showroom[];
        console.log(this.currentShowrooms);
      });
    this.getSysAdmins()
      .subscribe((data: any) => {
        this.currentAdmins = data as System_Admin[];
        console.log(this.currentAdmins);
      });
    this.getMovies()
      .subscribe((data: any) => {
        this.currentMovies = data as Movie[];
        console.log(this.currentMovies);
      });
  }

  showing = new Showing();
  currentShowrooms: Showroom[] = [];
  currentAdmins: System_Admin[] = [];
  currentMovies: Movie[] = [];

  createNewShowing(){
    console.log(this.showing)
    this.showingService.addShowing(this.showing).subscribe((response : any) => {console.log(response)} );
  }

  getShowrooms() {
    return this.showroomService.getAllShowrooms();
  }

  getSysAdmins() {
    return this.sysAdminService.getAllSystemAdmins();
  }

  getMovies() {
    return this.movieService.getAllMovies();
  }
}
