import { Component } from '@angular/core';
import { Apropos } from '../apropos/apropos';
import { Skills } from '../skills/skills';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Apropos, Skills],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
