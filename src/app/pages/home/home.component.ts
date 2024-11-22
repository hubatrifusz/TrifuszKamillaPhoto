import { Component, HostListener } from '@angular/core';
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { ServiceInfoCardComponent } from "../../components/service-info-card/service-info-card.component";
import { serviceData } from '../../../assets/data/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, ServiceInfoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  services = serviceData;

  @HostListener('window:scroll')
  scrollHeroImages() {
    let distanceFromWindowTop = window.scrollY + 1200;
    const imagesContainer = document.querySelector('#images-container') as HTMLElement;
    imagesContainer!.style.minWidth = distanceFromWindowTop/15 + 'vw';

  }
}
