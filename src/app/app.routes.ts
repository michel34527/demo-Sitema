import {RouterModule,Routes} from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [




{path:'login', component:LoginComponent},
{path:'registro', component:RegisterComponent},


{path:'**', component: NopagesfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true})
