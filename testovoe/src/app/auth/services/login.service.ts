import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [
    {
      email: 'admin@admin.com',
      password: '1234',
      isAdmin: true
    },
    {
      email: 'tim@tim.com',
      password: '1234',
      isAdmin: false
    }
  ];
  private currentUser: User | null;
  private isSignIn: boolean = false;

  constructor(private router: Router) { }

  public getUserStatus(): boolean {
    return this.isSignIn;
  }

  public isAdmin(): boolean {
    return this.currentUser.isAdmin;
  }

  public signUpUser(email: string, password: string): boolean {
    let isUser: User | undefined = this.users.find((user: User) => {
      return user.email === email;
    });

    if (isUser) {
      return true;
    } else {
      this.users.push({ email, password, isAdmin: false });
      this.router.navigate(['login']);
      return false;
    }
  }

  public SignInUser(email: string, password: string): boolean {
    let isUser: User | undefined = this.users.find((user: User) => {
      return user.email === email && user.password === password;
    });

    if (isUser) {
      this.currentUser = isUser;
      this.isSignIn = true;
      this.router.navigate(['main']);
      return false;
    } else {
      return true;
    }
  }
}
