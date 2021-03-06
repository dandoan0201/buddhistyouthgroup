import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService: CustomerService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log("TEST");
    console.log(this.customerService.isLoggged());
    const redirectUrl = route['_routerState']['url'];

    if (this.customerService.isLoggged()) {
      return true;
    }
    console.log(redirectUrl);
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );
    //this.router.navigateByUrl('/login');

    return false;

  }

}
