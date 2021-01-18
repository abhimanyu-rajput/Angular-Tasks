import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'social-login',
        loadChildren: () => import('./social-login/social-login.module').then(m => m.SocialLoginModule)
      },
      {
        path: 'utils',
        loadChildren: () => import('./utils/utils.module').then(m => m.UtilsModule)
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
