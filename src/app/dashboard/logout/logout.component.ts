import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
     this.authservice.removeUser();
    alert("Logged Out");
  }

}
