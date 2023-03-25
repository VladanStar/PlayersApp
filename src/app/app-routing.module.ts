import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';

const routes: Routes = [
{path:"", component:PlayerComponent},
{ path: 'player/add', component: AddPlayerComponent },
{path:"player/:id", component:PlayerDetailsComponent},
{ path: 'player/edit/:id', component: EditPlayerComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
