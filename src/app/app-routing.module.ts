import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AddEducationComponent } from './dashboard/add-education/add-education.component';
import { AddExperienceComponent } from './dashboard/add-experience/add-experience.component';
import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { LogoutComponent } from './dashboard/logout/logout.component';
import { PostComponent } from './dashboard/Posts/post/post.component';
import { DevelopersComponent } from './developers/developers.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import {GuardGuard} from './guards/guard.guard'



const routes: Routes = [
  {path:'main', component: MainComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'developer', component: DevelopersComponent},
  {path: 'posts', component:PostComponent, canActivate: [GuardGuard]},
  {path: 'dashboard', component: DashboardMenuComponent, canActivate: [GuardGuard]},
  {path: 'edit-profile', component: EditProfileComponent, canActivate: [GuardGuard]},
  {path: 'add-education', component: AddEducationComponent, canActivate: [GuardGuard]},
  {path: 'add-experience', component: AddExperienceComponent, canActivate: [GuardGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [GuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
