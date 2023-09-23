import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { RoutingService } from 'src/app/services/routing.service';
import { CookieService } from 'ngx-cookie-service';
import { Store } from '@ngrx/store';
import { setAuth } from 'src/app/store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myLoginForm: FormGroup;

  constructor(
    private http: HttpClient, 
    private router: Router, 
    private location: Location, 
    private routingService: RoutingService,
    private cookieService: CookieService,
    private store: Store
  ) { }

  ngOnInit() {
    this.myLoginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  submitForm = () => {
    console.log(this.myLoginForm);
    const loginInfo = { ...this.myLoginForm.value };
    this.http.post(`http://localhost:5000/api/auth/login`, loginInfo).subscribe((res: { message: string, token: string }) => {
      console.log(res);
      this.cookieService.set('token', res.token);
      this.store.dispatch(setAuth({ token: res.token }));
    },
    (err) => {
      console.log(err);
      this.myLoginForm.reset();
    },
    () => {
      console.log('login completed');
      const prevURL = this.routingService.getPrevURL();
      if(prevURL === "/auth/login" || prevURL === ""){
        this.router.navigate(['/']);
      }else{
        this.location.back();
      }
    })
  }
}
