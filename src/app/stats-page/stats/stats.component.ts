import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { Option } from '../../shared/models/option';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  Seasons: Option[] = [];

  selectedSeason: Option;

  seasonToolTip = 'Select Season';

  seasonId: number;



  title = 'Football Seasons';

  collectionSize: number;

  showSimpleTable: boolean = false;
  showComplexTable: boolean = false;

  constructor(
    private menuService: MenuService,
    private pageTitleService: PageTitleService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.menuService.updateSelectedMenuScreen('Football Season');
    this.pageTitleService.updatePageTitle("Football Seasons");

    this.globalService.getSeasons().subscribe( seasons => {
      this.Seasons = [].concat(seasons);
    });
  }

  setSeason($event){
    this.seasonId = $event.id;
  }

  setShowSimpleTable($event) {
    this.showSimpleTable = true;
    this.showComplexTable = false;
  }

  setShowComplexTable($event) {
    this.showSimpleTable = false;
    this.showComplexTable = true;
  }

}
