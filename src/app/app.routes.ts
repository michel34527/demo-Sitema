import {RouterModule,Routes} from '@angular/router'

import { LoginComponent } from './login/login.component';

import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';

import { RegisterComponent } from './login/register.component';



const appRoutes: Routes = [

{path:'login', component:LoginComponent},
{path:'registro', component:RegisterComponent},


{path:'**', component: NopagesfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true})
