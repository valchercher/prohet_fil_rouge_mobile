import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionsPageRoutingModule } from './sessions-routing.module';

import { SessionsPage } from './sessions.page';
import { NgCalendarModule } from 'ionic7-calendar';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de'
import { FilterPipe } from 'src/app/filter.pipe';
registerLocaleData(localeDe);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionsPageRoutingModule,
    NgCalendarModule,

  ],
  declarations: [SessionsPage,FilterPipe],
  providers:[{provide:LOCALE_ID,useValue:'de-De'}]
})
export class SessionsPageModule {}
