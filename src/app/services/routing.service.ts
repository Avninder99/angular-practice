import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  private prevURL = '';
  private currentURL = '';
  constructor(private router: Router) { 
    this.currentURL = this.router.url;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.prevURL = this.currentURL;
        this.currentURL = event.url;
      };
    })
  }

  getPrevURL = () => {
    return this.prevURL;
  }
}
