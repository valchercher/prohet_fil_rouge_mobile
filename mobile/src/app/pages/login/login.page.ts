import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import { AllserviceService } from 'src/app/service/allservice.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin:FormGroup;
  message:string="";
  Submit:boolean=true;
  private _storage:Storage|null=null
  constructor(private fb:FormBuilder,
    private service:AuthService,
    private route:Router,
    ){
    this.formLogin=this.fb.group({
      email:[],
      password:[],
    })
  }
  ngOnInit(): void {

  }
  get formControls(){
    return this.formLogin.controls;
  }

  seConnecter()
  {
   console.log(this.formLogin.value);
   this.service.login(this.formLogin.value).subscribe(
     (response)=>{
      console.log(response);
      this.message=response.message;
       localStorage.setItem('user',JSON.stringify(response.data.data));
      this.route.navigateByUrl('/accueil/sessions')
    },error=>{
      this.message=error.error.message
    }
   )

  }

}
