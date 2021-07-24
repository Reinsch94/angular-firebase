import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public auth: AngularFireAuth
  ) {}

  ngOnInit(): void {}

  login() {
    this.router.navigate(['/pages/login']);
  }

  logout() {
    this.authService.logout();
  }
}
