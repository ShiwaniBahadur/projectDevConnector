import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor(
    private routes:Router
  ) { }

  ngOnInit(): void {
  }

  onBack(){
    this.routes.navigateByUrl('/dashboard');
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }


}
