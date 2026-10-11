import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contacto" class="relative z-30 pt-16 pb-12 px-4 bg-slate-100 border-t-2 border-slate-200/90 rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(15,23,42,0.06)] bg-light-dots overflow-hidden">
      
      <div class="container mx-auto max-w-5xl relative z-10">
        
        <!-- Contact Card -->
        <div class="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 mb-8 shadow-xl shadow-slate-200/60">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <!-- Brand -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-[1.5px] shadow-md shadow-blue-500/20">
                <div class="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-blue-600">
                  <svg class="w-5 h-5 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke-linejoin="round"/>
                    <path d="M2 17l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <span class="font-extrabold text-slate-900 text-xl tracking-tight block">R4SoftIA S.A.S.</span>
                <span class="text-xs text-slate-500 font-mono">Software a la Medida</span>
              </div>
            </div>

            <!-- Social links -->
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                Canales:
              </span>
              <div class="flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/r4softia-s-a-s" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all text-xs font-mono font-bold shadow-sm"
                  aria-label="LinkedIn de R4SoftIA"
                >
                  IN
                </a>
                <a 
                  href="https://www.instagram.com/r4softia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all text-xs font-mono font-bold shadow-sm"
                  aria-label="Instagram de R4SoftIA"
                >
                  IG
                </a>
                <a 
                  href="https://www.tiktok.com/@r4softia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all text-xs font-mono font-bold shadow-sm"
                  aria-label="TikTok de R4SoftIA"
                >
                  TK
                </a>
              </div>
            </div>
          </div>

          <!-- Contact items grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div class="space-y-1">
              <span class="text-slate-400 block text-[10px] font-mono uppercase tracking-wider">Correo de Contacto:</span>
              <a href="mailto:contacto@r4soft.ia" class="text-sm font-semibold text-blue-600 hover:underline block break-all">
                contacto&#64;r4soft.ia
              </a>
            </div>

            <div class="space-y-1">
              <span class="text-slate-400 block text-[10px] font-mono uppercase tracking-wider">Atención por WhatsApp:</span>
              <a [href]="whatsappUrl()" target="_blank" rel="noopener noreferrer" class="text-sm font-bold text-blue-600 hover:underline block">
                {{ displayPhone() }}
              </a>
            </div>

            <div class="space-y-1">
              <span class="text-slate-400 block text-[10px] font-mono uppercase tracking-wider">Horario de Atención:</span>
              <span class="text-xs sm:text-sm text-slate-700 font-medium block">
                Lunes a Viernes 08:00 AM - 06:00 PM
              </span>
            </div>

            <div class="space-y-1">
              <span class="text-slate-400 block text-[10px] font-mono uppercase tracking-wider">Sede:</span>
              <span class="text-xs sm:text-sm text-slate-700 font-medium block">
                Colombia &bull; Cobertura Nacional e Internacional
              </span>
            </div>
          </div>
        </div>

        <!-- Derechos de autor -->
        <div class="pt-2 text-center text-xs font-mono text-slate-500">
          <p>
            &copy; 2026 R4SoftIA S.A.S. &mdash; Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  whatsappUrl = input<string>('https://wa.me/NUMERO_WHATSAPP');
  displayPhone = input<string>('+57 (Tu Número de WhatsApp)');
}
