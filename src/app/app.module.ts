import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TodolistPage } from './todolist/todolist.page';
import { AddTodoComponent } from './todolist/add-todo/add-todo.component';
import { ListaTodoComponent } from './todolist/lista-todo/lista-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistPage,
    HeaderComponent,
    FooterComponent,
    AddTodoComponent,
    ListaTodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
