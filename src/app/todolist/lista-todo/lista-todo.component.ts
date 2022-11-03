import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-todo',
  templateUrl: './lista-todo.component.html',
  styleUrls: ['./lista-todo.component.scss'],
})
export class ListaTodoComponent implements OnInit {
  @Input() todos: any;

  constructor() {}

  ngOnInit(): void {}
}
