import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Info, Response, Utilisateur, environment } from 'src/environments/environment.prod';
import { All, AllListePresence, AllSession, ListerAbsence } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  constructor(private __http:HttpClient) { }
  getCours(id:number):Observable<Response<All>>
  {
    return this.__http.get<Response<All>>(`${environment.api}etudiant/cours/${id}/2`);
  }
  getSession(id:number):Observable<Response<AllSession>>
  {
    return this.__http.get<Response<AllSession>>(`${environment.api}etudiant/session/${id}`)
  }
  getListePresence(id:number):Observable<Response<AllListePresence>>
  {
    return this.__http.get<Response<AllListePresence>>(`${environment.api}etudiant/emergement/${id}`);
  }
  marquePresence(id:number,etudiantId:number)
  {
    return this.__http.get(`${environment.api}etudiant/present/${id}/${etudiantId}`);
  }
  logout():Observable<Response<Utilisateur>>
  {
    return this.__http.get<Response<Utilisateur>>(`${environment.api}/user/logouut`)
  }
  absence(id:number):Observable<Response<ListerAbsence>>
  {
    return this.__http.get<Response<ListerAbsence>>(`${environment.api}etudiant/absence/${id}`)
  }
}
