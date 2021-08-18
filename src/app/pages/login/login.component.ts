import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: one-line

  login(form: NgForm) {

    if (form.invalid) {return; }
    console.log(this.usuario);

    console.log(form);

  }

}
