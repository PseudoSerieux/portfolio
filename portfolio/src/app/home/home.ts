import { Component } from '@angular/core';
import { Apropos } from '../apropos/apropos';
import { Skills } from '../skills/skills';
import { Experiences } from '../experiences/experiences';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Apropos, Experiences, Skills, Contact, Projects, CardModule, ButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  scrollToContact() {
    const contactSection = document.getElementById('contact');
      if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
      }
  }
}


