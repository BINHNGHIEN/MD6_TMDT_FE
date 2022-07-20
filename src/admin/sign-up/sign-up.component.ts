import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formSignUp = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  obj: any;

  createUser() {
    console.log(this.formSignUp.value);
    this.obj = {
      name: this.formSignUp.value.name,
      username: this.formSignUp.value.username,
      email: this.formSignUp.value.email,
      password: this.formSignUp.value.password
    }
    this.authService.signUp(this.obj).subscribe(() => {
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    })
  }

}
