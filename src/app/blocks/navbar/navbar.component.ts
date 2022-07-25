import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin = false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getTokenKey()){
      this.isLogin = true;
      console.log('   ====> ');
    }
  }
  logOut(){
    window.sessionStorage.clear();
    window.location.reload();
  }
}
