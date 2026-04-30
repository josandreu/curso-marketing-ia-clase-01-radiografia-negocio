import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { ClipboardList, Brain, Search, Gem } from 'lucide-react';

const Slide21Recap = ({ total }) => {
  const items = [
    { ico: 'ClipboardList', lbl: 'Proyecto Definido', sub: 'Tu caso de estudio real para las 8 sesiones', color: 'border-t-primary' },
    { ico: 'Brain', lbl: 'Cliente Radiografiado', sub: 'Mapa de empatía + lenguaje exacto', color: 'border-t-accent' },
    { ico: 'Search', lbl: 'Competencia Mapeada', sub: 'Patrones + huecos de mercado', color: 'border-t-amber-400' },
    { ico: 'Gem', lbl: 'Propuesta Diferencial', sub: 'Elevator pitch · Tweet · Slogan', color: 'border-t-emerald-400' }
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body text-center flex flex-col items-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Recap (2:10)</p>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 mb-12 leading-tight fade-up fade-up-2">
           HOY HAS CONSTRUIDO ALGO QUE<br/>
           <span className="text-primary italic">LA MAYORÍA DE NEGOCIOS NO TIENE.</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12 fade-up fade-up-3">
          {items.map((item, i) => {
            const Icon = { ClipboardList, Brain, Search, Gem }[item.ico];
            return (
              <BentoCard key={i} className={`flex flex-col items-center gap-6 py-12 px-6 border-t-4 ${item.color} shadow-lg shadow-black/5 hover:scale-[1.05] transition-transform`}>
                <div className="w-16 h-16 rounded-2xl bg-muted/50 flex items-center justify-center text-primary mb-2">
                   <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-base font-900 uppercase tracking-widest text-foreground leading-tight">{item.lbl}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.sub}</p>
              </BentoCard>
            );
          })}
        </div>

        <div className="fade-up fade-up-4 w-full max-w-4xl">
           <BentoCard accent className="bg-primary/5 border-2 border-primary/20 flex items-center justify-center p-6 italic shadow-xl shadow-primary/5">
              <p className="text-lg font-bold text-foreground/80 leading-snug">
                 "Este documento es la base de absolutamente todo lo que viene. <span className="text-primary font-900">El cimiento.</span> No avances sin haberlo completado."
              </p>
           </BentoCard>
        </div>
      </div>
      <SlideNumber current={21} total={total || 24} />
    </SlideShell>
  );
};

export default Slide21Recap;
