import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faEye, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-auth',
  templateUrl: './form-auth.component.html',
  styleUrls: ['./form-auth.component.scss']
})
export class FormAuthComponent {
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
