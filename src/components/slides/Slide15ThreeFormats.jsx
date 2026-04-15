import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Mic, Twitter, Tag } from 'lucide-react';

const Slide15ThreeFormats = ({ total }) => {
  const formats = [
    { 
      ico: Mic, 
      name: 'ELEVATOR PITCH', 
      spec: '30 segundos · 3-4 frases', 
      desc: 'Para presentarte a un desconocido. Empieza por el dolor del cliente, no por lo que haces tú.', 
      key: 'Regla: si no entienden en 30 seg, reescríbelo.',
      color: 'text-primary',
      bg: 'bg-primary/5',
      border: 'border-primary/20'
    },
    { 
      ico: Twitter, 
      name: 'FORMATO TWEET', 
      spec: 'Máx. 280 caracteres', 
      desc: 'Gancho directo. Impactante. Que alguien lo lea y piense "esto es exactamente para mí."', 
      key: 'Regla: si caben 2 empresas en esa frase, no sirve.',
      color: 'text-accent-foreground',
      bg: 'bg-accent/10',
      border: 'border-accent/30'
    },
    { 
      ico: Tag, 
      name: 'SLOGAN', 
      spec: 'Máx. 8 palabras', 
      desc: 'Frase memorable. Que se pueda poner en una camiseta o en la bio de Instagram.', 
      key: 'Regla: tiene que funcionar sin contexto adicional.',
      color: 'text-amber-700',
      bg: 'bg-amber-50',
      border: 'border-amber-200'
    }
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1 text-center">Output — Propuesta de valor</p>
        
        <h2 className="font-heading text-4xl md:text-5xl font-800 mb-12 text-center fade-up fade-up-2">
           TU PROPUESTA EN <span className="text-primary truncate uppercase">3 FORMATOS.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch fade-up fade-up-3">
          {formats.map((f, i) => {
            const Icon = f.ico;
            return (
              <BentoCard key={i} className={`flex flex-col gap-5 p-8 border ${f.bg} ${f.border} shadow-lg shadow-black/5 hover:scale-[1.02] transition-transform`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm ${f.color}`}>
                   <Icon className="w-7 h-7" />
                </div>
                
                <div>
                   <h3 className={`font-heading text-base md:text-lg font-900 uppercase tracking-widest ${f.color} mb-1`}>{f.name}</h3>
                   <span className="font-mono text-[9px] text-muted-foreground/60 tracking-[2px] uppercase font-bold">{f.spec}</span>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed font-medium flex-1">
                  {f.desc}
                </p>

                <div className={`pt-5 border-t border-border/50 text-xs font-bold italic leading-tight ${f.color} opacity-80`}>
                  {f.key}
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
      <SlideNumber current={15} total={total || 24} />
    </SlideShell>
  );
};

export default Slide15ThreeFormats;
