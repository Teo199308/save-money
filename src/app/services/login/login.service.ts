import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  get user(): string {
    const currentUser = JSON.parse(localStorage.getItem('user') as string);
    return currentUser.user.displayName;
  }

  set user(user: UserCredential) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  constructor(
    private auth: Auth
  ) { }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }


  logout() {
    return signOut(this.auth);
  }

}
