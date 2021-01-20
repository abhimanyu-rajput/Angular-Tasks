import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { ComponentsComponent } from './components/components.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule, SharedModule
  ]
})
export class MaterialModule { }
