import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, UserCredential, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  get user(): UserCredential {
    const currentUser: UserCredential = JSON.parse(localStorage.getItem('user') as string);
    return currentUser;
  }

  set user(user: UserCredential | null) {
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
