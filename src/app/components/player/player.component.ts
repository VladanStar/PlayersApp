import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  totalLength: any;
  page: number = 1;
  p: any;
  searchText:any;

players:Player[]=[];
constructor(private playerService:PlayerService){}
ngOnInit(): void {
this.playerService.getAll().subscribe(p=> this.players= p);
}
sortIme(): void {
  this.players.sort((a: Player, b: Player): number => {
    if (a.ime && b.ime) {
      return a.ime.localeCompare(b.ime);
    } else {
      return 0;
    }
  });
}
sortTim(): void {
  this.players.sort((a: Player, b: Player): number => {
    if (a.tim && b.tim) {
      return a.tim.localeCompare(b.tim);
    } else {
      return 0;
    }
  });
}
sortPozicija(): void {
  this.players.sort((a: Player, b: Player): number => {
    if (a.pozicija && b.pozicija) {
      return a.pozicija.localeCompare(b.pozicija);
    } else {
      return 0;
    }
  });
}
sortBroj() {
  this.players.sort((a: Player, b: Player): number => {
    if (a.broj_dresa && b.broj_dresa) {
      return a.broj_dresa - b.broj_dresa;
    } else {
      return 0;
    }
  });
}
exportToCsv() {
  const csv = Papa.unparse(this.players);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'players.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
}
