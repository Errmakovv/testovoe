import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public isPassConfirm: boolean = true;
  public isUserExist: boolean = false;
  public hide: boolean = true;
  public emailFormControl: FormControl = new FormControl('', [
    Validators.email
  ]);

  constructor(private loginService: LoginService) { }

  public ngOnInit(): void {
  }

  public signUp(form: NgForm): void {
    if (form.value.password !== form.value.confirmPassword) {
      this.isPassConfirm = false;
      this.isUserExist = false;
    } else {
      this.isPassConfirm = true;
      this.isUserExist = this.loginService.signUpUser(form.value.email, form.value.password);
    }
  }
}
