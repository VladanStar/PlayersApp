import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './components/player/player.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';

const routes: Routes = [
{path:"", component:PlayerComponent},
{path:"player:id", component:PlayerDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
