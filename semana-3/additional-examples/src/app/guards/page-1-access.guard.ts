import { CanActivateFn } from '@angular/router';

export const acessoPagina1Guard: CanActivateFn = (route, state) => {
  return false;
};
