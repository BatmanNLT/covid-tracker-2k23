import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CoreMaterialFeaturesModule } from './core.material.features.module';
import { CoreRoutingModule } from './core.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, CoreRoutingModule, CoreMaterialFeaturesModule],
})
export class CoreModule {}
