import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MemberService } from './member.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class SeattleGDPTLieuQuanNeedAuthGuard implements CanActivate {

  constructor(private memberService: MemberService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(this.memberService.isLoggged());
    const redirectUrl = route['_routerState']['url'];

    if (this.memberService.isLoggged()) {
      return true;
    }
    console.log(redirectUrl);
    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/gdptlieuquan'], {
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
