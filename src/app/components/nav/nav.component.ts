import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  showNavbar = false;

  openNavigation() {
    const topSpan = document.querySelector('.navIcon')!.children[0];
    const bottomSpan = document.querySelector('.navIcon')!.children[1];
    const navbar = document.querySelector('.navbar')!;

    navbar.classList.toggle('navbarOpen');
    topSpan.classList.toggle('open');
    bottomSpan.classList.toggle('open');

    this.showNavbar = !this.showNavbar;

    if (this.showNavbar) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  }

  lastScrollTop = 0;

  @HostListener('window:scroll')
  toggleNavbar() {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const element = document.querySelector('.navbar');

    if (currentScrollTop > this.lastScrollTop) {
      if (element) {
        element.classList.add('hide');
      }
    } else {
      if (element) {
        element.classList.remove('hide');
      }
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }

  @HostListener('window:load')
  loadNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.remove('hide');
  }
}
