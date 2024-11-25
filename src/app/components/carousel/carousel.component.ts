import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentImageIndex = 4;
  isScrolling = false;

  scrollRight() {
    const carousel: HTMLElement | null =
      document.querySelector('#image-container');

    if (this.isScrolling) return;
    this.isScrolling = true;

    let nextImage = carousel!.children[
      this.currentImageIndex + 1
    ] as HTMLElement;
    let image = carousel!.children[3] as HTMLElement;

    carousel!.scrollLeft =
      nextImage.offsetLeft +
      carousel!.children[this.currentImageIndex + 1].clientWidth / 2 -
      window.innerWidth / 2;
    this.currentImageIndex++;

    if (this.currentImageIndex + 1 == carousel!.children.length - 3) {
      carousel!.style.scrollBehavior = 'auto';
      carousel!.scrollLeft =
        image.offsetLeft - window.innerWidth / 2 + image.clientWidth / 2;
      carousel!.style.scrollBehavior = 'smooth';

      this.currentImageIndex = 3;
      nextImage = carousel!.children[this.currentImageIndex + 1] as HTMLElement;
      carousel!.scrollLeft =
        nextImage.offsetLeft +
        nextImage.clientWidth / 2 -
        window.innerWidth / 2;
      this.currentImageIndex++;
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }

  scrollLeft() {
    const carousel: HTMLElement | null =
      document.querySelector('#image-container');

    if (this.isScrolling) return;
    this.isScrolling = true;

    let prevImage = carousel!.children[
      this.currentImageIndex - 1
    ] as HTMLElement;
    let image = carousel!.children[
      carousel!.children.length - 5
    ] as HTMLElement;

    carousel!.scrollLeft =
      prevImage.offsetLeft + prevImage.clientWidth / 2 - window.innerWidth / 2;
    this.currentImageIndex--;

    if (this.currentImageIndex - 1 == 1) {
      console.log('end');

      carousel!.style.scrollBehavior = 'auto';
      carousel!.scrollLeft =
        image.offsetLeft - window.innerWidth / 2 + image.clientWidth / 2;
      carousel!.style.scrollBehavior = 'smooth';

      this.currentImageIndex = carousel!.children.length - 5;
      let prevImage = carousel!.children[
        this.currentImageIndex - 1
      ] as HTMLElement;
      carousel!.scrollLeft =
        prevImage.offsetLeft +
        prevImage.clientWidth / 2 -
        window.innerWidth / 2;
      this.currentImageIndex--;
    }

    console.log(this.currentImageIndex);

    setTimeout(() => {
      this.isScrolling = false;
    }, 500);
  }

  @HostListener('window:load')
  renderCarousel() {
    const carousel: HTMLElement | null =
      document.querySelector('#image-container');

    let imageArray = Array.from(carousel!.children);

    const lastNClones = imageArray.slice(-4).map((img) => img.cloneNode(true));
    const firstNClones = imageArray
      .slice(0, 4)
      .map((img) => img.cloneNode(true));

    carousel!.innerHTML = '';
    lastNClones.forEach((img) => carousel!.appendChild(img));
    imageArray.forEach((img) => carousel!.appendChild(img));
    firstNClones.forEach((img) => carousel!.appendChild(img));

    carousel!.scrollLeft = 0;
    carousel!.style.scrollBehavior = 'auto';
    const currentImage = carousel!.children[
      this.currentImageIndex
    ] as HTMLElement;

    carousel!.scrollLeft =
      currentImage.offsetLeft -
      window.innerWidth / 2 +
      currentImage.clientWidth / 2;
    carousel!.style.scrollBehavior = 'smooth';

    setInterval(() => {
      this.scrollRight();
    }, 4000);
  }
}
