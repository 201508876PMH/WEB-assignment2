import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private emailAddress: FormControl;
  private password: FormControl;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.emailAddress = new FormControl();
    this.password = new FormControl();
    this.loginForm = new FormGroup({
      emailAddress: this.emailAddress,
      password: this.password,
    });
  }

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  public login(loginF){
    //console.log(loginF)
    var gikGodt = this.authService.login(loginF)
    console.log("Gikgodt: ", gikGodt)
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailAddress: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  

}
