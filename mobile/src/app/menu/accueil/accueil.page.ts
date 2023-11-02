import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AllserviceService } from 'src/app/service/allservice.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public accueil!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(private service:AllserviceService,private route:Router) {}

  ngOnInit() {
    this.accueil = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  selectCours()
  {
   this.route.navigateByUrl('accueil/cours')

    console.log("click me");

  }
  selectSession()
  {
    this.route.navigateByUrl('accueil/sessions');
  }
  selectAbsence()
  {
    this.route.navigate(['/absence'])
  }
  selectConvocation()
  {

  }
}
