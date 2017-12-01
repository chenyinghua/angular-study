import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  defuser = 'cyh';
  defpass = 'cyh123';

  _submitForm() {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
    }
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  userNameValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.defuser) {
      return { confirm: true, error: true };
    }
  }

  passwordValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.defpass) {
      return { confirm: true, error: true };
    }
  }

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      userName: [ null, [ this.userNameValidator ] ],
      password: [ null, [ this.passwordValidator ] ],
      remember: [ true ],
    });
  }

  ngOnInit() {}
}
