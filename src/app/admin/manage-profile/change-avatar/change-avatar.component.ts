import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthService} from "../../../service/auth.service";
import {TokenService} from "../../../service/token.service";

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.scss']
})
export class ChangeAvatarComponent implements OnInit {

  form: any = {};
  // @ts-ignore
  changeAvatar: ChangeAvatar;
  data1: any = {
    message: 'noavatar'
  };
  data2: any = {
    message: 'yes'
  };
  status = 'Please Choose an image and click Upload';
  isChange = false;
  constructor(private authService: AuthService,
              private router: Router,
              private tokenStorageService: TokenService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // @ts-ignore
    this.changeAvatar = new ChangeAvatar(
      this.form.avatar
    );

    // @ts-ignore
    this.authService.changeAvatar(this.changeAvatar).subscribe(data => {
      if (JSON.stringify(data) == JSON.stringify(this.data1)) {
        this.status = 'please upload Avatar!';
      }
      if (JSON.stringify(data) == JSON.stringify(this.data2)) {
        this.status = 'Successful Avatar upload!';
        this.tokenStorageService.setAvatarKey(this.form.avatar);
        window.location.reload();
      }
    },
      // @ts-ignore
        error => {
      alert('change avatar failled!');

    });
  }

  // @ts-ignore
  onUploadAvatar($event) {
    this.form.avatar = $event;
  }

}
