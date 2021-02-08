import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  private titleBehavior = new BehaviorSubject('Home');
  private selectedMenuScreen = new BehaviorSubject<any>(0);
  currentMenuScreen = this.selectedMenuScreen.asObservable();

  constructor() { }

  updatePageTitle = (title: string) => this.titleBehavior.next(title);

  getPageTitle = () => this.titleBehavior.asObservable();

}