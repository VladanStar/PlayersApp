import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player-component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent  implements OnInit{
constructor( private playerServis:PlayerService,
  private route:ActivatedRoute,
  private router:Router){}

  id:any;
 player:Player = {

   ime:"",
    broj_dresa:0,
    pozicija:'',
    img:"",
    tim:"",
    zemlja:"",

};
ngOnInit(): void {
  this.id= this.route.snapshot.paramMap.get("id")
  if(this.id){


  this.playerServis.get(this.id).subscribe(p => {
   this.player = p;
   console.log(this.player);
 });
}
}
updatePlayer(f:NgForm){
  // console.log(f.value)
   let id =this.id as string;
  this.playerServis.update(id, f.value);
  window.alert('Igrac je editovan')
  this.router.navigate([""])
  // f.reset();
    }
}
