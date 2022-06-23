import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { MessageError, ResponseError } from 'src/app/shared/service/messageError';
import { AccessToken, AuthData } from '../service/auth';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  validateForm!: FormGroup;
  control!: FormControl;
  private destroy$: Subject<void> = new Subject<void>();
  messageError!: MessageError;


  login(): void {
    if (this.validateForm.valid) {
      const user = this.validateForm.value;
      console.log('submit', this.validateForm.value);
      this.service.authenticate(user).subscribe({
        next: (res: AccessToken) => {
          console.log(res);
          if (res) {
            localStorage.setItem('access_token', res.accessToken);
            this.router.navigate(['pages'])
          }
        },
        error: (error) => {
          console.log(error);
          this.messageError.isError = true;
          this.messageError.message = ResponseError.E1.toString();
        },
        complete: () => {
          console.log('done authenticate')
        }
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder, protected service: AuthService, private router: Router) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get username() {
    return this.validateForm.get("username");
  }

  get password() {
    return this.validateForm.get("password");
  }

  ngOnInit(): void {

    this.messageError = new MessageError();

    const emailValidators = [
      Validators.email,
      Validators.required
    ]

    const passwordValidators = [
      Validators.required

    ]

    this.validateForm = this.fb.group({
      username: this.fb.control('', [...emailValidators]),
      password: this.fb.control('', [...passwordValidators])
      // remember: [true]
    });
  }
}
