import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info, Response, Utilisateur, environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private __http:HttpClient) { }
  login(infoUser:Info):Observable<Response<Utilisateur>>
  {
    return this.__http.post<Response<Utilisateur>>(`${environment.api}user/login`,infoUser)
  }
}
