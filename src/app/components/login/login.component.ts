import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer-model';
import{ globals } from 'src/app/models/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: 
  `<h1 style="font-size: xx-large;"> LOGIN</h1>
 <mat-card style = "background-color: rgb(255, 255, 255);">
   <div class="Email">
     <mat-form-field appearance="fill">
       <mat-label>Enter your email</mat-label>
       <input matInput placeholder="" value="" required name="email" #email="ngModel" [(ngModel)]="Customer.email">
     </mat-form-field>
   </div>
 
   <div class="Password">
     <mat-form-field appearance="fill">
       <mat-label>Enter you password</mat-label>
       <input matInput placeholder="" value="" required name="password" #password="ngModel" [(ngModel)]="Customer.password">
     </mat-form-field>
   </div>

   <div class="submit">
     <button style = "background-color: rgb(255, 255, 255);" mat-button (click)="validate()"> Submit</button>
   </div>
 </mat-card>

 <div class="Admin Login">
   <button mat-button routerLink="/adminlogin">Admin Login</button>
 </div>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private customerService : CustomerService, private router: Router) { }

  Customer = new Customer();
  currentCustomers: Customer[] = [];

  ngOnInit(): void {
    this.getCustomers()
      .subscribe((data: any) => {
        this.currentCustomers = data as Customer[];
      });
  }

  getCustomers() {
    return this.customerService.getAllCustomers();
  }

  validate(){
    for(let i = 0; i<this.currentCustomers.length;  i++){
      if(this.Customer.password == this.currentCustomers[i].password && this.Customer.email == this.currentCustomers[i].email){ 
        globals.userLog = true;
        globals.cardNumber = this.currentCustomers[i].cardNumber;
        globals.cVV = this.currentCustomers[i].cVV;
        globals.expirationDate = this.currentCustomers[i].expirationDate;
        globals.buyerEmail = this.currentCustomers[i].email;
        this.router.navigate(['/']);
      }
    }
  }

}
