import { PersonDto } from './../../models/personDto';
import { PersonService } from './../../services/person.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  hide = true;

  perfilForm = this.formBuilder.group({
    fullName: [''],
    email: [''],
    cpf: [''],
    password: [''],
    confirmPassword: [''],
  });

  constructor(
    private _location: Location,
    private formBuilder: NonNullableFormBuilder,
    private personService: PersonService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    var id = Number(this.navigationService.getParamUrl(2));

    this.personService.getPersonPerfil(id).subscribe((data) => {

      this.perfilForm.patchValue({
        fullName: data.fullName,
        email: data.email,
        cpf: data.cpf
      })
    })
  }

  onUpdate(){
    console.log(this.perfilForm.value)
  }

  onBack(){
    this._location.back();
  }

}
