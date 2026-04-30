import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const Slide01Cover = ({ total }) => {
  return (
    <SlideShell className="grid-bg noise-bg flex items-center justify-center">
      <div className="relative z-10 px-8 md:px-16 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Decorative elements from template */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <p className="font-body text-base tracking-[0.3em] uppercase text-muted-foreground mb-8 fade-up fade-up-1">
          Módulo 1 — Estrategia, Marca y Storytelling
        </p>

        <h1 className="font-heading font-900 leading-[0.95]">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-primary fade-up fade-up-2">
            RADIOGRAFÍA
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-800 mt-4 fade-up fade-up-3">
            DE TU NEGOCIO
          </span>
          <span className="block text-2xl md:text-3xl font-700 text-muted-foreground mt-2 fade-up fade-up-4">
            Brief, Cliente y Propuesta de Valor
          </span>
        </h1>

        <div className="mt-12 fade-up fade-up-5 flex flex-col items-center">
          <div className="h-px w-16 bg-primary/40 mb-4" />
          <p className="font-body text-base md:text-lg text-muted-foreground tracking-wide">
            Sesión 1 — La base de todo.
          </p>
        </div>

        <div className="flex gap-10 mt-12 fade-up fade-up-6 flex-wrap justify-center font-body">
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[2px] text-primary uppercase font-bold mb-1">Duración</span>
            <span className="text-lg font-medium text-foreground">2h 35 min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[2px] text-primary uppercase font-bold mb-1">Formato</span>
            <span className="text-lg font-medium text-foreground">Online en directo</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xs tracking-[2px] text-primary uppercase font-bold mb-1">Sesión</span>
            <span className="text-lg font-medium text-foreground">1 de 8</span>
          </div>
        </div>

        <div className="mt-10 bg-primary/5 border border-primary/10 rounded-2xl px-8 py-4 fade-up fade-up-6">
           <p className="text-lg text-foreground font-medium leading-relaxed">
            <span className="text-primary font-bold">Entregable:</span> Brief del proyecto real (1 pág, 8 secciones) + propuesta de valor en 3 formatos.
           </p>
        </div>
      </div>
      <SlideNumber current={1} total={total || 24} />
    </SlideShell>
  );
};

export default Slide01Cover;
