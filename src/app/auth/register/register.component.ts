import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  myReactiveForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    })
  }

  submitForm = () => {
    console.log(this.myReactiveForm.value);
    const userInfo = { ...this.myReactiveForm.value, profile_pic: 'avatar.png' };
    this.http.post(`http://localhost:5000/api/auth/register`, userInfo).subscribe((res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
      this.myReactiveForm.reset();
    },
    () => {
      console.log('register completed');
      this.router.navigate(['/auth/login']);
    })
  }
}
