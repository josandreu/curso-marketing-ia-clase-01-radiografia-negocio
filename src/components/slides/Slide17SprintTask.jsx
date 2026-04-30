import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Clock, CheckSquare, Zap } from 'lucide-react';

const Slide17SprintTask = ({ total }) => {
  const tasks = [
    'Elige tu versión favorita de cada formato.',
    'Ajustar tono: ¿más directo, cercano o técnico?',
    'Probar 3 variantes: racional, emocional, provocadora.',
    'Prompt extra: "Hazlo más específico. Que no sirva para nadie más."'
  ];

  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[0.8fr,1.2fr] gap-20 items-center font-body">
        
        {/* Left: Timer Visual */}
        <div className="flex flex-col items-center gap-8 fade-up fade-up-1">
           <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 border-[6px] border-primary/5 rounded-full" />
              <div className="absolute inset-0 border-[6px] border-primary border-t-transparent rounded-full animate-spin" style={{ animationDuration: '4s' }} />
              
              <div className="text-center z-10">
                 <span className="font-heading text-8xl font-900 text-primary leading-none tracking-tighter">20</span>
                 <p className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">minutos</p>
              </div>
           </div>

           <div className="flex items-center gap-3 py-3 px-6 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700">
              <Zap className="w-4 h-4 fill-emerald-500" />
              <span className="text-[13px] font-bold tracking-tight">Modo focus activo</span>
           </div>
        </div>

        {/* Right: Task List */}
        <div className="flex flex-col">
          <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-2">Trabajo autónomo</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.07] mb-8 fade-up fade-up-2">
            REFINAR E<br/>
            <span className="text-primary truncate uppercase">ITERAR.</span>
          </h2>

          <div className="space-y-5 fade-up fade-up-3">
            {tasks.map((task, i) => (
              <BentoCard key={i} className="flex items-center gap-6 p-6 hover:border-primary/30 transition-all group">
                <div className="w-8 h-8 rounded-md border-2 border-primary/20 flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all" />
                <p className="text-xl font-medium text-foreground/80 leading-relaxed">
                   {task}
                </p>
              </BentoCard>
            ))}
          </div>

          <div className="mt-12 p-6 bg-muted/40 rounded-xl border border-dashed border-border/60 text-center fade-up fade-up-4">
             <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                Sube tus resultados al <span className="text-foreground font-900 italic tracking-tight underline underline-offset-8 decoration-primary/30 pointer-events-none">canal de la sesión</span> para recibir feedback.
             </p>
          </div>
        </div>
      </div>
      <SlideNumber current={17} total={total || 24} />
    </SlideShell>
  );
};

export default Slide17SprintTask;
