import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { BridgeCardsComponent } from './components/bridge-cards/bridge-cards';
import { AboutStackComponent } from './components/about-stack/about-stack';
import { CtaBannerComponent } from './components/cta-banner/cta-banner';
import { FooterComponent } from './components/footer/footer';
import { FloatingContactComponent } from './components/floating-contact/floating-contact';
import { ContactModalComponent } from './components/contact-modal/contact-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    BridgeCardsComponent,
    AboutStackComponent,
    CtaBannerComponent,
    FooterComponent,
    FloatingContactComponent,
    ContactModalComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly isModalOpen = signal(false);

  protected readonly whatsappUrl = signal('https://wa.me/NUMERO_WHATSAPP');
  protected readonly displayPhone = signal('+57 (604) 448 0000');

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
