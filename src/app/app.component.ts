import { LoginService } from './services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'easy-service';

  showToolBar : boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(){
    this.loginService.showToolBarEmitter.subscribe(
      show => this.showToolBar = show
    );
  }



}
