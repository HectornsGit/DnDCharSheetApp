import { Routes } from '@angular/router';
import { CharSheetComponent } from './char-sheet/char-sheet.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
    pathMatch: 'full',
  },
  {
    path: 'character/:id',
    component: CharSheetComponent,
    title: 'Character page',
  },
];
