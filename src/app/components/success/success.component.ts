import { Component, OnInit } from '@angular/core';
import { globals } from 'src/app/models/globals';

@Component({
  selector: 'app-success',
  template: `
  <mat-card style="background-color: rgb(187, 202, 239);">
  <header style="font-size: 300%; padding-top:25px; padding-bottom:25px;"> Purchase Success!</header>
</mat-card>
<mat-card style = "background-color: rgb(255, 255, 255); padding-bottom: 90%;">
  <p style="padding-top: 10px; padding-left: 10px; font-size: large;"> 
    Your ticket(s) have been purchased, and a reciept has been emailed to {{email}}.
  </p>
  <p style="padding-top: 10px; padding-left: 10px; font-size: large;"> 
      Thank you for shopping with Movie Master!
  </p>

  <button mat-button routerLink="/" style="padding-top: 10px; padding-left: 10px; font-size: 150%;"> CLOSE  </button>

</mat-card>
`,
  styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit {

  email = globals.buyerEmail;

  constructor() { }

  ngOnInit(): void {
  }

}
