import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private emailAddress: FormControl;
  private password: FormControl;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) {
    this.emailAddress = new FormControl();
    this.password = new FormControl();
    this.loginForm = new FormGroup({
      emailAddress: this.emailAddress,
      password: this.password,
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailAddress: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

}
