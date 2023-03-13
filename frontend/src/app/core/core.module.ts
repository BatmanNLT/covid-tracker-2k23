import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { CoreMaterialFeaturesModule } from './core.material.features.module';
import { CoreRoutingModule } from './core.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CoreMaterialFeaturesModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
