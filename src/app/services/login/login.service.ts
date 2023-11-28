import { Injectable } from '@angular/core';
import { signInWithPopup, GoogleAuthProvider, Auth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private auth: Auth
  ) { }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}
