import { Component } from '@angular/core';
import { globals } from 'src/app/models/globals';

@Component({
  selector: 'app-root',
  template: 
  ` <mat-toolbar color = "primary">Movie Master
    <button mat-button></button>
    <button mat-button routerLink="/">Home</button>
    <button mat-button routerLink="/login">Login</button>
    <button mat-button routerLink="/signup">Sign Up</button>
    <button mat-button routerLink="/about">About</button>
    <button mat-button routerLink="/adminPage">Admin</button>
    <button mat-button (click) = "signout()" routerLink ="/"> Signout </button>
  </mat-toolbar>
  
  <div> 
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieMaster';

  signout(){
    globals.userLog = false;
    globals.cVV = ""
    globals.cardNumber = "";
    globals.expirationDate = "";
    globals.adminLog = false;
  }
}
