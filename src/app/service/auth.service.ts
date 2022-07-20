import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {SignUpForm} from "../model/SignUpForm";
import {Observable} from "rxjs";
import {JwtResponse} from "../model/JwtResponse";
import {SignInForm} from "../model/SignInForm";
import {ResponseMessage} from "../model/response-message";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(signUpForm: SignUpForm): Observable<ResponseMessage> {
    return this.http.post<ResponseMessage>(environment.API_LOCAL + 'auth/signup', signUpForm);
  }

  signIn(signInForm: SignInForm): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(environment.API_LOCAL + 'auth/signin', signInForm);
  }
}
