import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {ResponseMessage} from "../../model/response-message";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  status = 'Please fill in the form to register';
  formSignUp!: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formSignUp = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: [''],
      password: [''],
      roles: this.fb.array(['user']),
    });
  }

  createUser() {
    this.authService.signUp(this.formSignUp.value).subscribe((data: ResponseMessage) => {
      if (data.message === 'yes') {
        this.status = 'Create account success!';
        this.router.navigate(['/login']);
      } else {
        this.status = data.message;
      }
    }, error => {
      alert(error);
    });
  }

  get name() {
    return this.formSignUp.get('name');
  }

  get email() {
    return this.formSignUp.get('email');
  }
}
