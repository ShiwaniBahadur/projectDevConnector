import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component'
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DevelopersComponent } from './developers/developers.component';
import {PostComponent} from './dashboard/Posts/post/post.component';
import { PostCreateComponent} from './dashboard/Posts/post-create/post-create.component';
import { PostListComponent } from './dashboard/Posts/post-list/post-list.component';
import {DashboardMenuComponent} from './dashboard/dashboard-menu/dashboard-menu.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { AddEducationComponent } from './dashboard/add-education/add-education.component';
import { AddExperienceComponent } from './dashboard/add-experience/add-experience.component';
import { LogoutComponent } from './dashboard/logout/logout.component';

// Forms Modules
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Angular material modules
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    DevelopersComponent,
    PostComponent,
    PostCreateComponent,
    PostListComponent,
    EditProfileComponent,
    AddEducationComponent,
    AddExperienceComponent,
    DashboardMenuComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
