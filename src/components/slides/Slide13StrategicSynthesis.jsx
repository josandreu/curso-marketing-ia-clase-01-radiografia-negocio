import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Target, Users, TrendingUp, AlertTriangle } from 'lucide-react';

const Slide13StrategicSynthesis = ({ total }) => {
  const patterns = [
    'Todos en Instagram/YouTube con contenido genérico de nutrición.',
    'Propuesta centrada en "perder peso", no en rendimiento real.',
    'Precios similares, sin diferenciación clara en la oferta.',
    'Testimonios genéricos: "Perdí 5 kg en 3 meses".'
  ];

  const opportunities = [
    'Posicionarte como especialista exclusivo del runner popular.',
    'Lenguaje de corredor, no de nutricionista: km, series, carreras.',
    'Planes sincronizados con calendario de competición real.',
    'Testimonios de mejora de marca y rendimiento en carrera.'
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1 text-center">Síntesis del análisis</p>
        
        <h2 className="font-heading text-4xl md:text-5xl font-800 mb-12 text-center fade-up fade-up-2">
          PATRONES VS. <span className="text-primary truncate uppercase">OPORTUNIDADES.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch fade-up fade-up-3">
          {/* Col 1: Patrones */}
          <BentoCard className="flex flex-col gap-6 p-10 border-border/80 bg-muted/20">
            <div className="flex items-center gap-4 border-b border-border/60 pb-6 mb-2">
               <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground">
                  <AlertTriangle className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="font-heading text-sm font-900 uppercase tracking-widest text-muted-foreground">Lo que hace todo el mundo</h3>
                  <p className="text-[12px] text-muted-foreground opacity-60">El océano rojo del sector</p>
               </div>
            </div>
            
            <ul className="space-y-4">
              {patterns.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground/40 mt-1">•</span>
                  <p className="text-[15px] text-muted-foreground leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </BentoCard>

          {/* Col 2: Oportunidades */}
          <BentoCard accent className="flex flex-col gap-6 p-10 border-primary/20 bg-primary/[0.03] shadow-xl shadow-primary/5">
            <div className="flex items-center gap-4 border-b border-primary/10 pb-6 mb-2">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
               </div>
               <div>
                  <h3 className="font-heading text-sm font-900 uppercase tracking-widest text-primary">Tu Oportunidad</h3>
                  <p className="text-[12px] text-primary/60">El océano azul para tu negocio</p>
               </div>
            </div>
            
            <ul className="space-y-4">
              {opportunities.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-[15px] text-foreground font-bold leading-snug">{item}</p>
                </li>
              ))}
            </ul>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={13} total={total || 24} />
    </SlideShell>
  );
};

export default Slide13StrategicSynthesis;
