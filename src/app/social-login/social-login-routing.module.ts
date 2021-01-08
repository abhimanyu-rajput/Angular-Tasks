import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookComponent } from './facebook/facebook.component';

const routes: Routes = [
    {path: 'facebook', component: FacebookComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SocialLoginRoutingModule { }