/* eslint-disable @typescript-eslint/no-explicit-any */
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const features: Array<any> = [MatButtonModule];

@NgModule({
  imports: features,
  exports: features,
})
export class CoreMaterialFeaturesModule {}
