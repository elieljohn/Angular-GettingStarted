import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}  // Use 'Router' to allow access to 'navigate'

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = Number(route.paramMap.get('id'));  // Retrieve 'id' parameter from the current URL and assign to 'id' constant
      if (isNaN(id) || id < 1) {  // Check if 'id' is not a number or less than 1
        alert('Invalid product Id');  // If invalid, display alert message
        this.router.navigate(['/products']);  // If invalid, navigate to product list page
        return false;
      }
    return true;
  }

}
