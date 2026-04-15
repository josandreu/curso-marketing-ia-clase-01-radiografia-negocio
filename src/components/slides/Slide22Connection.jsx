import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { ArrowRight } from 'lucide-react';

const Slide22Connection = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body text-center flex flex-col items-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Próxima sesión</p>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 mb-12 leading-tight fade-up fade-up-2">
           DE AQUÍ A LA <span className="text-primary truncate uppercase">SESIÓN 2.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full mb-12 fade-up fade-up-3">
          {/* Session 1 */}
          <BentoCard accent className="flex-1 p-10 border-2 border-primary/20 shadow-xl shadow-primary/5 text-center">
             <span className="font-mono text-[10px] uppercase font-bold text-primary/60 mb-3 block tracking-widest">Sesión 1 — Hoy</span>
             <h3 className="font-heading text-2xl font-800 text-foreground mb-4">Brief Estratégico</h3>
             <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Cliente · Competencia<br/>Propuesta de valor
             </p>
          </BentoCard>

          {/* Connection */}
          <div className="flex flex-col items-center gap-2">
             <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ArrowRight className="w-6 h-6" />
             </div>
             <span className="font-mono text-[9px] uppercase font-bold text-muted-foreground tracking-widest">Input Directo</span>
          </div>

          {/* Session 2 */}
          <BentoCard className="flex-1 p-10 border border-border/60 bg-muted/20 text-center opacity-60">
             <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground/60 mb-3 block tracking-widest">Sesión 2 — Próxima</span>
             <h3 className="font-heading text-2xl font-800 text-foreground/70 mb-4">Voz de Marca</h3>
             <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Tono · Personalidad<br/>Cómo habla tu marca
             </p>
          </BentoCard>
        </div>

        <div className="fade-up fade-up-4 w-full max-w-2xl">
           <p className="text-[15px] font-medium text-muted-foreground leading-relaxed">
              El brief y especialmente el <span className="text-foreground font-bold italic tracking-tight underline underline-offset-4 decoration-primary/20">mapa de empatía</span> son el input directo para definir tu tono. Traed el brief completo y validado.
           </p>
        </div>
      </div>
      <SlideNumber current={22} total={total || 24} />
    </SlideShell>
  );
};

export default Slide22Connection;
