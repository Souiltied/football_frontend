import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private selectedMenuScreen = new BehaviorSubject<any>(0);
  currentMenuScreen = this.selectedMenuScreen.asObservable();

  constructor() { }

  updateSelectedMenuScreen(screen) {
    this.selectedMenuScreen.next(screen);
  }
}