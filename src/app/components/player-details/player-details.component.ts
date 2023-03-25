import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
id:any;
player:Player={}
constructor( private playerServis:PlayerService, private route:ActivatedRoute,
  private router:Router){}
ngOnInit(): void {
  this.id= this.route.snapshot.paramMap.get("id")
    if(this.id){


    this.playerServis.get(this.id).subscribe(p => {
     this.player = p;
     console.log(this.player);
   });
 }
}

deletePlayer(){

}
}
