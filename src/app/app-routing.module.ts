import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistPage } from './todolist/todolist.page';

const routes: Routes = [
  {
    path: 'todolist',
    component: TodolistPage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todolist',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
