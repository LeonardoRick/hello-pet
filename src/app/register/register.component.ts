import { Caregiver } from './../shared/models/Caregiver/caregiver';
import { careSpecs } from './../shared/constants/care-specs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerPerson: 'Cuidador' | 'Usuário' = 'Usuário';

  careSpecs = careSpecs;
  model = new Caregiver(undefined, undefined, undefined, undefined);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  constructor() { }

  ngOnInit() {
    this.model.id = parseInt(String(Math.random() * 1000000), 10);
  }
  newCaregiver() {
    this.model = new Caregiver(undefined, undefined, undefined, undefined);
    this.model.id = parseInt(String(Math.random() * 1000000), 10);
  }
  // TODO: remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
