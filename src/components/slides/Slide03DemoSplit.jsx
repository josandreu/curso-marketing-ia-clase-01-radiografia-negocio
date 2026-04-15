import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide03DemoSplit = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <h2 className="font-heading text-2xl md:text-3xl font-800 text-center mb-12 fade-up fade-up-1 text-foreground/80 leading-relaxed">
           LA MISMA HERRAMIENTA.<br/>
           <span className="text-primary tracking-tight uppercase text-4xl mt-3 block">DOS RESULTADOS RADICALMENTE DISTINTOS.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,60px,1.2fr] items-stretch gap-6 fade-up fade-up-2">
          {/* Lado 1: Sin Contexto */}
          <BentoCard className="flex flex-col gap-4 opacity-50 grayscale hover:grayscale-0 transition-all hover:opacity-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-destructive px-3 py-1 bg-destructive/10 rounded-full">❌ SIN CONTEXTO</span>
            </div>
            
            <div className="bg-muted p-4 rounded-xl border border-border/50">
              <p className="text-xs font-mono font-bold text-muted-foreground uppercase opacity-40 mb-2">Prompt</p>
              <p className="text-sm font-medium text-foreground">"Hazme un plan de marketing para mi negocio de nutrición."</p>
            </div>

            <div className="bg-white/50 p-4 rounded-xl border border-dashed border-border flex-1">
              <p className="text-xs font-mono font-bold text-muted-foreground uppercase opacity-40 mb-3">Resultado</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-border" />
                   <div className="h-2 w-32 bg-border/40 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-border" />
                   <div className="h-2 w-24 bg-border/40 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-border" />
                   <div className="h-2 w-48 bg-border/40 rounded-full" />
                </div>
                <p className="text-xs text-muted-foreground italic mt-4">
                  → Estrategias genéricas que sirven para cualquiera.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Separador */}
          <div className="flex items-center justify-center relative">
             <div className="w-px h-full bg-border absolute hidden lg:block" />
             <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10 shadow-lg shadow-primary/30">
                <span className="text-lg font-bold">VS</span>
             </div>
          </div>

          {/* Lado 2: Con Contexto (Brief) */}
          <BentoCard accent className="flex flex-col gap-4 border-2 border-primary/20 shadow-xl shadow-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full tracking-wide">✅ CON CONTEXTO (BRIEF)</span>
            </div>

            <div className="bg-white p-4 rounded-xl border border-primary/10 shadow-sm shadow-primary/5">
              <p className="text-xs font-mono font-bold text-primary/60 uppercase mb-2">Prompt optimizado</p>
              <p className="text-sm font-medium text-foreground leading-relaxed italic">
                 "Actúa como estratega para nutrición deportiva... especializada en corredores populares en Madrid."
              </p>
            </div>

            <div className="bg-primary/[0.03] p-5 rounded-xl border border-primary/10 flex-1">
               <p className="text-xs font-mono font-bold text-primary/60 uppercase mb-3 text-center">Resultado Específico</p>
               <div className="space-y-4">
                 <div className="p-3 bg-white rounded-lg border border-primary/5 shadow-sm">
                   <p className="text-xs font-bold text-primary mb-1 italic">Dolor:</p>
                   <p className="text-sm text-foreground">"Entreno duro pero pincho en el km 30 porque no sé qué comer."</p>
                 </div>
                 <div className="p-3 bg-white rounded-lg border border-primary/5 shadow-sm">
                   <p className="text-xs font-bold text-primary mb-1 italic">Gancho:</p>
                   <p className="text-sm font-bold text-foreground">"Guía: Qué comer 72h antes de tu primer 10K."</p>
                 </div>
               </div>
            </div>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={3} total={total || 24} />
    </SlideShell>
  );
};

export default Slide03DemoSplit;
