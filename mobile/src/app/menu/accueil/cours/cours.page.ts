import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cours } from 'src/app/interface';
import { AllserviceService } from 'src/app/service/allservice.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.page.html',
  styleUrls: ['./cours.page.scss'],
})
export class CoursPage implements OnInit {
  cours:Cours[]=[];
  selectedCour?:Cours|null;
  open:boolean=false;
  search:string="";
  constructor( private service:AllserviceService,public modalController: ModalController) { }

  ngOnInit() {
    this.getCours();
  }
  openModal(cour: Cours) {
    this.selectedCour = cour;
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CoursPage,
    });
    return await modal.present();
  }
  closeModal() {
    this.selectedCour = null;
    this.modalController.dismiss();
  }
  getCours()
  {
    this.service.getCours(28).subscribe((response)=>{
      console.log(response);
      this.cours=response.data.cours

    })
  }

}
