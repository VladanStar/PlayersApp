import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import{AngularFireModule}from"@angular/fire/compat"
import { environment } from '../environments/environment';
import { PlayerComponent } from './components/player/player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';




@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerDetailsComponent,
    NavComponent,
    FooterComponent,
    EditPlayerComponent,
    AddPlayerComponent,
    LoginComponent,

    RegisterComponent,
      VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule,
Ng2SearchPipeModule,
NgxPaginationModule,

AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
