import { NgModule}              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FileComponent } from './file/file.component';
import { HoraryComponent } from './horary/horary.component';
import { MealComponent } from './meal/meal.component';
import { ProposalComponent } from './proposal/proposal.component';
import { RoutineComponent } from './routine/routine.component';
import { StructureComponent } from './structure/structure.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'quem-somos', component: AboutComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'arquivos', component: FileComponent },
  { path: 'horario-de-funcionamento', component: HoraryComponent },
  { path: 'alimentacao', component: MealComponent },
  { path: 'proposta-pedagogica', component: ProposalComponent },
  { path: 'rotina-diaria', component: RoutineComponent },
  { path: 'estrutura-da-escola', component: StructureComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
