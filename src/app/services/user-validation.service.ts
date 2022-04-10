import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { globals } from '../models/globals';

@Injectable()
export class UserValidationService implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //const isLoggedIn = false; // ... your login logic here
    if (globals.userLog) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}