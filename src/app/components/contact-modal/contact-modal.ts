import { Component, signal, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
        <div 
          (click)="$event.stopPropagation()"
          class="relative w-full max-w-xl bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-900/20 text-slate-900 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          <!-- Close button -->
          <button 
            type="button" 
            (click)="onClose()"
            class="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
            aria-label="Cerrar modal"
          >
            ✕
          </button>

          @if (!submitted()) {
            <!-- Header -->
            <div class="mb-6">
              <span class="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-mono uppercase tracking-wider font-bold mb-2">
                COTIZACIÓN SIN COMPROMISO
              </span>
              <h3 class="text-2xl font-extrabold text-slate-900 tracking-tight">
                Cuéntanos sobre tu Proyecto de Software
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 mt-1">
                Completa este formulario. Te responderemos en menos de 2 horas hábiles con una valoración inicial y propuesta técnica.
              </p>
            </div>

            <!-- Form -->
            <form (ngSubmit)="onSubmit()" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono font-bold text-slate-700 mb-1">Nombre Completo *</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formData.name" 
                    name="name" 
                    required 
                    placeholder="Ej. Carlos Mendoza"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none font-sans"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-bold text-slate-700 mb-1">Empresa u Organización *</label>
                  <input 
                    type="text" 
                    [(ngModel)]="formData.company" 
                    name="company" 
                    required 
                    placeholder="Ej. Comercializadora Andina"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none font-sans"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono font-bold text-slate-700 mb-1">Correo Electrónico *</label>
                  <input 
                    type="email" 
                    [(ngModel)]="formData.email" 
                    name="email" 
                    required 
                    placeholder="carlos@empresa.com"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none font-sans"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-bold text-slate-700 mb-1">WhatsApp / Teléfono *</label>
                  <input 
                    type="tel" 
                    [(ngModel)]="formData.phone" 
                    name="phone" 
                    required 
                    placeholder="+57 300 123 4567"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono font-bold text-slate-700 mb-1">Tipo de Software o Solución</label>
                <select 
                  [(ngModel)]="formData.solutionType" 
                  name="solutionType"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 text-sm text-slate-900 outline-none font-sans"
                >
                  <option value="Software a la Medida (ERP/CRM)">Software a la Medida (ERP / CRM / Inventarios)</option>
                  <option value="Portales para Bancos / Finanzas">Portales para Bancos / Pasarelas de Pago</option>
                  <option value="Aplicación Móvil (iOS & Android)">Aplicación Móvil (iOS & Android)</option>
                  <option value="Portal de Gobierno / Trámites Virtuales">Portal de Gobierno / Ventanilla Única de Trámites</option>
                  <option value="Automatización con IA">Automatización de Procesos con IA</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-mono font-bold text-slate-700 mb-1">¿Qué necesitas que haga tu software?</label>
                <textarea 
                  rows="3" 
                  [(ngModel)]="formData.message" 
                  name="message"
                  placeholder="Ej. Necesitamos un sistema para gestionar pedidos, facturación y una app para nuestros clientes..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm text-slate-900 outline-none font-sans"
                ></textarea>
              </div>

              <div class="pt-2">
                <button 
                  type="submit" 
                  class="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enviar Solicitud de Cotización</span>
                  <span>&rarr;</span>
                </button>
              </div>

              <p class="text-[11px] text-center text-slate-500 font-mono">
                Tus datos están protegidos bajo estricto acuerdo de confidencialidad.
              </p>
            </form>
          } @else {
            <!-- Success confirmation state -->
            <div class="py-10 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-sm">
                ✓
              </div>

              <h3 class="text-2xl font-bold text-slate-900">
                ¡Solicitud Recibida Correctamente!
              </h3>

              <p class="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Gracias, <strong class="text-slate-900">{{ formData.name }}</strong>. Nuestro equipo de desarrollo revisará tus requerimientos y te contactará a través de <strong class="text-blue-600">{{ formData.email }}</strong> o WhatsApp para preparar la cotización.
              </p>

              <div class="pt-4 flex justify-center gap-3">
                <button 
                  type="button" 
                  (click)="resetAndClose()"
                  class="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-blue-600 text-white hover:bg-blue-700 transition-all cursor-pointer shadow-md"
                >
                  Entendido, Volver al Sitio
                </button>
              </div>
            </div>
          }

        </div>
      </div>
    }
  `
})
export class ContactModalComponent {
  isOpen = input<boolean>(false);
  close = output<void>();

  protected readonly submitted = signal(false);

  formData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    solutionType: 'Software a la Medida (ERP/CRM)',
    message: ''
  };

  onSubmit() {
    this.submitted.set(true);
  }

  onClose() {
    this.close.emit();
  }

  resetAndClose() {
    this.submitted.set(false);
    this.formData = {
      name: '',
      company: '',
      email: '',
      phone: '',
      solutionType: 'Software a la Medida (ERP/CRM)',
      message: ''
    };
    this.close.emit();
  }
}
