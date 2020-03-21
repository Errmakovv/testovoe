import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public hide: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public signIn(form: NgForm): void {
    console.log(form.value);
  }

}
