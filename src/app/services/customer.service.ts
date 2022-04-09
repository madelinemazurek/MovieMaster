import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Customer } from 'src/app/models/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here

  createCustomer(customer : Customer){
    // Theater is the object payload that will be added to the database
    return this.webReqService.post('Customers', customer)
  }

}
