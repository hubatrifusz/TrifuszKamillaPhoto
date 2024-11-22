import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-info-card',
  standalone: true,
  imports: [],
  templateUrl: './service-info-card.component.html',
  styleUrl: './service-info-card.component.scss',
})
export class ServiceInfoCardComponent {
  @Input() title: string = 'placeholder';

  appendServiceCard(event: MouseEvent) {
    const header = event.target as HTMLElement;
    const card = header.parentElement;
    const arrow = header!.children[1];

    card!.classList.toggle('show');
    arrow!.classList.toggle('flip');
  }
}
