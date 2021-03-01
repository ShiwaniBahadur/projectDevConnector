import { Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css'],
})
export class AddExperienceComponent implements OnInit {


  constructor(
    private routes: Router,
    @Inject(DOCUMENT) document:any
  ) {
    console.log(document.getElementById('checked'));
   }

  ngOnInit(): void {

  }

  onBack(){
    this.routes.navigateByUrl('/dashboard');
  }




}

