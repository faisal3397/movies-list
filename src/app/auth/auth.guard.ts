import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot):
    boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1), // to make sure that we only get this info from the subscription and not listen to it after
            map(user => {
            const isAuth = !!user; // we need a boolean value that lets us know if there is a user or not
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']); // 2nd approach
        }));
        // , tap(isAuth => { // 1st approach
        //     if(!isAuth) {
        //         this.router.navigate(['/auth']); // redirect the user is it is not logged in
        //     }
        // }));
    }
}
