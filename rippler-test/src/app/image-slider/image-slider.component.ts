import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent {
  @Input() imageUrls: string[];


  currentIndex: number = 0;

  constructor(){
  }

  prevImage() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.imageUrls.length - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex < this.imageUrls.length - 1) ? this.currentIndex + 1 : 0;
  }

}
