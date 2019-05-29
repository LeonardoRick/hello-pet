import { Caregiver } from './../shared/models/Caregiver/caregiver';
import { careSpecs } from './../shared/constants/care-specs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/models/User/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerPerson: 'Cuidador' | 'Usuário' = 'Usuário';
  id: string;

  careSpecs = careSpecs;
  model: User | Caregiver;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.registerPerson = this.id === 'user' ? 'Usuário' : 'Cuidador';
    });
    this.initPerson();
  }

  initPerson() {
    if (this.id === 'user') {
      this.model = new User(undefined, undefined, undefined, undefined);
    } else {
      this.model = new Caregiver(undefined, undefined, undefined, undefined);
    }
    this.model.id = parseInt(new Date().getTime().toString(), 10);
  }

  // TODO: remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    this.submitted = true;

    // put the database saving code here;
    // --------------------------------------
    this.initPerson();
  }
}
