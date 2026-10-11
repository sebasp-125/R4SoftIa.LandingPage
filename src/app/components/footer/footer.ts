import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer id="contacto" class="relative z-30 pt-20 pb-12 px-4 bg-slate-100 border-t-2 border-slate-200/90 rounded-t-[3.5rem] shadow-[0_-20px_50px_rgba(15,23,42,0.06)] bg-light-dots overflow-hidden">
      
      <div class="container mx-auto max-w-6xl relative z-10">
        
        <!-- Main Footer Card in White (All Roads style) -->
        <div class="relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 mb-12 shadow-xl shadow-slate-200/60 overflow-hidden">
          
          <!-- Illustrated Companion peeking in footer corner -->
          <div class="hidden lg:block absolute -top-4 -right-4 w-32 h-32 opacity-80 pointer-events-none">
            <div class="w-full h-full rounded-2xl bg-blue-50 p-2 border border-blue-200 flex items-center justify-center rotate-6 shadow-sm">
              <span class="text-4xl">👨‍💻</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            <!-- Col 1: Brand & Identity (4 cols) -->
            <div class="lg:col-span-4 space-y-4">
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

              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fábrica de software especializada en desarrollo a la medida, portales bancarios, 
                aplicaciones móviles y automatización inteligente para empresas de todos los sectores.
              </p>

              <!-- Social links -->
              <div class="pt-2">
                <span class="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Canales Oficiales:
                </span>
                <div class="flex items-center gap-3">
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

            <!-- Col 2: Soluciones (3 cols) -->
            <div class="lg:col-span-3 space-y-3">
              <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono text-blue-700">
                Líneas de Software
              </h4>
              <ul class="space-y-2 text-xs sm:text-sm text-slate-600">
                <li><a href="#servicios" class="hover:text-blue-600 transition-colors">Software a la Medida (ERP / CRM)</a></li>
                <li><a href="#servicios" class="hover:text-blue-600 transition-colors">Portales para Bancos &amp; Entidades</a></li>
                <li><a href="#servicios" class="hover:text-blue-600 transition-colors">Aplicaciones Móviles iOS &amp; Android</a></li>
                <li><a href="#servicios" class="hover:text-blue-600 transition-colors">Ventanillas Únicas &amp; Trámites Digitales</a></li>
                <li><a href="#servicios" class="hover:text-blue-600 transition-colors">Automatización &amp; Agentes IA</a></li>
              </ul>
            </div>

            <!-- Col 3: Políticas y Soporte (2 cols) -->
            <div class="lg:col-span-2 space-y-3">
              <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono text-blue-700">
                Garantía &amp; Respaldo
              </h4>
              <ul class="space-y-2 text-xs text-slate-600">
                <li><span class="cursor-pointer hover:text-blue-600 transition-colors">Soporte y Posventa Continuo</span></li>
                <li><span class="cursor-pointer hover:text-blue-600 transition-colors">Acuerdo de Confidencialidad (NDA)</span></li>
                <li><span class="cursor-pointer hover:text-blue-600 transition-colors">Tratamiento de Datos Personales</span></li>
                <li><span class="cursor-pointer hover:text-blue-600 transition-colors">Garantía de Código Fuente</span></li>
              </ul>
            </div>

            <!-- Col 4: Contacto Técnico Directo (3 cols) -->
            <div class="lg:col-span-3 space-y-3">
              <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono text-blue-700">
                Contacto Directo
              </h4>
              <div class="space-y-3 text-xs text-slate-600 font-mono">
                <div>
                  <span class="text-slate-400 block text-[10px]">CORREO DE CONTACTO:</span>
                  <a href="mailto:contacto@r4soft.ia" class="text-blue-600 hover:underline">contacto&#64;r4soft.ia</a>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px]">ATENCIÓN POR WHATSAPP:</span>
                  <a [href]="whatsappUrl()" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-bold">
                    {{ displayPhone() }}
                  </a>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px]">HORARIO DE ATENCIÓN:</span>
                  <span>Lunes a Viernes 08:00 AM - 06:00 PM</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px]">SEDE:</span>
                  <span>Colombia &bull; Cobertura Nacional e Internacional</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Bottom Copyright Bar -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs font-mono text-slate-500 text-center sm:text-left">
          <p>
            &copy; 2026 R4SoftIA S.A.S. &mdash; Fábrica de Software a la Medida. Todos los derechos reservados.
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
