import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Form-Using-Angular-template';
  @ViewChild('formInfo') registerForm!: NgForm;

  defaultQuestion = 'basic';
  email = '';
  password = '';

  user = {
    username: '',
    email: '',
    password: '',
    dropDown: '',
  };

  submitted = false;

  onSubmit() {
    
    console.log(this.registerForm.value);
    this.submitted = true;
    this.user.username = this.registerForm.controls['username'].value;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;
    this.user.dropDown = this.registerForm.value.dropdown;

    console.log(this.user.dropDown);
  }

  dropDownMenuChoice(feature: string) {
    switch (feature) {
    }
  }
}
