import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { NavigationService } from './services/navigation.service';

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
    private location: Location,
    private navigationServive: NavigationService
  ) {
    this.navigationServive.updateIndexNavigation(0);
  }

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
    var id = this.navigationServive.getParamUrl(2);
    this.router.navigate(['/home', id]);
    this.navigationServive.updateIndexNavigation(0);
  }

  onPerfil() {
    var id = this.navigationServive.getParamUrl(2);
    this.router.navigate(['/profile', id]);
  }

  onContracts() {
    this.onHome();
    this.navigationServive.updateIndexNavigation(1);
  }

  onServices() {
    console.log('service')
  }

  addService() {

  }

}
