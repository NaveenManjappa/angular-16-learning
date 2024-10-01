import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "../Services/auth.service";
import { inject } from "@angular/core";

export const canActivate= (activatedRoute:ActivatedRouteSnapshot,routerState:RouterStateSnapshot):boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> =>{

  const authService=inject(AuthService);
  const router=inject(Router);

  return authService.user.pipe(
    take(1),
    map(user => {
      const isLoggedIn=user ? true:false;

      if(isLoggedIn) return true;
      return router.createUrlTree(['/login']);
    })
  )
}