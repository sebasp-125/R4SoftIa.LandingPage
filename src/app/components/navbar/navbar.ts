import { Component, signal, HostListener, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav 
        [class.shadow-xl]="isScrolled()"
        [class.border-blue-200]="isScrolled()"
        class="w-full max-w-6xl mx-auto px-5 py-3 rounded-full bg-white/95 border border-slate-200/90 backdrop-blur-xl flex items-center justify-between shadow-md shadow-slate-200/50 transition-all duration-300 hover:border-blue-400"
      >
        <!-- Logo Corporativo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-[1.5px] shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-blue-600">
              <svg class="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke-linejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-blue-600 transition-colors">R4Soft</span>
              <span class="text-xs px-1.5 py-0.5 rounded font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">IA</span>
            </div>
            <span class="text-[10px] text-slate-500 font-mono tracking-wider uppercase -mt-1">Software a la Medida</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center gap-1 lg:gap-2">
          @for (item of navLinks; track item.label) {
            <a 
              [href]="item.href"
              class="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold tracking-wide text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all"
            >
              {{ item.label }}
            </a>
          }
        </div>

        <!-- CTA & Actions -->
        <div class="flex items-center gap-3">
          <button 
            type="button" 
            (click)="onOpenModal()"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Cotizar Proyecto</span>
            <svg class="w-3.5 h-3.5 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button 
            type="button"
            (click)="toggleMobileMenu()"
            class="md:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100"
            aria-label="Abrir menú de navegación"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              @if (mobileMenuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden fixed top-20 inset-x-4 bg-white border border-slate-200 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl flex flex-col gap-3 z-50">
          @for (item of navLinks; track item.label) {
            <a 
              [href]="item.href"
              (click)="closeMobileMenu()"
              class="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {{ item.label }}
            </a>
          }
          <div class="pt-3 border-t border-slate-100">
            <button 
              type="button"
              (click)="onOpenModal(); closeMobileMenu()"
              class="w-full py-2.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md cursor-pointer"
            >
              Cotizar Proyecto de Software
            </button>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  openContact = output<void>();

  protected readonly isScrolled = signal(false);
  protected readonly mobileMenuOpen = signal(false);

  protected readonly navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  onOpenModal() {
    this.openContact.emit();
  }
}
