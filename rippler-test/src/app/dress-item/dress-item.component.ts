import { Component, Input } from '@angular/core';
import { Dress } from '../app.models';

@Component({
  selector: 'app-dress-item',
  templateUrl: './dress-item.component.html',
  styleUrls: ['./dress-item.component.scss']
})
export class DressItemComponent {
  @Input() dress: Dress;
}
