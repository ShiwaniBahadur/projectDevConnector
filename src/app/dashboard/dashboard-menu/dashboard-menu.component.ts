import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  constructor(
    private routes: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.auth.getUser());
  }

  name = this.auth.getUser();

  onEditProfile(){
    this.routes.navigateByUrl('/edit-profile');
  }
  onAddExperience(){
    this.routes.navigateByUrl('/add-experience')
  }
  onAddEducation(){
    this.routes.navigateByUrl('/add-education')
  }
  onDelete(){
    this.auth.removeUser();
    this.routes.navigateByUrl('/login');
    alert("Account Deleted");
  }

}
