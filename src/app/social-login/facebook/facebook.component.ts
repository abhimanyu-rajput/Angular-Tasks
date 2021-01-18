import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

declare const FB: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  public loginStatus:any;
  public loginRes:any;
  public isLoggedin:boolean = false;

  constructor() { 
    
    FB.init({
      appId      : '219335406525429',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v9.0'           // Use this Graph API version for this call.
    });
    
  }

  ngOnInit() {
  }

  getLoginStatus() {
    return new Promise((resolve,reject)=>{
      FB.getLoginStatus((response) => {   // Called after the JS SDK has been initialized.
        // this.statusChangeCallback(response);        // Returns the login status.
        console.log(response)
        if(response.status == 'connected') {
          resolve({status: 'connected',response:response})
        } 
        else {
          resolve({status: 'not connected',response:response});
        }
      });
    });
  }

  fbLogin() {
    return new Promise((resolve,reject) => {
      FB.login(
        (response) => {
          if (response.status === 'connected') {
            resolve({status: 'connected',response:response})
          }
          else {
            reject({status: 'rejected',response:response})
          }
        },
        { scope: 'public_profile,email' }
      );
    });
  }

  fbApiCall() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=email,name', (res) => {
      console.log('Successful login for: ',res);
      this.loginRes = res;
      this.isLoggedin = true;
    });
  }

  async login() {
    
    this.loginStatus = await this.getLoginStatus();
    console.log(1,this.loginStatus)

    if(this.loginStatus['status']=='not connected') {
      try {
        this.loginStatus = await this.fbLogin();
        console.log(2,this.loginStatus)
        this.fbApiCall();
        
      } catch (error) {
        console.log(error);
      }
    }
    else if(this.loginStatus['status']=='connected'){
      this.fbApiCall();
    }

  }

  logout() {
    FB.logout(function(response) {
      console.log(response);
      this.isLoggedin = false;
    });
  }

}
