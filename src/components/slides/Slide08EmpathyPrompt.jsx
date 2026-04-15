import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const Slide08EmpathyPrompt = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Prompt — ChatGPT</p>
        
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-800 mb-6 leading-tight fade-up fade-up-2">
          EL PROMPT DEL <span className="text-primary truncate">MAPA DE EMPATÍA.</span>
        </h2>

        <p className="text-base text-muted-foreground font-medium mb-8 fade-up fade-up-2">
          Pega tu proyecto real. Cuanto más contexto, mejor resultado.
        </p>

        <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)] fade-up fade-up-3">
          <div className="bg-primary/5 px-6 py-3 border-b border-primary/10 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/40" />
            <span className="font-mono text-[10px] text-primary/40 font-bold ml-2 uppercase tracking-[0.2em]">Prompt Estratégico</span>
          </div>
          <div className="p-8 max-h-[40vh] overflow-y-auto font-mono text-[13px] leading-relaxed text-foreground/70 scrollbar-thin scrollbar-thumb-primary/10">
            <p className="text-primary/60 mb-4">Actúa como estratega de marketing experto en investigación de audiencias.</p>
            <p>Mi negocio: <span className="text-primary font-bold">[descripción del proyecto]</span></p>
            <p>Mi cliente ideal: <span className="text-primary font-bold">[tipo de cliente]</span></p>
            <p className="mb-6">El problema que resuelvo: <span className="text-primary font-bold">[descripción]</span></p>
            
            <p className="font-bold text-foreground mb-2">Crea un mapa de empatía DETALLADO:</p>
            <p>1. ¿Qué PIENSA y SIENTE? (miedos, frustraciones, deseos no dichos)</p>
            <p>2. ¿Qué VE? (alternativas, entorno, competencia)</p>
            <p>3. ¿Qué OYE? (consejos, presión del entorno)</p>
            <p>4. ¿Qué DICE y HACE? (comportamiento de compra, hábitos)</p>
            <p>5. TOP 3 DOLORES ordenados por urgencia</p>
            <p>6. TOP 3 GANANCIAS ordenadas por deseo</p>
            <p className="bg-amber-50 text-amber-900 px-1 font-bold">7. LENGUAJE DEL CLIENTE: 5 frases EXACTAS que este cliente diría para describir su problema (sus palabras, no jerga)</p>
            
            <p className="mt-6 text-primary/60 italic">Formato: tabla. Lenguaje directo, como habla mi cliente.</p>
          </div>
        </div>

        <div className="mt-8 relative fade-up fade-up-4">
          <div className="bg-amber-100/50 border-2 border-amber-200/50 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
               <span className="text-3xl">⭐</span>
               <div className="space-y-1">
                 <p className="text-xs font-mono font-900 text-amber-700 uppercase tracking-widest">Sección 7 — Oro Puro</p>
                 <p className="text-sm font-bold text-amber-900 leading-relaxed italic">
                   "Entreno duro pero no mejoro porque como fatal antes de la carrera" — "Los nutricionistas no entienden el running de verdad"
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
      <SlideNumber current={8} total={total || 24} />
    </SlideShell>
  );
};

export default Slide08EmpathyPrompt;
