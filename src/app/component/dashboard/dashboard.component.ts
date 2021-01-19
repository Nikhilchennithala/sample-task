import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  loginForm!: FormGroup;
  inValidCredentials: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    this.inValidCredentials = false;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.loginForm.controls;
  }

  public onSubmit(): void {
    this.inValidCredentials = false;
    if (!this.loginForm.valid) {
      return;
    }
    this._router.navigate(['/dashboard']);
  }
}
