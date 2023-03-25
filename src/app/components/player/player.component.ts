import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

player:Player[]=[];
constructor(private playerService:PlayerService){}
ngOnInit(): void {
this.playerService.getAll().subscribe(p=>this.player= p);
}

}
