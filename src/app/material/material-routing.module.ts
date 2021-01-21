import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {path: '', component: ComponentsComponent, children: [
    {path: '', component: DefaultComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
