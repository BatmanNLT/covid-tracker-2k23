import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userNameFormControl = new FormControl('', [Validators.required]);
  pwdFormControl = new FormControl('', [Validators.required]);

  isFormValid() {
    return (
      this.pwdFormControl.hasError('required') ||
      this.userNameFormControl.hasError('required')
    );
  }

  onLogin() {
    console.log('Dummy Login');
  }
}
