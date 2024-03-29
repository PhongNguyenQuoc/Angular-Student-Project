import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkComponent } from './components/mark/mark.component';
import { StudentComponent } from './components/student/student.component';
import { AuthGuard } from './auth/_services/auth.guard';
import {SubjectComponent} from "./components/subject/subject.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '',canActivate:[AuthGuard],
    children: [
      {
        path: '', component: HomeComponent,
        children: [
          {path: 'users', component: UsersComponent},
          {path: 'marks', component: MarkComponent},
          {path: 'students', component: StudentComponent},
          {path: 'subjects', component: SubjectComponent},
          {path: 'logout', component: LogoutComponent},
          {path: 'dashboard', component: DashboardComponent},

          {path: '**', redirectTo: '', pathMatch: 'full'}
        ]
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
