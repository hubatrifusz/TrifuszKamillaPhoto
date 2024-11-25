import { Component, HostListener, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-service-info-card',
  standalone: true,
  imports: [ButtonComponent, CarouselComponent],
  templateUrl: './service-info-card.component.html',
  styleUrl: './service-info-card.component.scss',
})
export class ServiceInfoCardComponent {
  @Input() title: string = 'placeholder';
  @Input() description: string = 'placeholder';
  @Input() imageURLs!: string[];

  appendServiceCard(event: MouseEvent) {
    const header = event.target as HTMLElement;
    const card = header.parentElement;
    const arrow = header!.children[1];

    card!.classList.toggle('show');
    arrow!.classList.toggle('flip');
  }
}
