
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apiKey: 'AIzaSyDxg0WqrxQNhibUxmB5kdHzsP3Btj-EEp0';

  // Crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]



  // tslint:disable-next-line: no-shadowed-variable
  constructor( private http: HttpClient ) {}

      logout() {}

      login( usuario: UsuarioModel) {

      }

      nuevoUsuario( usuario: UsuarioModel) {

        const authData = {
          ...usuario,
          returnSecureToken: true

        };

        return this.http.post(
          `${this.url}/signUp?key=${this.apiKey}`,
          authData
        );
      }
  }

