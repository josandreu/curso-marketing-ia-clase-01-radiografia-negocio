import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { AlertCircle } from 'lucide-react';

const Slide16ValuePropResult = ({ total }) => {
  const examples = [
    { 
      label: '🎤 Elevator Pitch', 
      text: 'La mayoría de runners populares entrenan 4 días a la semana pero comen como si fueran sedentarios. Yo sincronizo tu alimentación con tu ciclo de entrenamiento para que llegues con energía al kilómetro 35, no al 20. Sin dietas imposibles. Con el calendario de tu próxima carrera en la mano.',
      bg: 'bg-primary/5',
      border: 'border-primary/15',
      color: 'text-primary',
      flex: 'flex-[2]'
    },
    { 
      label: '🐦 Tweet', 
      text: 'Entrenas como atleta. Comes como oficinista. Ahí está tu problema. Soy nutricionista especializada en runners populares. 90 días para que tu dieta corra tan rápido como tus piernas.',
      bg: 'bg-accent/10',
      border: 'border-accent/20',
      color: 'text-accent-foreground',
      flex: 'flex-1'
    },
    { 
      label: '🏷️ Slogan', 
      text: '“Come como el atleta que ya eres.”',
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      color: 'text-amber-700',
      flex: 'flex-1',
      textStyle: 'font-heading font-700 text-lg md:text-xl italic'
    }
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1 text-center">Resultado — Ejemplo real</p>
        
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-800 mb-10 text-center fade-up fade-up-2">
           ASÍ SE VE UNA <span className="text-primary truncate uppercase">PROPUESTA DIFERENCIAL.</span>
        </h2>

        <div className="flex flex-col gap-4 mb-10 fade-up fade-up-3">
          {examples.map((ex, i) => (
            <BentoCard 
              key={i} 
              className={`flex flex-col md:flex-row gap-6 p-6 border ${ex.bg} ${ex.border} ${ex.flex} shadow-sm group hover:scale-[1.01] transition-transform`}
            >
              <span className={`font-mono text-[10px] tracking-[3px] uppercase flex-shrink-0 pt-1 min-w-[140px] font-bold ${ex.color}`}>
                {ex.label}
              </span>
              <p className={`text-[15px] leading-relaxed text-foreground/80 font-medium ${ex.textStyle || ''}`}>
                {ex.text}
              </p>
            </BentoCard>
          ))}
        </div>

        <div className="fade-up fade-up-4">
           <div className="bg-destructive/10 border-2 border-destructive/20 rounded-2xl p-6 flex items-center gap-5 justify-center">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              <p className="text-sm font-bold text-destructive tracking-tight">
                 Si suena a lo que podría decir CUALQUIER empresa de tu sector... <span className="underline underline-offset-4">BORRA Y REPITE.</span>
              </p>
           </div>
        </div>
      </div>
      <SlideNumber current={16} total={total || 24} />
    </SlideShell>
  );
};

export default Slide16ValuePropResult;
