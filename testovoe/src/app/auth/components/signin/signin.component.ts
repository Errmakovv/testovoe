import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public isInvalid: boolean = false;
  public hide: boolean = true;

  constructor(private loginService: LoginService) { }

  public ngOnInit(): void {
  }

  public signIn(form: NgForm): void {
    this.isInvalid = this.loginService.SignInUser(form.value.email, form.value.password);
  }
}
