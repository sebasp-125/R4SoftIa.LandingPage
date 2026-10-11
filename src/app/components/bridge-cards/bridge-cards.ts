import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bridge-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative z-20 -mt-10 sm:-mt-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <!-- 3 Floating White Cards (Directamente inspirado en 1cero1.com Imagen 3) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (card of bridgeCards; track card.title) {
            <div 
              (click)="onSelect(card.targetId)"
              class="group relative bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-blue-400 rounded-3xl p-7 sm:p-8 shadow-xl shadow-slate-200/70 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              <!-- Ambient soft light gradient -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/60 transition-all"></div>

              <div>
                <!-- Clean Icon badge -->
                <div class="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm mb-5">
                  @switch (card.icon) {
                    @case ('bank') {
                      <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    }
                    @case ('custom') {
                      <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                    @case ('mobile') {
                      <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    }
                  }
                </div>

                <div class="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-[11px] font-mono uppercase tracking-wider text-blue-700 font-bold mb-2">
                  {{ card.tag }}
                </div>

                <h3 class="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5 leading-snug">
                  {{ card.title }}
                </h3>

                <p class="text-sm text-slate-600 leading-relaxed font-normal">
                  {{ card.description }}
                </p>
              </div>

              <!-- Explore action -->
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-blue-600 transition-colors">
                <span>Ver Soluciones</span>
                <span class="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  &rarr;
                </span>
              </div>
            </div>
          }
        </div>

        <!-- Corporate Trust Statement (Idéntico a 1cero1.com Imagen 3) -->
        <div class="mt-8 text-center px-6 py-5 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-slate-600">
          <span>Hemos desarrollado soluciones tecnológicas integrales para más de 120 empresas y entidades públicas y privadas.</span>
          <button 
            type="button" 
            (click)="onOpenModal()" 
            class="font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4 cursor-pointer"
          >
            ¿Busca una solución a la medida?
          </button>
        </div>
      </div>
    </section>
  `
})
export class BridgeCardsComponent {
  openContact = output<void>();

  protected readonly bridgeCards = [
    {
      icon: 'bank',
      tag: 'Sector Financiero & Corporativo',
      title: 'Portales para Bancos & Entidades',
      description: 'Plataformas transaccionales de alta seguridad, pasarelas de pago, recaudos digitales y portales institucionales de alto tráfico.',
      targetId: 'contacto'
    },
    {
      icon: 'custom',
      tag: 'Desarrollo Especializado',
      title: 'Software a la Medida',
      description: 'Sistemas de gestión empresarial (ERP, CRM, inventarios y facturación) construidos desde cero según tus flujos operativos reales.',
      targetId: 'contacto'
    },
    {
      icon: 'mobile',
      tag: 'Soluciones Móviles & Cloud',
      title: 'Aplicaciones Móviles Nativas',
      description: 'Aplicaciones de alto rendimiento para iOS y Android integradas a tus sistemas empresariales, sincronización offline y tiempo real.',
      targetId: 'contacto'
    }
  ];

  onSelect(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.openContact.emit();
    }
  }

  onOpenModal() {
    this.openContact.emit();
  }
}
