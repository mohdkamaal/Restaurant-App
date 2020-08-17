import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { LoginRestoComponent } from './login-resto/login-resto.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';

const routes: Routes = [
  { component: AddRestoComponent, path: 'add' },
  { component: ListRestoComponent, path: 'list' },
  { component: LoginRestoComponent, path: 'login' },
  { component: RegisterComponent, path: 'register' },
  { component: UpdateRestoComponent, path: 'update' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
