import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  onBack(){
    this.routes.navigateByUrl('/dashboard');
  }

}
