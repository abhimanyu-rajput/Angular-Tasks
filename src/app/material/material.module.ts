import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { ComponentsComponent } from './components/components.component';
import { SharedModule } from '../shared/shared.module';
import { DefaultComponent } from './default/default.component';


@NgModule({
  declarations: [ComponentsComponent, DefaultComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule, SharedModule
  ]
})
export class MaterialModule { }
