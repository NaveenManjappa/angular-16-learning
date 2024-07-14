import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";

export interface IDeActivateComponent {
    canExit: () => boolean | Observable<boolean> | Promise<boolean>
}

@Injectable({
    providedIn:'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild,CanDeactivate<IDeActivateComponent> {
    
    authService: AuthService = inject(AuthService);
    router:Router=inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.authService.IsAuthenticated()){
            return true;
        }
        else{
            this.router.navigate(['/Login']);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(childRoute,state);
    }

    canDeactivate(component: IDeActivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return component.canExit();
    }
}