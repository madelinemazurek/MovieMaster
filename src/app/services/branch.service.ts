import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Branch } from 'src/app/models/branch-model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private webReqService: WebRequestService) { }

  createBranch(branch : Branch){
    // Theater is the object payload that will be added to the database
    return this.webReqService.post('Branches', branch )
  }

}
