import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  userMessage='';

  @Output() msgCreate = new EventEmitter();
  onAddMessage(){
    const msg={message:this.userMessage}
    this.msgCreate.emit(msg);
  }


}
