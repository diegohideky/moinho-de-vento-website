import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: Login;
  public error: boolean;

  constructor(private router: Router) { }

  submitForm(): void {
    if (this.login.username === 'paismoinho' && this.login.password === 'moinho#2018') {
      this.error = false;
      this.router.navigate(['/arquivos']);
    } else {
      this.error = true;
    }
  };

  ngOnInit() {
    this.login = new Login;
  }

}
