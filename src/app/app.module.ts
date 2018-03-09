import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MealComponent } from './meal/meal.component';
import { FileComponent } from './file/file.component';
import { ContactComponent } from './contact/contact.component';
import { StructureComponent } from './structure/structure.component';
import { HomeComponent } from './home/home.component';
import { HoraryComponent } from './horary/horary.component';
import { LoginComponent } from './login/login.component';
import { ProposalComponent } from './proposal/proposal.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoutineComponent } from './routine/routine.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MealComponent,
    FileComponent,
    ContactComponent,
    StructureComponent,
    HomeComponent,
    HoraryComponent,
    LoginComponent,
    ProposalComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    RoutineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
