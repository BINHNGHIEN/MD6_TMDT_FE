import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../service/token.service";
import {ProductService} from "../../service/product.service";
import {FormControl, FormControlName, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
searchForm = new FormGroup({
  name : new FormControl('')
  }

);
  isLogin = false;
  // @ts-ignore
  avatar: string;

  constructor(private tokenService: TokenService,
              private productService: ProductService) { }

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
  search() {
    this.productService.searchName(this.searchForm.value.name).subscribe((data)=> {
      // @ts-ignore
      this.list=data;
      console.log(data)
    })
  }
}
