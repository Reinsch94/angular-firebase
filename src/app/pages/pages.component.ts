import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <nb-layout>
      <nb-layout-header fixed>
        <app-header></app-header>
      </nb-layout-header>

      <nb-layout-column>
        <router-outlet> </router-outlet>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <app-footer></app-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class PagesComponent implements OnInit {
  ngOnInit(): void {}
}
