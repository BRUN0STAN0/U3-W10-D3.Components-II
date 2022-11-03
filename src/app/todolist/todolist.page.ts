import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage implements OnInit {
  todolist = [
    {
      id: 1,
      text: 'Testo di prova',
      imp: 0,
      check: '',
    },
    {
      id: 2,
      text: 'prova Testo di',
      imp: 0,
      check: 'check',
    },
    {
      id: 3,
      text: 'abc',
      imp: 0,
      check: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
