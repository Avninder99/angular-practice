import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { setAuth } from './store/auth.action';
import { authObjectSelector } from './store/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  token$: Observable<{ token: string | null, isAdmin: boolean, username: string | null }>
  isLoggedIn = false;
  isAdmin = false;
  token: string;

  constructor(
    private store: Store,
    private cookieService: CookieService  
  ) { }

  ngOnInit() {
    this.token = this.cookieService.get('token');
    this.token$ = this.store.select(authObjectSelector);
    this.token$.subscribe((res) => {
      if(res.token){
        this.isLoggedIn = true;
      }else {
        this.isLoggedIn = false;
      }
      if(res.isAdmin){
        this.isAdmin = res.isAdmin;
      }
    })
    
    if(this.token){
      this.store.dispatch(setAuth({ token: this.token }));
      this.isLoggedIn = true;
    }
  }
}
