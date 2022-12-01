import { PersonDto } from './../../models/personDto';
import { PersonService } from './../../services/person.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  hide = true;

  perfilForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    cpf: [''],
    password: [''],
    confirmPassword: [''],
  });

  constructor(
    private _location: Location,
    private formBuilder: NonNullableFormBuilder,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.personService.getPersonPerfil(1).subscribe((data) => {
      this.perfilForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        cpf: data.cpf,
        password: '',
        confirmPassword: ''
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
