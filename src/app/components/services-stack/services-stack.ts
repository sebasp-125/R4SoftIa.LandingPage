import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="servicios" class="relative z-30 py-24 px-4 bg-white border-t border-slate-200">
      <div class="container mx-auto max-w-6xl">
        
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span class="font-bold">[ // 02. NUESTROS SERVICIOS &amp; SOLUCIONES ]</span>
          </div>

          <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluciones Tecnológicas Integrales <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600">
              Desarrolladas a tu Medida
            </span>
          </h2>

          <p class="text-slate-600 text-base sm:text-lg leading-relaxed">
            Desliza para explorar nuestras principales líneas de desarrollo. 
            Construimos software modular, seguro y con la tecnología adecuada para cada objetivo.
          </p>
        </div>

        <!-- Sticky Stacking Cards Container (Stick Flotante que aparece desde abajo al hacer scroll) -->
        <div class="relative space-y-12">
          @for (service of services; track service.id; let idx = $index) {
            <article 
              [style.top.rem]="6.5 + (idx * 0.75)"
              class="sticky rounded-3xl bg-white border border-slate-200/90 hover:border-blue-400 p-8 sm:p-12 shadow-2xl shadow-slate-300/60 transition-all duration-300 overflow-hidden"
            >
              <!-- Card Top Header -->
              <div class="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <span class="w-8 h-8 rounded-xl bg-blue-600 text-white font-mono font-bold flex items-center justify-center text-xs shadow-md shadow-blue-500/20">
                    0{{ idx + 1 }}
                  </span>
                  <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono text-xs font-bold border border-blue-200">
                    {{ service.category }}
                  </span>
                </div>
                <span class="text-xs font-mono text-slate-400 font-medium">
                  SOLUCIÓN EMPRESARIAL VERIFICADA
                </span>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <!-- Left info column -->
                <div class="lg:col-span-7 flex flex-col justify-between space-y-5">
                  <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {{ service.title }}
                  </h3>

                  <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {{ service.description }}
                  </p>

                  <!-- Feature list -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    @for (feat of service.features; track feat) {
                      <div class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span class="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          ✓
                        </span>
                        <span>{{ feat }}</span>
                      </div>
                    }
                  </div>

                  <!-- CTA -->
                  <div class="pt-4 flex flex-wrap items-center gap-4">
                    <button 
                      type="button" 
                      (click)="onOpenModal()"
                      class="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md shadow-blue-500/20 cursor-pointer flex items-center gap-2"
                    >
                      <span>Solicitar Información</span>
                      <span>&rarr;</span>
                    </button>
                    <span class="text-xs text-slate-500 font-medium">
                      Garantía y soporte posventa incluido
                    </span>
                  </div>
                </div>

                <!-- Right visual preview mockup -->
                <div class="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
                  <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <span class="text-xs font-mono text-blue-400 font-bold uppercase flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                      {{ service.schematicTitle }}
                    </span>
                    <span class="text-[10px] font-mono text-slate-400">SISTEMA // DEMO</span>
                  </div>

                  <!-- Capabilities list -->
                  <div class="space-y-2.5 font-mono text-xs">
                    @for (item of service.items; track item.name) {
                      <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                        <span class="text-slate-200">{{ item.name }}</span>
                        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-cyan-300 font-bold">
                          {{ item.tag }}
                        </span>
                      </div>
                    }
                  </div>

                  <!-- Bottom card status -->
                  <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>ENTREGA LLAVE EN MANO</span>
                    <span class="text-emerald-400 font-bold">100% FUNCIONAL</span>
                  </div>
                </div>

              </div>
            </article>
          }
        </div>

      </div>
    </section>
  `
})
export class ServicesStackComponent {
  openContact = output<void>();

  protected readonly services = [
    {
      id: 'custom-erp',
      category: 'GESTIÓN EMPRESARIAL',
      title: 'Software de Gestión Interna (ERP / CRM a la Medida)',
      description: 'Centraliza todas las áreas de tu empresa en una sola plataforma: facturación, inventarios, compras, ventas, nómina y reportería en tiempo real adaptada a tu operación.',
      features: [
        'Módulos personalizados según los roles de tu equipo de trabajo',
        'Facturación electrónica e integración contable',
        'Control estricto de inventarios, bodegas y despachos',
        'Dashboards e indicadores gerenciales en tiempo real'
      ],
      schematicTitle: 'MÓDULO ERP // GESTIÓN CENTRAL',
      items: [
        { name: 'Ventas & Facturación Electrónica', tag: 'Automatizado' },
        { name: 'Control de Inventarios & Bodegas', tag: 'En Tiempo Real' },
        { name: 'Gestión de Clientes & CRM', tag: 'Historial 360°' },
        { name: 'Reportes Gerenciales & Métricas', tag: 'Exportable' }
      ]
    },
    {
      id: 'bank-portals',
      category: 'SECTOR FINANCIERO & BANCA',
      title: 'Portales para Bancos & Plataformas Transaccionales',
      description: 'Desarrollamos portales web seguros y robustos para entidades financieras y corporativas, con pasarelas de pago, validación de identidad y alta disponibilidad.',
      features: [
        'Pasarelas de pagos digitales y recaudos masivos',
        'Autenticación en dos pasos (2FA) y cifrado bancario',
        'Portales institucionales para consulta de saldos y extractos',
        'Conexión segura con sistemas centrales (Core Bancario)'
      ],
      schematicTitle: 'PORTAL TRANSACCIONAL // SEGURIDAD',
      items: [
        { name: 'Módulo de Recaudos y Multipagos', tag: 'Cifrado SSL' },
        { name: 'Autenticación Biométrica / 2FA', tag: 'Seguro' },
        { name: 'Consulta de Extractos y Saldos', tag: 'Alta Velocidad' },
        { name: 'Auditoría y Trazabilidad de Pagos', tag: 'Normativo' }
      ]
    },
    {
      id: 'mobile-apps',
      category: 'APLICACIONES MÓVILES',
      title: 'Desarrollo de Apps Móviles (iOS & Android)',
      description: 'Creamos aplicaciones móviles ágiles e intuitivas tanto para clientes finales como para fuerza de ventas y personal en campo, con funcionamiento offline y sincronización en la nube.',
      features: [
        'Aplicaciones móviles nativas e híbridas de alto rendimiento',
        'Ventanillas virtuales y radicación de trámites para ciudadanos y usuarios',
        'Geolocalización, rutas y seguimiento de pedidos en vivo',
        'Notificaciones push personalizadas y modo sin conexión'
      ],
      schematicTitle: 'APP MÓVIL // iOS & ANDROID',
      items: [
        { name: 'App para Clientes & Usuarios', tag: 'App Store / Play' },
        { name: 'App para Personal en Campo / Ventas', tag: 'Modo Offline' },
        { name: 'Notificaciones Push Segmentadas', tag: 'En Tiempo Real' },
        { name: 'Geolocalización & Mapas en Vivo', tag: 'GPS Integrado' }
      ]
    },
    {
      id: 'ai-automation',
      category: 'INTELIGENCIA ARTIFICIAL APLICADA',
      title: 'Automatización de Procesos & Soluciones con IA',
      description: 'Potenciamos tu software con inteligencia artificial práctica: lectura inteligente de documentos y facturas, chatbots de atención omnicanal y automatización de tareas repetitivas.',
      features: [
        'Lectura y extracción automática de datos desde PDFs y documentos',
        'Asistentes virtuales y chatbots integrados a WhatsApp y web',
        'Interconexión de sistemas antiguos con plataformas modernas',
        'Reducción drástica de errores humanos y tiempos de respuesta'
      ],
      schematicTitle: 'MOTOR DE IA // AUTOMATIZACIÓN',
      items: [
        { name: 'Extracción de Datos de Documentos', tag: 'OCR Inteligente' },
        { name: 'Chatbot de Atención al Cliente', tag: 'IA Generativa' },
        { name: 'Conexión con Software Heredado', tag: 'API Integrada' },
        { name: 'Reglas de Negocio Automatizadas', tag: 'Cero Reprocesos' }
      ]
    }
  ];

  onOpenModal() {
    this.openContact.emit();
  }
}
