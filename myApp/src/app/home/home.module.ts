import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderComponent } from '../componentes/header/header.component';
import { MainComponent } from '../componentes/main/main.component';
import { FooterComponent } from '../componentes/footer/footer.component';
import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, MainComponent, FooterComponent]
})
export class HomePageModule {}
