import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public loadingController: LoadingController
  ) { }

  async onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
      this.userData.login(this.login.username);
      // this.router.navigateByUrl('/app/tabs/schedule');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
