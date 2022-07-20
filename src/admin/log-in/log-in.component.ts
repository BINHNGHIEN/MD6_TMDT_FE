// import { Component, OnInit } from '@angular/core';
// import {SignInForm} from "../../model/SignInForm";
// import {AuthService} from "../../service/auth.service";
// import {Router} from "@angular/router";
//
// @Component({
//   selector: 'app-log-in',
//   templateUrl: './log-in.component.html',
//   styleUrls: ['./log-in.component.scss']
// })
// export class LogInComponent implements OnInit {
//   hide = true;
//   form: any = {};
//   signInForm: SignInForm;
//   status = 'Please fill in the form to Login!';
//   isCheckLoginFailed = false;
//   constructor(private authService: AuthService,
//               private tokenService: TokenService,
//               private router: Router) { }
//
//   ngOnInit(): void {
//   }
//
//   ngSubmit() {
//     this.signInForm = new SignInForm(
//       this.form.username,
//       this.form.password
//     )
//     this.authService.signIn(this.signInForm).subscribe(data=>{
//       if(data.token!=undefined){
//         this.tokenService.setTokenKey(data.token);
//         this.tokenService.setNameKey(data.name);
//         this.tokenService.setRoleKey(data.roles);
//         this.tokenService.setAvatarKey(data.avatar);
//         this.router.navigate(['user-account']).then(()=>{
//           window.location.reload();
//         })
//       } else {
//         this.isCheckLoginFailed = true;
//         this.status = 'LOGIN FAILED! Please try again!'
//       }
//     })
//   }
// }
