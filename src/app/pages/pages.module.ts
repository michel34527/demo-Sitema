import { NgModule } from '@angular/core';
//rutas
import { PAGES_ROUTES } from './pages.routes';
import {FormsModule} from '@angular/forms'
import { sharedModule } from '../shared/shared.module';

//ng-charts
import { ChartsModule } from 'ng2-charts';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraficadonaComponent } from '../components/graficadona/graficadona.component';
//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';






@NgModule({
declarations :[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficadonaComponent
],
exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
],
imports :[
    sharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
    
]
})
export class PagesModule { }