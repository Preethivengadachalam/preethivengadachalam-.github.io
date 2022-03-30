import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userinfo: string = '';
  user: any = {};
  userPassword: string = '';

  constructor(private router: Router) {
    
  }

  public ngOnInit(): void {
  }

  onLogin(){
    this.router.navigate(['/netflix']);
  }
  onSignIn(){
    this.userinfo = '';
    if(this.user['UserName'])
    this.userinfo = this.user['UserName'] ;
    if(this.user['userEmail'])
    this.userinfo =  this.userinfo + " , "+ this.user['userEmail'];
    if(this.user['userPhoneNumber'])
    this.userinfo =  this.userinfo + " , "+ this.user['userPhoneNumber'];
    if(this.user['userPassword'])
    this.userinfo =  this.userinfo + " , "+ this.user['userPassword'];
  }
}

