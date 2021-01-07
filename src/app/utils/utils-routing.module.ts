import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';


const routes: Routes = [
  {path: 'fontawesome', component: FontawesomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
