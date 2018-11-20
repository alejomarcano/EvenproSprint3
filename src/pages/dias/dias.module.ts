import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiasPage } from './dias';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    DiasPage,
  ],
  imports: [
    IonicPageModule.forChild(DiasPage),
    Ionic2RatingModule
  ],
})
export class DiasPageModule {}
