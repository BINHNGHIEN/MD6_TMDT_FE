import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {SignUpForm} from "../../model/SignUpForm";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  status = 'Please fill in the form to register';
  form: any = {};
  hide = true;
  formSignUp = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    role: new FormControl(''),
  })

  constructor( private authService: AuthService,
               private router: Router) { }

  ngOnInit(): void{
  }
  // @ts-ignore
  signUpForm: SignUpForm;
  error1: any = {
    message: 'no_user'
  };
  error2: any = {
    message: 'no_email'
  };
  success: any = {
    message: 'yes'
  };
  createUser() {
    this.signUpForm = new SignUpForm(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
    );
    console.log('vao mail chua  ====> ', this.form.email)
    this.authService.signUp(this.signUpForm).subscribe(data => {
      console.log(data)
      if (JSON.stringify(data) == JSON.stringify(this.error1)){
        this.status = 'username is existed! Please try again!';
        alert('The username is existed! Please try again!')
      }
      if (JSON.stringify(data) == JSON.stringify(this.error2)){
        this.status = 'The email is existed! Please try again!';
        alert('The email is existed! Please try again!')
      }
      if (JSON.stringify(data) == JSON.stringify(this.success)){
        this.status = 'Create account success!';
        this.router.navigate(['/login']);
      }
    });
  }
}
