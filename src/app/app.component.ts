import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'easy-service';
  showToolBar: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.loginService.showToolBarEmitter.subscribe(
      show => this.showToolBar = show
    );
  }

  onLogin() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  onHome() {
    this.location.back();
  }

  onPerfil() {
    console.log('perfil');
  }

  onContracts() {
    console.log('contracts');
  }

  onServices() {
    console.log('Services')
  }

}
