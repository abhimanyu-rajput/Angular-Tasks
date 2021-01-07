import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [FontawesomeComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    SharedModule
  ]
})
export class UtilsModule { }
