import { Component } from '@angular/core';
import { Apropos } from '../apropos/apropos';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Apropos, Skills, Contact, Projects],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
