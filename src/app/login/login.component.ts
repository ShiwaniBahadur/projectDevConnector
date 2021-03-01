import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private authservice:AuthService
  ) { }

  users:any = [];

  ngOnInit(): void {
  }

  onLogin(f:NgForm){
    this.authservice.login(f.value.username);

  }

}
