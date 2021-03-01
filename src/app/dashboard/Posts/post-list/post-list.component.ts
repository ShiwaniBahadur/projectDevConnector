import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  @Input() userDetails: any =[]

  name = this.auth.getUser();

  ngOnInit(): void {
  }

}
