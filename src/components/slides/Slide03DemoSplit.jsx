import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide03DemoSplit = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <h2 className="font-heading text-3xl md:text-4xl font-800 text-center mb-12 fade-up fade-up-1 text-foreground/80 leading-relaxed">
           LA MISMA HERRAMIENTA.<br/>
           <span className="text-primary tracking-tight uppercase text-5xl mt-3 block">DOS RESULTADOS RADICALMENTE DISTINTOS.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,60px,1.2fr] items-stretch gap-6 fade-up fade-up-2">
          {/* Lado 1: Sin Contexto */}
          <BentoCard className="flex flex-col gap-6 opacity-50 grayscale hover:grayscale-0 transition-all hover:opacity-100 p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-destructive px-4 py-1 bg-destructive/10 rounded-full">SIN CONTEXTO</span>
            </div>
            
            <div className="bg-muted p-8 rounded-xl border border-border/50">
              <p className="text-sm font-mono font-bold text-muted-foreground uppercase opacity-40 mb-3">Prompt</p>
              <p className="text-xl md:text-2xl font-medium text-foreground">"Hazme un plan de marketing para mi negocio de nutrición."</p>
            </div>

            <div className="bg-white/50 p-8 rounded-xl border border-dashed border-border flex-1">
              <p className="text-sm font-mono font-bold text-muted-foreground uppercase opacity-40 mb-4">Resultado</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-border" />
                   <div className="h-4 w-48 bg-border/40 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-border" />
                   <div className="h-4 w-40 bg-border/40 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-border" />
                   <div className="h-4 w-64 bg-border/40 rounded-full" />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground italic mt-8">
                   → Estrategias genéricas que sirven para cualquiera.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Separador */}
          <div className="flex items-center justify-center relative">
             <div className="w-px h-full bg-border absolute hidden lg:block" />
             <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white z-10 shadow-lg shadow-primary/30">
                <span className="text-xl font-bold">VS</span>
             </div>
          </div>

          {/* Lado 2: Con Contexto (Brief) */}
          <BentoCard accent className="flex flex-col gap-6 border-2 border-primary/20 shadow-xl shadow-primary/5 p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-base font-bold text-primary px-4 py-1 bg-primary/10 rounded-full tracking-wide">CON CONTEXTO (BRIEF)</span>
            </div>

            <div className="bg-white p-8 rounded-xl border border-primary/10 shadow-sm shadow-primary/5">
              <p className="text-sm font-mono font-bold text-primary/60 uppercase mb-3">Prompt optimizado</p>
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                 "Actúa como estratega para nutrición deportiva... especializada en corredores populares en Madrid."
              </p>
            </div>

            <div className="bg-primary/[0.03] p-8 rounded-xl border border-primary/10 flex-1">
               <p className="text-sm font-mono font-bold text-primary/60 uppercase mb-5 text-center">Resultado Específico</p>
               <div className="space-y-8">
                 <div className="p-6 bg-white rounded-lg border border-primary/5 shadow-sm">
                   <p className="text-base font-bold text-primary mb-2 italic">Dolor:</p>
                   <p className="text-lg md:text-xl text-foreground">"Entreno duro pero pincho en el km 30 porque no sé qué comer."</p>
                 </div>
                 <div className="p-6 bg-white rounded-lg border border-primary/5 shadow-sm">
                   <p className="text-base font-bold text-primary mb-2 italic">Gancho:</p>
                   <p className="text-xl md:text-3xl font-900 text-foreground">"Guía: Qué comer 72h antes de tu primer 10K."</p>
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
