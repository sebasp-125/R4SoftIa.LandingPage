import { Component, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative z-30 py-24 px-4 bg-gradient-to-b from-white via-blue-50/60 to-white border-t border-slate-200 overflow-hidden">
      <!-- Ambient light effect -->
      <div class="absolute inset-0 bg-light-dots opacity-50 pointer-events-none"></div>

      <div class="container mx-auto max-w-5xl relative z-10 text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 shadow-sm">
          <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span class="font-bold">ASESORÍA INICIAL SIN COMPROMISO</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          ¿Tienes una Idea o Necesidad de <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
            Software en Mente?
          </span>
        </h2>

        <p class="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Conversemos sobre tu proyecto. Analizamos tus requerimientos operativos y te preparamos 
          una propuesta técnica y económica adaptada a las metas reales y presupuesto de tu organización.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <button 
            type="button" 
            (click)="onOpenModal()"
            class="px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-[1.02] flex items-center gap-3 cursor-pointer group"
          >
            <span>Solicitar Cotización de Software</span>
            <svg class="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <a 
            [href]="whatsappUrl()"
            target="_blank"
            rel="noopener noreferrer"
            class="px-7 py-4 rounded-full font-bold text-sm tracking-wide text-emerald-800 border border-emerald-300 bg-white hover:bg-emerald-50 shadow-sm transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        <p class="text-xs font-mono text-slate-500 mt-6">
          Confidencialidad absoluta amparada bajo Acuerdo de Confidencialidad (NDA).
        </p>
      </div>
    </section>
  `
})
export class CtaBannerComponent {
  openContact = output<void>();
  whatsappUrl = input<string>('https://wa.me/NUMERO_WHATSAPP');

  onOpenModal() {
    this.openContact.emit();
  }
}
