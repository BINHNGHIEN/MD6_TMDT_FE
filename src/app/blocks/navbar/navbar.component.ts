import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin = false;
  // @ts-ignore
  avatar: string;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getTokenKey()){
      this.avatar = this.tokenService.getAvatarKey();
      this.isLogin = true;
      console.log('   ====> ');
    }
  }
  logOut(){
    window.sessionStorage.clear();
    window.location.reload();
  }
}
