import { StatsComponent } from './stats-page/stats/stats.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'stats-page/stats', component: StatsComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(routes);
