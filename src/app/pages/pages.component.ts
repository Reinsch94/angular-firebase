import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <nb-layout>
      <router-outlet></router-outlet>
    </nb-layout>
  `,
})
export class PagesComponent implements OnInit {
  ngOnInit(): void {
    console.log('toto');
  }
}
