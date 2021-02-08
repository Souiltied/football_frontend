import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  selectedMenuScreen: string;

  expanded = false;
  open = false;

  title: string;

  constructor(
    private pageTitleService: PageTitleService,
    private sideMenuService: MenuService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageTitleService.getPageTitle().subscribe(val => {
      this.title = val;
    });

    this.sideMenuService.currentMenuScreen.subscribe(screen => {
      this.selectedMenuScreen = screen;
    });
  }

  ngOnChanges() {
    this.pageTitleService.getPageTitle().subscribe(val => {
      this.title = val;
    });
  }

  toggleMenuPosition = () => {
    this.expanded = !this.expanded;
    this.open = !this.open;
  }

}
