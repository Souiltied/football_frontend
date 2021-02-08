import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';
import { simpleGameData } from 'src/app/shared/models/simpleGameData';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {
  router: any;

  constructor(
    private globalService: GlobalService,
    private spinner: NgxSpinnerService,
  ) { }

  @Input()
  seasonId; 

  games: simpleGameData[] = [];

  show: boolean = false;
  searched: boolean = false;

  searchText: string;
  filteredGames: simpleGameData[] = [];

  page = 1;
  pageSize = 10;
  collectionSize: number;

  ngOnInit() {

  }

  ngOnChanges(){
    if(typeof(this.seasonId) === 'undefined'){

    } 
    else {
    this.globalService.getSimpleGamesBySeasonId(this.seasonId).subscribe(games => {
      this.collectionSize = games[0].count;
      console.log('this.collectionSize = ', this.collectionSize);
      games.shift();
      this.games = [].concat(games);
      this.show = true;
    });
  }
  }

  setNotes(game ,value: string){
    this.spinner.show();
    this.globalService.setGameNote(game, value).subscribe( res => {
     if (res.affectedRows === 1) {
          this.spinner.hide();
      }
    })
  }

  searchData($event) {
    this.filteredGames = [];
    console.log('$event = ', $event.target.value);
    this.spinner.show();
   this.searchText = $event.target.value.toLocaleLowerCase(); 
    this.globalService.getSimpleGamesBySeasonId(this.seasonId).subscribe(games => {
      games.shift();
      this.games = [].concat(games);
      this.games.forEach(game =>{
        if(game.SeasonId.toString().toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game)
        }
        else if(game.Date.toString().toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game);
        }
        else if(game.HomeTeam.toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game);
        }
        else if(game.FTAG.toString().toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game);
        }
        else if(game.AwayTeam.toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game);
        }
        else if(game.FTHG.toString().toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game);
        }
        else if(game.Referee.toLocaleLowerCase() == this.searchText){
          this.filteredGames.push(game);
        }
      })
      this.collectionSize = this.filteredGames.length;
    });
    this.searched = true;
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

}
