import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, OverlayContainer, MdNativeDateModule } from "@angular/material";
import { MdInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { CanActivateAuthGuard } from './can-activate.service';
import { UserProfileService } from './login/user-profile.service';
import { LoginService } from "./login/login.service";
import { RouterModule } from '@angular/router';
import { AddClientComponentDialog } from './clients/clients.component';
import { ClientService } from "./client/client.service";

import './rxjs-extensions';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    AddClientComponentDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MdInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MdNativeDateModule
  ],
  providers: [
    CanActivateAuthGuard,
    UserProfileService,
    LoginService,
    ClientService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddClientComponentDialog]
})

export class AppModule { }
