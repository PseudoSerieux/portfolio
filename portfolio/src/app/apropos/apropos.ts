import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-apropos',
  imports: [FieldsetModule, CardModule],
  templateUrl: './apropos.html',
  styleUrls: ['./apropos.scss']
})
export class Apropos {}
