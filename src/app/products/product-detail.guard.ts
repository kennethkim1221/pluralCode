import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // next variable came from the ActivatedRouteSnapshot
    // url[1] is the id (10) --> 'products/10'  
    let id = +next.url[1].path; 
    if(isNaN(id) || id < 1) {
      alert("Invalid product Id");
      this.router.navigate(['/products']);

      // abort the  activating the route
      return false;
    }
    // continue activating the route
    return true;
  }
}
