import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgCalendarModule } from 'ionic7-calendar';
import { FilterPipe } from './filter.pipe';
import { AbsencePipe } from './absence.pipe';


@NgModule({
  declarations: [AppComponent, AbsencePipe],
  imports: [
            BrowserModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            IonicModule.forRoot(),
            AppRoutingModule,

            ],
  providers: [{
               provide: RouteReuseStrategy,
                useClass: IonicRouteStrategy
               }],
  bootstrap: [AppComponent],
})
export class AppModule {}
