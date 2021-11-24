import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModalpopComponent } from './modalpop/modalpop.component';
import { TrialdepositComponent } from './trialdeposit/trialdeposit.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'welcome',component: WelcomeComponent},
  {path:'modal/:name',component: ModalpopComponent},
  {path:'trialmodal',component: TrialdepositComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
