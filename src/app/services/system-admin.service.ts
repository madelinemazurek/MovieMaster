import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { System_Admin } from 'src/app/models/systemAdmin-model';

@Injectable({
  providedIn: 'root'
})
export class SystemAdminService {
  constructor(private webReqService: WebRequestService) { }

  //add methods here
  getAllSystemAdmins() {
    return this.webReqService.get('System_Admin')
  }

  deleteSystemAdmin(pk : string){
    return this.webReqService.delete(pk)
  }

  createAdmin(admin : System_Admin){
    // Theater is the object payload that will be added to the database
    return this.webReqService.post('System_Admin', admin)
  }
  
}
