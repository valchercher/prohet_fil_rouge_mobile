import { Component, OnInit } from '@angular/core';
import { AllserviceService } from './service/allservice.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements  OnInit{
  constructor(private service:AllserviceService){}
  public appPages = [
    { title: 'Accueil', url: '/accueil', icon: 'menu' },
    { title: 'Cours', url: '/accueil/cours', icon: 'student' },
    { title: 'session', url: '/accueil/sessions', icon: 'planning' },
    // { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  user:any;
  ngOnInit(): void {
    let user=JSON.parse(localStorage.getItem('user')?.toString()!);
    this.user=user;
  }

  public labels = [ 'GP_ODC'];

  deconnecter(){

    this.service.logout().subscribe(response=>{
      console.log(response);
    })
    localStorage.removeItem('user');
  }
}
