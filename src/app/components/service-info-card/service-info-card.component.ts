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

  appendServiceCard() {
    throw new Error('Method not implemented.');
  }
}
