import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Customer } from 'src/app/models/customer-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here

  
}
