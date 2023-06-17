import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavBarComponent, FooterComponent, MaterialModule],
})
export class SharedModule {}
