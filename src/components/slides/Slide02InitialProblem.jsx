import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide02InitialProblem = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Bloque 1 — Activación</p>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 mb-10 leading-tight fade-up fade-up-2">
          ¿QUÉ PROBLEMA RESUELVES?<br/>
          <span className="text-primary">(EN 10 SEGUNDOS)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 fade-up fade-up-3 opacity-60 grayscale-[50%]">
          <BentoCard className="flex items-center justify-center text-center py-10 relative">
             <span className="text-lg italic font-medium">"Somos una agencia de marketing..."</span>
             <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-destructive/40 -translate-y-1/2 -rotate-2" />
          </BentoCard>
          <BentoCard className="flex items-center justify-center text-center py-10 relative">
             <span className="text-lg italic font-medium">"Ofrecemos consultoría integral..."</span>
             <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-destructive/40 -translate-y-1/2 rotate-2" />
          </BentoCard>
          <BentoCard className="flex items-center justify-center text-center py-10 relative">
             <span className="text-lg italic font-medium">"Ayudamos a crecer..."</span>
             <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-destructive/40 -translate-y-1/2 -rotate-1" />
          </BentoCard>
        </div>

        <div className="w-full flex items-center gap-6 my-8 fade-up fade-up-4">
          <div className="h-px bg-border flex-1" />
          <span className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground font-bold">vs</span>
          <div className="h-px bg-border flex-1" />
        </div>

        <BentoCard accent className="mb-12 border-2 border-primary/30 fade-up fade-up-5">
          <div className="flex items-start gap-8 p-6">
            <p className="text-3xl font-bold text-foreground leading-relaxed">
              "Ayudo a nutricionistas de Madrid a conseguir <span className="text-primary italic">20 consultas/mes</span> sin depender de Instagram."
            </p>
          </div>
        </BentoCard>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 fade-up fade-up-6">
          <div className="col-span-1 flex flex-col items-center md:items-start">
             <span className="font-heading text-6xl font-900 text-primary leading-none">80%</span>
          </div>
          <div className="col-span-3">
            <p className="text-xl text-muted-foreground leading-relaxed">
              de los negocios publica contenido, crea redes e invierte en anuncios <br/>
              <strong className="text-foreground font-900 tracking-tight text-2xl uppercase">SIN TENER ESTA BASE.</strong>
            </p>
          </div>
        </div>
      </div>
      <SlideNumber current={2} total={total || 24} />
    </SlideShell>
  );
};

export default Slide02InitialProblem;
