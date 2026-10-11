import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="nosotros" class="relative z-30 pt-24 pb-32 px-4 bg-slate-50 border-t-2 border-slate-200/90 rounded-t-[3.5rem] lg:rounded-t-[4.5rem] shadow-[0_-25px_60px_rgba(15,23,42,0.08)] bg-light-dots overflow-hidden">
      
      <!-- Top Ambient line -->
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-20 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div class="container mx-auto max-w-6xl relative z-10">
        
        <!-- Section Tag -->
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="w-8 h-[2px] bg-blue-600"></span>
          <span class="text-xs font-mono uppercase tracking-widest text-blue-700 font-bold">[ // 01. QUIÉNES SOMOS &amp; NUESTRA ESENCIA ]</span>
          <span class="w-8 h-[2px] bg-blue-600"></span>
        </div>

        <!-- Section Title & Subheading -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sobre Nosotros y Nuestra <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              Pasión por Construir Software
            </span>
          </h2>
          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            En <strong class="text-slate-900">R4SoftIA</strong> no creemos en plantillas genéricas ni en soluciones rígidas. 
            Somos un equipo especializado en desarrollo de software a la medida, comprometido con resolver los problemas 
            operativos reales de empresas e instituciones a través de tecnología intuitiva, ágil y escalable.
          </p>
        </div>

        <!-- The Peeking Mascot & Emergent Card (All Roads Image 2 Signature Effect) -->
        <div class="relative bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/50 mb-20 overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Narrative Column -->
            <div class="lg:col-span-7 flex flex-col justify-center space-y-5">
              <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold w-fit">
                SOFTWARE CON PROPÓSITO REAL
              </span>

              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Construimos Soluciones que se Adaptan a tu Negocio, no al Revés
              </h3>
              
              <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                Sabemos que cada organización tiene procesos, clientes y normativas particulares. Por eso, en lugar de 
                forzarte a pagar licencias de plataformas inflexibles que tu equipo no sabe usar, nos sentamos contigo, 
                levantamos tus flujos de trabajo y desarrollamos exactamente la herramienta que necesitas.
              </p>

              <p class="text-slate-600 leading-relaxed text-sm sm:text-base">
                Desde portales transaccionales para banca y gobierno hasta aplicaciones móviles y sistemas ERP/CRM personalizados, 
                acompañamos a tu empresa desde el primer borrador hasta el soporte y la posventa continua.
              </p>

              <!-- Principles Checklist -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                  <div>
                    <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Acompañamiento Cercano</h4>
                    <p class="text-xs text-slate-500 mt-0.5">Comunicación humana y sin tecnicismos confusos.</p>
                  </div>
                </div>

                <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                  <div>
                    <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Garantía y Posventa</h4>
                    <p class="text-xs text-slate-500 mt-0.5">Soporte técnico directo cuando lo necesites.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Interactive Graphic & Emergent Character (All Roads Image 2 style) -->
            <div class="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[320px]">
              
              <!-- Clean Dashboard Mockup -->
              <div class="w-full max-w-sm rounded-2xl bg-slate-900 text-white p-6 shadow-2xl relative z-10 border border-slate-800">
                <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                  </div>
                  <span class="text-[11px] font-mono text-cyan-400">PORTAL EMPRESARIAL // v2.6</span>
                </div>

                <div class="space-y-2.5 font-mono text-xs">
                  <div class="flex justify-between p-2 rounded bg-slate-800/80">
                    <span class="text-slate-400">Módulos Activos:</span>
                    <span class="text-emerald-400 font-bold">ERP + CRM + Facturación</span>
                  </div>
                  <div class="flex justify-between p-2 rounded bg-slate-800/80">
                    <span class="text-slate-400">Automatización IA:</span>
                    <span class="text-cyan-400 font-bold">Procesamiento Activo</span>
                  </div>
                  <div class="flex justify-between p-2 rounded bg-slate-800/80">
                    <span class="text-slate-400">Disponibilidad:</span>
                    <span class="text-white font-bold">100% Nube Segura</span>
                  </div>
                </div>
              </div>

              <!-- Emergent Mascot Figure peeking from bottom (All Roads Image 2 Sun with glasses style) -->
              <div class="absolute -bottom-8 -right-4 sm:-right-6 z-20 flex flex-col items-center animate-peek">
                <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-sky-400 p-2 shadow-2xl flex items-center justify-center border-4 border-white transform hover:scale-105 transition-transform">
                  <div class="relative w-full h-full flex items-center justify-center">
                    <span class="text-4xl sm:text-5xl">👨‍💻</span>
                  </div>
                </div>
                <!-- Speech Bubble -->
                <div class="mt-1 px-3 py-1 rounded-xl bg-white border border-slate-200 shadow-md text-[10px] font-bold text-slate-800 whitespace-nowrap">
                  ¡Tu software, tal como lo imaginaste!
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- 4 Strategic Pillars of Custom Software -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (pillar of pillars; track pillar.number) {
            <div 
              class="group bg-white hover:bg-blue-50/50 border border-slate-200/90 hover:border-blue-400 rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-2xl font-mono font-black text-blue-600/30 group-hover:text-blue-600 transition-colors">
                    {{ pillar.number }}
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-blue-50 text-blue-700 font-bold border border-blue-200">
                    {{ pillar.badge }}
                  </span>
                </div>

                <h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {{ pillar.title }}
                </h3>

                <p class="text-xs text-slate-600 leading-relaxed font-normal">
                  {{ pillar.description }}
                </p>
              </div>

              <div class="mt-6 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                <span class="text-[11px] text-slate-400 font-medium">Beneficio:</span>
                <span class="text-sm font-mono font-bold text-blue-600">{{ pillar.benefit }}</span>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class AboutStackComponent {
  protected readonly pillars = [
    {
      number: '01',
      badge: 'PERSONALIZACIÓN',
      title: 'Desarrollo a la Medida',
      description: 'Construimos cada pantalla, base de datos y funcionalidad adaptada a las necesidades puntuales de tu organización.',
      benefit: 'Ajuste 100% Preciso'
    },
    {
      number: '02',
      badge: 'EXPERIENCIA UX',
      title: 'Usabilidad Intuitiva',
      description: 'Interfaces limpias y fáciles de usar, pensadas para que tus colaboradores y usuarios adopten el sistema sin complicaciones.',
      benefit: 'Cero Fricción'
    },
    {
      number: '03',
      badge: 'INNOVACIÓN',
      title: 'Inteligencia Artificial',
      description: 'Automatización inteligente de documentos, asistentes virtuales y análisis predictivo que potencian el rendimiento.',
      benefit: 'Alta Eficiencia'
    },
    {
      number: '04',
      badge: 'CONFIANZA',
      title: 'Soporte y Posventa',
      description: 'Acompañamiento continuo posterior a la entrega. Garantizamos la estabilidad y evolución permanente de tu software.',
      benefit: 'Respaldo Total'
    }
  ];
}
