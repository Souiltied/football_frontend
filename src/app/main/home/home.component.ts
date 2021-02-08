import { Component, OnInit, OnChanges } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  title = 'Home';

  constructor(
    private pageTitleService: PageTitleService
  ) { }

  ngOnInit() {
    this.pageTitleService.updatePageTitle("Home");
  }

  ngOnChanges() {
    this.pageTitleService.getPageTitle().subscribe(title => {
      this.title = "Home";
    });
  }
}
