import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

declare const FB: any;

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent implements OnInit {

  constructor() { 
    console.log('facebook')
    
  }

  async ngOnInit() {
    console.log(FB);
    
    await FB.init({
      appId      : '1080651482398270',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v9.0'           // Use this Graph API version for this call.
    });

    FB.getLoginStatus((response) => {   // Called after the JS SDK has been initialized.
      // this.statusChangeCallback(response);        // Returns the login status.
      console.log(response)
    });
    

  }


  // statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  //   console.log('statusChangeCallback');
  //   console.log(response);                   // The current login status of the person.
  //   if (response.status === 'connected') {   // Logged into your webpage and Facebook.
  //     this.loginFb();  
  //   } else {                                 // Not logged into your webpage or we are unable to tell.
  //     console.log('Please log into this webpage.');
  //   }
  // }

  loginFb() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', (response) => {
      console.log('Successful login for: ' + response.name);
    });
  }

}
