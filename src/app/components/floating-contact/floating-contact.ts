import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside 
      class="fixed bottom-6 left-6 z-40 transition-all duration-300"
      [class.opacity-0]="isDismissed()"
      [class.pointer-events-none]="isDismissed()"
    >
      <div class="relative group">
        <a 
          [href]="whatsappUrl()"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3.5 pl-3 pr-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-emerald-500 text-slate-900 shadow-xl shadow-slate-300/60 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all hover:scale-[1.03]"
          aria-label="Abrir WhatsApp de R4SoftIA"
        >
          <div class="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/30 shrink-0">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.5 12c0 3.04-2.46 5.5-5.5 5.5-1.02 0-1.97-.28-2.79-.76l-3.21.84.86-3.13C6.35 13.62 6 12.7 6 11.7 6 8.66 8.46 6.2 11.5 6.2c3.04 0 5.5 2.46 5.5 5.5z"/>
            </svg>
            <span class="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-ping"></span>
          </div>

          <div class="flex flex-col text-left">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold text-slate-900 tracking-tight">¿Hablamos de tu proyecto?</span>
              <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold">ONLINE</span>
            </div>
            <span class="text-[11px] text-slate-500 font-medium group-hover:text-emerald-700 transition-colors">
              Asesoría directa en software a la medida.
            </span>
          </div>
        </a>

        <button 
          type="button"
          (click)="dismiss()"
          class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white text-slate-400 hover:text-slate-700 border border-slate-200 flex items-center justify-center text-[10px] shadow"
          title="Ocultar acceso directo"
          aria-label="Cerrar botón flotante"
        >
          ✕
        </button>
      </div>
    </aside>
  `
})
export class FloatingContactComponent {
  whatsappUrl = input<string>('https://wa.me/NUMERO_WHATSAPP');

  protected readonly isDismissed = signal(false);

  dismiss() {
    this.isDismissed.set(true);
  }
}
