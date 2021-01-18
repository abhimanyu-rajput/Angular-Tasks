import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookComponent } from './facebook/facebook.component';
import { SocialLoginRoutingModule } from './social-login-routing.module';



@NgModule({
  declarations: [FacebookComponent],
  imports: [
    CommonModule,
    SocialLoginRoutingModule
  ]
})
export class SocialLoginModule { }
