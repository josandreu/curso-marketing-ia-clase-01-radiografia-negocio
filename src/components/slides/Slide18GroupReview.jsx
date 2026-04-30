import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Users2, MessageCircle } from 'lucide-react';

const Slide18GroupReview = ({ total }) => {
  const criteria = [
    { n: '01', title: '¿A QUIÉN VA DIRIGIDO?', sub: '¿Se entiende el perfil del cliente sin más contexto?', color: 'text-primary' },
    { n: '02', title: '¿QUÉ PROBLEMA RESUELVE?', sub: '¿Habla del dolor del cliente o de lo que hace la empresa?', color: 'text-accent-foreground' },
    { n: '03', title: '¿ES CREÍBLE?', sub: '¿Suena a soluciones innovadoras vacías o a algo real?', color: 'text-amber-600' }
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body text-center flex flex-col items-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Revisión grupal en vivo</p>
        
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-800 mb-4 leading-tight fade-up fade-up-2">
          3 VOLUNTARIOS LEEN SU PITCH.<br/>
          <span className="text-muted-foreground/30 font-300 text-[0.65em] uppercase tracking-tighter italic">El grupo evalúa en el chat.</span>
        </h2>

        <div className="flex items-center gap-4 mb-12 py-3 px-8 bg-muted rounded-full fade-up fade-up-3">
           <MessageCircle className="w-5 h-5 text-primary" />
           <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Chat activo</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10 fade-up fade-up-4">
          {criteria.map((item, i) => (
            <BentoCard key={i} className="flex flex-col items-center gap-6 py-16 px-10 hover:shadow-xl transition-all border border-border/40">
              <div className={`font-heading text-8xl font-900 leading-none opacity-20 ${item.color} mb-3 tracking-tighter`}>
                 {item.n}
              </div>
              <h3 className="font-heading text-base font-900 uppercase tracking-widest text-foreground leading-tight">
                 {item.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                 {item.sub}
              </p>
            </BentoCard>
          ))}
        </div>

        <div className="fade-up fade-up-5 max-w-3xl mx-auto">
           <p className="text-lg font-bold text-muted-foreground leading-relaxed italic border-t border-border/60 pt-10">
              "Esta frase sobra" · "Este verbo es más potente" · "El diferencial está al final — súbelo al principio."
           </p>
        </div>
      </div>
      <SlideNumber current={18} total={total || 24} />
    </SlideShell>
  );
};

export default Slide18GroupReview;
