import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Apropos } from './apropos/apropos';
import { Skills } from './skills/skills';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: Apropos },
  { path: 'skills', component: Skills },
];
