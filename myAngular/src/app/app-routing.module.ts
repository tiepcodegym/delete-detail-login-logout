import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserDetailComponent} from "./components/users/user-detail/user-detail.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MasterComponent} from "./master/master.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: MasterComponent,
        children: [
          {
            path: 'users',
            component: UserListComponent
          },
          {
            path: 'users/:id/detail',
            component: UserDetailComponent
          }
          ],
        canActivate: [AuthGuard]
      }
      ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
