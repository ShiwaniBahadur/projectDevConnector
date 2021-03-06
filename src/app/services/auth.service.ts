import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticate = false;

  constructor(
    private router:Router
  ) { }

  login(username:string){
    this.setUser(username);
    this.router.navigate(['/dashboard'])
  }

  setUser(username:string){
    localStorage.setItem('user', username);

  }

  getUser(){
    return localStorage.getItem('user');
  }

  removeUser(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isAuthenticated(){
    return localStorage.getItem('user')!=null;
  }
  userLogin(){
    this.isAuthenticate = true;
  }
}
