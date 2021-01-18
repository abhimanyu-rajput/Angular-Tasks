import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontawesomeComponent } from './fontawesome/fontawesome.component';
import { PwaComponent } from './pwa/pwa.component';
import { RxjsopsComponent } from './rxjsops/rxjsops.component';


const routes: Routes = [
  {path: 'fontawesome', component: FontawesomeComponent},
  {path: 'rxjsops', component: RxjsopsComponent},
  {path: 'pwa', component: PwaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
