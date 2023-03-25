import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  constructor(private playerService: PlayerService, private router: Router){}

ngOnInit(): void {

}

addPlayer(f: NgForm) {
  // console.log(f.value)

  this.playerService.add(f.value);

  window.alert('Player je dodat');
  this.router.navigate(['/']);
}
}
