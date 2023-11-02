import { Storage } from '@ionic/storage-angular';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent, CalendarMode } from 'ionic7-calendar';
import { AllListePresence, ListPresence, Sessions } from 'src/app/interface';
import { AllserviceService } from 'src/app/service/allservice.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  sessions:Sessions[]=[];
  isModalOpen = false;
  listePresence:ListPresence[]=[];
  id:number=0
  dejaMarquer:boolean=false;
  coursDemarre:boolean=true;
  isSession:number=0;
  idUser:number=0;
  searchtext:string="";
  demarre:boolean=false;
  @ViewChild('maCaseACocher') maCaseACocher?: ElementRef;
  constructor(private service:AllserviceService,  private toast:ToastController) { }

  eventSource:any=[];
  viewTitle?:string;
  calendar={
    mode:'month' as CalendarMode,
    currentDate:new Date(),
  }
  selectedDate?:Date;
  @ViewChild(CalendarComponent) myCal?:CalendarComponent;
  ngOnInit() {
    let user=JSON.parse(localStorage.getItem('user')?.toString()!);
    this.getSession(user.id);
    this.id=user.id;

  }
  getSession(id:number)
  {
    this.service.getSession(id).subscribe((response)=>{
      this.sessions=response.data.sessions;
      console.log(this.sessions);
      this.compareDate();
    })
  }
  next()
  {
    this.myCal?.slideNext();
  }
  back()
  {
    this.myCal?.slidePrev();
  }
  onViewTitleChanged(title:string)
  {
    this.viewTitle=title;
  }
  listeEmergement(session:Sessions,isOpen:boolean)
  {
    this.isModalOpen = isOpen;
    this.service.getListePresence(session.id).subscribe((response)=>{
      if(response.status===200)
      {
        this.listePresence=response.data.listePresence
      }

    })
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
   estCochee(): boolean {
    return this.maCaseACocher?.nativeElement.checked;
   }
  marquePresent(event:any,id:number)
  {
    let even=event.target.checked
    console.log(id);
    console.log(this.id);

    if(even==true)
    {
      this.service.marquePresence(id,this.id).subscribe((response:any)=>{
        console.log(response);

        this.presentToast("top",response.message)
      })
      this.dejaMarquer=true;
    }
  }
  async presentToast(position:any,message:string) {
    const toast = await this.toast.create({
      message: message,
      duration: 2500,
      position: position,
      color:'success'
    });
    await toast.present();
  }
  compareDate(){
    const date = new Date();
    const days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const TousMois = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let jour=days[date.getUTCDay()];
    let mois=TousMois[date.getMonth()];
    let day=date.getDate();
    let annee=date.getFullYear();
    const dateActuel= `${jour} ${mois} ${day} ${annee}`;

    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes=date.getMinutes()
    const currentHeure=`${heures}:${minutes}:${secondes}`;
    const button= this.sessions.find(elmt=>{
      let sessionDate= new Date(elmt.date).toDateString();
      let currentDate= new Date(dateActuel).toDateString();
      return sessionDate===currentDate;
    });

    if (button && button.heure_debut)
    {
      const now = new Date();
      const debutHeure = `${button.date}T${button?.heure_debut}`;
      console.log(debutHeure);

     const debutCours= new Date(debutHeure).getTime();
      const differenceMillis =now.getTime() - debutCours;
      const trenteMinutesMillis = 30 * 60 * 1000;
      if (differenceMillis >= 0 && differenceMillis <= trenteMinutesMillis ) {
        this.coursDemarre =false;
        this.isSession=button.id
        this.demarre=true;
      }else {
        this.coursDemarre = true;
      }
    } else {
      this.coursDemarre = true;
    }
   }
   search(event:Event)
   {
    let even=(event.target as HTMLIonSearchbarElement).value;
    console.log(even);
   }
}

