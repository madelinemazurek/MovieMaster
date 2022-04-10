import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer-model';

@Component({
  selector: 'app-delete-customer',
  template: 
  `<h1 style="font-size: xx-large;"> DELETE CUSTOMER</h1>

  <div>
      <mat-form-field appearance="fill">
        <mat-label>Select Customer Email</mat-label>
        <mat-select required name="email" #email="ngModel" [(ngModel)]="Customer.email">
          <mat-option *ngFor="let currCustomer of currentCustomers" [value]="currCustomer.email"> 
            {{currCustomer.email}} 
          </mat-option>
        </mat-select>
      </mat-form-field>
  </div>
    
  <button mat-button routerLink="/adminPage">Back</button>
  <button mat-button (click)="deleteCustomer()" routerLink="/adminPage">Submit</button>`,
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  currentCustomers: Customer[] = [];
  Customer = new Customer();

  ngOnInit(): void {
    this.getCustomers()
      .subscribe((data: any) => {
        this.currentCustomers = data as Customer[];
      });
  }

  getCustomers() {
    return this.customerService.getAllCustomers();
  }
  deleteCustomer(){
    this.customerService.deleteCustomer("Customers/" + this.Customer.email).subscribe((response : any) => {console.log(response)} );
  }

}
