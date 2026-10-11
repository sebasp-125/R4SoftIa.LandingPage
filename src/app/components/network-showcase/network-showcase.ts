import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-network-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="sectores" class="relative z-30 py-24 px-4 bg-white border-t border-slate-200">
      <div class="container mx-auto max-w-6xl">
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span class="font-bold">[ // 03. SECTORES &amp; EXPERIENCIA EMPRESARIAL ]</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sectores que Transformamos con <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              Software a la Medida
            </span>
          </h2>

          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Adaptamos cada desarrollo a las normativas, dinámicas operativas y necesidades particulares 
            de distintas industrias tanto del sector público como privado.
          </p>
        </div>

        <!-- Sectors Grid in White Theme -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          @for (sector of sectors; track sector.title) {
            <div 
              class="group bg-white hover:bg-blue-50/50 border border-slate-200/90 hover:border-blue-400 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {{ sector.icon }}
                </div>

                <span class="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 inline-block mb-2">
                  {{ sector.badge }}
                </span>

                <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {{ sector.title }}
                </h3>

                <p class="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {{ sector.description }}
                </p>
              </div>

              <div class="pt-3 border-t border-slate-100">
                <span class="text-[11px] font-semibold text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Ver Casos de Uso &rarr;
                </span>
              </div>
            </div>
          }
        </div>

        <!-- Development Methodology Strip (1cero1 inspired) -->
        <div class="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div class="text-center max-w-2xl mx-auto mb-10">
            <span class="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest block mb-1">
              METODOLOGÍA DE DESARROLLO
            </span>
            <h3 class="text-2xl font-bold text-slate-900">
              ¿Cómo Construimos tu Proyecto de Software?
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1">
              Un proceso ágil, transparente y con entregas periódicas para que veas el avance desde las primeras semanas.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (step of methodology; track step.step) {
              <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span class="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs mb-3 shadow-md shadow-blue-500/20">
                    {{ step.step }}
                  </span>
                  <h4 class="text-sm font-bold text-slate-900 mb-1">
                    {{ step.title }}
                  </h4>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `
})
export class NetworkShowcaseComponent {
  protected readonly sectors = [
    {
      icon: '🏦',
      badge: 'FINANZAS & BANCA',
      title: 'Sector Financiero & Bancos',
      description: 'Portales transaccionales seguros, recaudos digitales, pasarelas de pago y módulos de consulta bajo estricta seguridad bancaria.'
    },
    {
      icon: '🏛️',
      badge: 'GOBIERNO & ALCALDÍAS',
      title: 'Sector Público & Oficial',
      description: 'Plataformas digitales para radicación de trámites ciudadanos, ventanillas únicas virtuales y portales de transparencia.'
    },
    {
      icon: '🏢',
      badge: 'COMERCIO & RETAIL',
      title: 'Empresas, Comercio & Distribución',
      description: 'Sistemas ERP a la medida para control de inventarios multisede, puntos de venta (POS), facturación electrónica y despacho.'
    },
    {
      icon: '🏥',
      badge: 'SERVICIOS & SALUD',
      title: 'Salud, Logística & Servicios',
      description: 'Plataformas de agendamiento en línea, seguimiento de rutas, trazabilidad de pedidos y gestión documental personalizada.'
    }
  ];

  protected readonly methodology = [
    {
      step: '01',
      title: 'Análisis y Requerimientos',
      description: 'Entendemos tus procesos de negocio, entrevistamos a tu equipo y diseñamos el alcance exacto del proyecto.'
    },
    {
      step: '02',
      title: 'Diseño UX/UI y Prototipos',
      description: 'Creamos pantallas interactivas para que pruebes la experiencia de usuario antes de escribir código.'
    },
    {
      step: '03',
      title: 'Desarrollo Ágil & Pruebas QA',
      description: 'Programación en sprints con entregas periódicas y pruebas rigurosas de funcionalidad y seguridad.'
    },
    {
      step: '04',
      title: 'Puesta en Marcha & Posventa',
      description: 'Despliegue en la nube, capacitación completa de tu equipo y soporte técnico continuo permanente.'
    }
  ];
}
