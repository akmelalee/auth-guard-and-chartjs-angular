import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private auth: AuthService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          cPassword: ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.auth.setToken(this.form.value.password);
    this.loading = false;
    this.router.navigate(['/home'])
}

}
