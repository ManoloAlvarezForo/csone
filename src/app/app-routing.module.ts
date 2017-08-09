import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent} from './clients/clients.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CanActivateAuthGuard } from './can-activate.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main/dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent,
    canActivate: [CanActivateAuthGuard],
    canActivateChild: [CanActivateAuthGuard],
    children: [
      { path:'dashboard', component: DashboardComponent },
      { path: 'clients', component: ClientsComponent,
        children:[
          { path: ':id',
            component: ClientComponent
          }
        ]}
    ] 
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  LoginComponent,
  MainComponent,
  DashboardComponent,
  ClientsComponent,
  ClientComponent,
  PageNotFoundComponent
];