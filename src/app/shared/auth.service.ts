import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }
  setToken(token:string){
   localStorage.setItem('token', token)
  }
  clearStorage(){
    localStorage.clear();
  }
}
