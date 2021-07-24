import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbFormFieldModule,
  NbButtonModule,
} from '@nebular/theme';

import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
} from '../components';
import { PostListComponent } from '@app/components/post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PagesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PostListComponent,
  ],
})
export class PagesModule {}
