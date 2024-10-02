import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'drc-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  protected readonly LoginForm = signalState({
    company: 'debug',
    username: 'daniel',
    password: 'Passw@rd123',
    remoteApp: undefined as 'doc-reader-app' | 'demo-app',
  });

  private readonly UsernameValidationPattern = /^[a-zA-Z0-9]{3,20}$/;
  private readonly PasswordValidationPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  protected readonly LoginFormValidator$ = computed(() => {
    const { company, username, password } = this.LoginForm();
    const validators = {
      company: company.length > 0,
      username: this.UsernameValidationPattern.test(username),
      password: this.PasswordValidationPattern.test(password),
      remoteApp: this.LoginForm().remoteApp!== undefined,
    };
    return {
      isFormValid: Object.values(validators).every((v) => v),
      ...validators,
    };
  });

  protected patchLoginForm<K extends keyof SignalValue<typeof this.LoginForm>>(
    key: K,
    value: SignalValue<typeof this.LoginForm>[K]
  ) {
    patchState(this.LoginForm, (state) => {
      if (key in state) {
        state[key] = value;
      }
      return state;
    });
  }

  constructor() {
    // constructor
  }

  protected login(): void {
    const { company, username, password } = this.LoginForm();
    console.log(`Login with ${company}, ${username}, ${password}`);
    debugger;
  }
}
