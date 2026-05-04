import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { MessageSquare, Globe } from 'lucide-react';

const Slide11Perplexity = ({ total }) => {
  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr,0.8fr] gap-16 items-center font-body">
        <div className="flex-1">
          <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 3 — Herramienta 2</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.1] mb-8 fade-up fade-up-2">
            ¿QUÉ HACE TU COMPETENCIA?<br/>
            <span className="text-primary italic text-[0.8em] font-700">(Con fuentes. No con inventos.)</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 fade-up fade-up-3">
            ChatGPT predice. Perplexity busca en internet y da fuentes verificables. Para investigar competencia real, necesitamos datos, no probabilidades.
          </p>

          <div className="space-y-4 fade-up fade-up-4">
            <BentoCard className="flex items-start gap-6 p-8 hover:border-primary/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-primary flex-shrink-0">
                 <MessageSquare className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <p className="font-heading text-base font-900 text-foreground uppercase tracking-widest">ChatGPT</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                   Modelo de lenguaje. Predice la siguiente palabra. Ideal para síntesis, estrategia y creatividad.
                </p>
              </div>
            </BentoCard>

            <BentoCard accent className="flex items-start gap-6 p-8 border-2 border-primary/20">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                 <Globe className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <p className="font-heading text-base font-900 text-primary uppercase tracking-widest">Perplexity</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                   IA con búsqueda web en tiempo real. Da fuentes, puedes hacer clic y verificar. Ideal para benchmarking.
                </p>
              </div>
            </BentoCard>
          </div>
        </div>

        <div className="fade-up fade-up-3 min-w-0">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary/80 mb-3 font-bold">
            Prompt — Perplexity
          </p>
          <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
            <div className="bg-primary/5 px-6 py-4 border-b border-primary/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-amber-400/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
              <span className="font-mono text-xs text-primary/60 font-bold uppercase tracking-[0.2em]">
                Benchmarking con fuentes
              </span>
            </div>
            <div className="p-6 md:p-8 max-h-[min(52vh,520px)] overflow-y-auto font-mono text-[15px] md:text-[16px] leading-relaxed text-foreground/80 scrollbar-thin scrollbar-thumb-primary/10">
              <p>
                Busca las 5 marcas o profesionales más relevantes en{' '}
                <span className="text-primary font-bold">[sector/nicho]</span> en{' '}
                <span className="text-primary font-bold">[país/mercado]</span>.
              </p>
              <p className="mt-4 font-bold text-foreground">Para cada uno:</p>
              <ul className="mt-2 space-y-1 list-disc pl-5">
                <li>Nombre y URL</li>
                <li>Propuesta de valor principal (en 1 frase)</li>
                <li>Canal de marketing más fuerte (web, Instagram, LinkedIn, YouTube, email…)</li>
                <li>Qué hacen bien que yo podría aprender</li>
                <li>Qué podrían mejorar (oportunidad para mí)</li>
              </ul>
              <p className="mt-4 text-primary/70 italic">
                Formato: tabla comparativa con 5 filas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SlideNumber current={11} total={total || 24} />
    </SlideShell>
  );
};

export default Slide11Perplexity;
