import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer-model';

@Component({
  selector: 'app-signup',
  template: `<h1 style="font-size: xx-large;"> SIGN UP</h1>
  <mat-vertical-stepper>
  
      <mat-step label = "Contact Information" completed = true>
          <div class="First Name">
              <mat-form-field appearance="fill">
                <mat-label>Enter your first name</mat-label>
                <input matInput type="customer.fName" required fName="fName" #name="ngModel" [(ngModel)]="customer.fName">
              </mat-form-field>
            </div>
            <div class="Last Name">
              <mat-form-field appearance="fill">
                <mat-label>Enter your last name</mat-label>
                <input matInput type="customer.lName" required lName="lName" #name="ngModel" [(ngModel)]="customer.lName">
              </mat-form-field>
            </div>
            <div class="Email">
              <mat-form-field appearance="fill">
                <mat-label>Enter your email</mat-label>
                <input matInput type="customer.email" required email="email" #name="ngModel" [(ngModel)]="customer.email">
              </mat-form-field>
            </div>
            <div class="Password">
              <mat-form-field appearance="fill">
                <mat-label>Enter your password</mat-label>
                <input matInput type="customer.password" required password="password" #name="ngModel" [(ngModel)]="customer.password">
              </mat-form-field>
            </div>
            <div> 
              <button mat-button matStepperNext>Next</button>
            </div>
          </mat-step>
  
      <mat-step label = "Payment Information" completed = true>
          <div class="Card Number">
              <mat-form-field appearance="fill">
                <mat-label>Enter your card number</mat-label>
                <input matInput type="customer.cardNumber" required cardNumber="cardNumber" #name="ngModel" [(ngModel)]="customer.cardNumber">
              </mat-form-field>
            </div>
            <div class="CVV">
              <mat-form-field appearance="fill">
                <mat-label>Enter your card's CVV</mat-label>
                <input matInput type="customer.cVV" required cVV="cVV" #name="ngModel" [(ngModel)]="customer.cVV">
              </mat-form-field>
            </div>
            <div class="Expiration Date">
              <mat-form-field appearance="fill">
                <mat-label>Enter your card's expiration date</mat-label>
                <input matInput type="customer.expirationDate" required expirationDate="expirationDate" #name="ngModel" [(ngModel)]="customer.expirationDate">
              </mat-form-field>
            </div>
          <div> 
              <button mat-button matStepperPrevious>Back</button>
          </div>
      </mat-step>
  
  </mat-vertical-stepper>
  
  <div> 
    <button mat-button (click)="createNewCustomer()" routerLink = "/login">Submit</button>
  </div>`,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  customer = new Customer();
  createNewCustomer(){
    console.log(this.customer)
    this.customerService.createCustomer(this.customer).subscribe((response : any) => {console.log(response)} );
  }

}
