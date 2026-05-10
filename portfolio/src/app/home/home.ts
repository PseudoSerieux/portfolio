import { Component } from '@angular/core';
import { Apropos } from '../apropos/apropos';
import { Skills } from '../skills/skills';
import { Experiences } from '../experiences/experiences';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Apropos, Experiences, Skills, Contact, Projects],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
