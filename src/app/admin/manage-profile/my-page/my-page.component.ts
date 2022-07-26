import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-my-page',
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.scss']
})
export class MyPageComponent implements OnInit {
  // @ts-ignore
  name: string;
  avatar: any;
  list: any;
  idDelete: any;
  constructor(private httpClient: HttpClient,
              private authService: AuthService,
              private router: Router,
              private tokenService: TokenService,
              ) {
  }

  ngOnInit(): void {
  }

  getAll(id: any) {

    // @ts-ignore
    this.userService.getAll(id).subscribe(result => {
      this.list = result;
      this.avatar= this.tokenService.getAvatarKey();
      this.name = this.tokenService.getNameKey();
      console.log(result);
    },
      // @ts-ignore
        error => {
      console.log(error)
    });
  }

}
