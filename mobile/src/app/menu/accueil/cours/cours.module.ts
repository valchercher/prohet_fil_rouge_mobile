import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursPageRoutingModule } from './cours-routing.module';

import { CoursPage } from './cours.page';
import { CoursFilterPipe } from 'src/app/cours-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursPageRoutingModule
  ],
  declarations: [CoursPage,CoursFilterPipe]
})
export class CoursPageModule {}
