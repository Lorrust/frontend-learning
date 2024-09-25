import { ActivatedRouteSnapshot, MaybeAsync, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from '../model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResolvePagina2Guard implements Resolve<User> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User {
    console.log(route.paramMap.get('id'))
    return { id: 1, name: 'Odair' };
  }
}


// export const resolvePagina2Guard: ResolveFn<User> = (route, state) => {
//   console.log(route.paramMap.get('id'))
//   return { id: 1, name: 'Odair' };
// };
