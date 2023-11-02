import { Component, OnInit } from '@angular/core';
import { AllserviceService } from '../service/allservice.service';
import { Absence, ListerAbsence, Sessions } from '../interface';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.page.html',
  styleUrls: ['./absence.page.scss'],
})
export class AbsencePage implements OnInit {

  sessions:Absence[]=[];
  open:boolean=false;
  constructor( private service:AllserviceService,public modalController: ModalController) { }

  ngOnInit()
  {
    let user=JSON.parse(localStorage.getItem('user')?.toString()!);
    this.absence(user.id)
  }
  absence(id:number)
  {
    this.service.absence(id).subscribe((response)=>{
      if(response.status===200)
      {
        this.sessions=response.data.absences
        console.log(response);
      }
      console.log(this.sessions);
    })
  }
 async openModal() {
    const modal = await this.modalController.create({
      component: AbsencePage,
    });
    return await modal.present();
  }
  closeModal() {
    this.modalController.dismiss();
  }

}
