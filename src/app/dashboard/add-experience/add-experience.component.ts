import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {

  constructor(
    private routes: Router
  ) { }

  ngOnInit(): void {

  }

  onBack(){
    this.routes.navigateByUrl('/dashboard');
  }


}

