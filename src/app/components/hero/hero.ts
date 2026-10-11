import { Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="inicio" class="relative w-full h-screen min-h-[640px] flex items-center overflow-hidden bg-slate-950">
      
      <!-- Video Element Background vía YouTube Streaming Embed (Cero peso local, streaming ágil y fluido) -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <iframe 
          [src]="safeVideoUrl"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none scale-110 filter brightness-[0.88] contrast-[1.05]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          tabindex="-1"
          aria-hidden="true"
        ></iframe>
        
        <!-- Overlay cinematográfico sutil: permite ver el video en su esplendor con contraste para el texto -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
      </div>

      <!-- Main Content (Alineado al estilo All Roads Medellín: compacto, sin tarjetas gigantes que tapen el video) -->
      <div class="container mx-auto max-w-6xl px-6 sm:px-10 relative z-20 flex flex-col justify-center">
        <div class="max-w-2xl text-left">
          
          <!-- Titular Principal con Alto Impacto y Sombra Cinematográfica -->
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            DESARROLLO DE SOFTWARE <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300">
              A LA MEDIDA
            </span>
          </h1>

          <!-- Subtítulo Breve y Directo (Sin saturar la pantalla) -->
          <p class="text-base sm:text-xl text-white/90 leading-relaxed font-normal mb-8 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] text-pretty">
            Creamos plataformas web, portales bancarios y aplicaciones móviles diseñadas 100% para los procesos de tu negocio.
          </p>

          <!-- Botones de Acción Inmediata -->
          <div class="flex flex-wrap items-center gap-4">
            <button 
              type="button" 
              (click)="onOpenModal()"
              class="px-8 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/40 transition-all hover:scale-105 flex items-center gap-3 cursor-pointer group"
            >
              <span>Cotizar Proyecto</span>
              <svg class="w-4 h-4 stroke-[3] group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <a 
              href="#nosotros"
              class="px-7 py-4 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider text-white border border-white/40 bg-black/30 hover:bg-white/20 backdrop-blur-md shadow-lg transition-all flex items-center gap-2"
            >
              <span>Conócenos</span>
              <svg class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

        </div>
      </div>

      <!-- Hero Scroll Guide Pill (Idéntico a la esquina inferior derecha de All Roads Medellín) -->
      <div class="absolute bottom-8 right-6 sm:right-12 z-20">
        <a 
          href="#nosotros" 
          class="flex items-center gap-3.5 px-5 py-2.5 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/20 backdrop-blur-md shadow-2xl transition-all group cursor-pointer"
        >
          <!-- Mascot Icon -->
          <div class="relative w-11 h-11 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 p-[2px] shadow-lg shadow-blue-500/40">
            <div class="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-lg animate-peek">
              💡
            </div>
          </div>
          <div class="flex flex-col text-right">
            <span class="text-[11px] font-extrabold tracking-wider uppercase text-cyan-300">QUE COMIENCE LA INNOVACIÓN</span>
            <span class="text-xs text-white/80 font-medium group-hover:text-white transition-colors flex items-center justify-end gap-1">
              Desliza para explorar
              <svg class="w-3.5 h-3.5 text-cyan-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </div>
        </a>
      </div>

    </section>
  `
})
export class HeroComponent {
  openContact = output<void>();

  private readonly sanitizer = inject(DomSanitizer);

  // Embed de YouTube sin peso local, con autoplay, mute, loop y sin controles interactivos
  protected readonly safeVideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/3tzclPPKnFY?autoplay=1&mute=1&loop=1&playlist=3tzclPPKnFY&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1&playsinline=1&enablejsapi=1'
  );

  onOpenModal() {
    this.openContact.emit();
  }
}
