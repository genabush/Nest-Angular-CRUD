import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// ngrx
import { Store } from '@ngrx/store';

// core
import { AppState, authActions } from '@frontend/core';

// shared
import { User } from '@mono/shared';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  onSubmit(): void {
    const formValue = this.signUpForm.value;
    this.store.dispatch(authActions.signUpStart(formValue));
  }
}
