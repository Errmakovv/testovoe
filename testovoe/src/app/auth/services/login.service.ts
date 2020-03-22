import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: User[] = [];
  public currentUser: User | null;
  public isSignIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));
      this.getCurrentUser();
    } else {
      this.http.get<User[]>('../../../assets/data/users.json').subscribe((response: User[]) => {
        this.users = response;
        this.getCurrentUser();
      });
    }
  }

  public getCurrentUser(): void {
    if (localStorage.getItem('currentUser')) {
      this.currentUser = this.users.find((user: User) => {
        return user.email === localStorage.getItem('currentUser');
      });
      this.isSignIn = true;
    }
  }

  public saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  public deleteUsersBook(id: number): void {
    this.users.forEach((user: User) => {
      user.bookIds = user.bookIds.filter((bookId: number) => {
        return bookId !== id;
      });
    });
    this.saveUsers();
  }

  public logOut(): void {
    this.isSignIn = false;
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

  public signUpUser(email: string, password: string): boolean {
    let isUser: User | undefined = this.users.find((user: User) => {
      return user.email === email;
    });

    if (isUser) {
      return true;
    } else {
      this.users.push({ email, password, isAdmin: false, bookIds: []});
      this.saveUsers();
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
      localStorage.setItem('currentUser', email);
      this.router.navigate(['main']);
      return false;
    } else {
      return true;
    }
  }
}
