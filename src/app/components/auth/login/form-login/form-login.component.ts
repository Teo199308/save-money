import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  formLogin: FormGroup = new FormGroup({});

  //#region ICONS
  faUser = faUser;
  faLock = faLock;
  faEye = faEye;
  //#endregion

  showPassword: boolean = false;

  toggleSHowPassword() {
    this.showPassword = !this.showPassword
  }
}
