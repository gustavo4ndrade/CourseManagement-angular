import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [MainComponent]
})
export class CoreModule { }
