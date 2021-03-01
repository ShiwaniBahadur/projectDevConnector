import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm =  this.formbuilder.group({
      username: ['', Validators.required],
      useremail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      cpassword: ['', Validators.required],
    },
    {
      validator: MustMatch('password', 'cpassword')
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.registerForm.invalid){
      return;
    }

    else alert("Success \n\n" + JSON.stringify(this.registerForm.value));
  }

  onReset(){
    this.submitted=false;
    this.registerForm.reset();
  }

}
