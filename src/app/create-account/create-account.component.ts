import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  registerForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;
  private emailAddress: FormControl;
  private password: FormControl;

  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) {
    this.firstName = new FormControl();
    this.lastName = new FormControl();
    this.emailAddress = new FormControl();
    this.password = new FormControl();
    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      emailAddress: this.emailAddress,
      password: this.password,
    });
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

}
