import { NgModule } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [PagesRoutingModule, NbLayoutModule],
  declarations: [PagesComponent, HomeComponent],
})
export class PagesModule {}
