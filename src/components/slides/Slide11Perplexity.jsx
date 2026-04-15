import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Search, MessageSquare, Globe, CheckCircle2 } from 'lucide-react';

const Slide11Perplexity = ({ total }) => {
  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr,0.8fr] gap-16 items-center font-body">
        <div className="flex-1">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 3 — Herramienta 2</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.1] mb-8 fade-up fade-up-2">
            ¿QUÉ HACE TU COMPETENCIA?<br/>
            <span className="text-primary italic text-[0.8em] font-700">(Con fuentes. No con inventos.)</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-10 fade-up fade-up-3">
            ChatGPT predice. Perplexity busca en internet y da fuentes verificables. Para investigar competencia real, necesitamos datos, no probabilidades.
          </p>

          <div className="space-y-4 fade-up fade-up-4">
            <BentoCard className="flex items-start gap-5 p-6 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-primary flex-shrink-0">
                 <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="font-heading text-sm font-800 text-foreground uppercase tracking-widest">ChatGPT</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                   Modelo de lenguaje. Predice la siguiente palabra. Ideal para síntesis, estrategia y creatividad.
                </p>
              </div>
            </BentoCard>

            <BentoCard accent className="flex items-start gap-5 p-6 border-2 border-primary/20">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                 <Globe className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="font-heading text-sm font-800 text-primary uppercase tracking-widest">Perplexity</p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                   IA con búsqueda web en tiempo real. Da fuentes, puedes hacer clic y verificar. Ideal para benchmarking.
                </p>
              </div>
            </BentoCard>
          </div>
        </div>

        <div className="fade-up fade-up-3">
           <div className="bg-[#1C1C1E] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="bg-[#2C2C2E] px-4 py-3 flex items-center justify-between border-b border-white/5">
                 <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                 </div>
                 <span className="font-mono text-[10px] text-white/30 font-bold uppercase tracking-widest">Perplexity Terminal</span>
              </div>
              <div className="p-8 font-mono text-[13px] leading-relaxed space-y-3">
                 <div className="flex gap-2">
                    <span className="text-primary font-bold">$</span>
                    <span className="text-white/80">benchmarking --competencia="nutrición deportiva"</span>
                 </div>
                 <div className="text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>✓ Buscando en tiempo real...</span>
                 </div>
                 <div className="text-white/60 pl-6 space-y-1">
                    <p>• Analizando 12 URLs encontradas</p>
                    <p>• Identificando patrones de precios</p>
                    <p>• Detectando huecos en la oferta</p>
                 </div>
                 <div className="pt-4 flex flex-col gap-2">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                       <p className="text-xs font-bold text-primary mb-1">Resultado:</p>
                       <p className="text-white/90 text-[11px]">Encontrados 3 competidores posicionados en elite. <span className="text-accent underline font-bold">Oportunidad:</span> Corredor popular no competitivo.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
      <SlideNumber current={11} total={total || 24} />
    </SlideShell>
  );
};

export default Slide11Perplexity;
