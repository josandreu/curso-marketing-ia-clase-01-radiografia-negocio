import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide07EmpathyIntro = ({ total }) => {
  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-20 items-center font-body">
        <div className="flex-1">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 2 — Herramienta 1</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-800 leading-[1.07] mb-8 fade-up fade-up-2">
            PIENSA COMO<br/>
            TU CLIENTE.<br/>
            <span className="text-muted-foreground/30 font-300">(No como tú.)</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-10 fade-up fade-up-3">
            Vamos a conocer a tu cliente ideal mejor de lo que él se conoce a sí mismo. Con ChatGPT como investigador de audiencias.
          </p>

          <div className="flex items-center gap-4 py-4 px-6 bg-primary/5 border border-primary/10 rounded-2xl fade-up fade-up-4 w-fit">
            <span className="text-2xl">🤖</span>
            <p className="text-sm font-bold text-foreground">
              Abrir <strong className="text-primary tracking-tight">ChatGPT</strong> — prompt en la siguiente slide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-[12px] w-full max-w-[480px] fade-up fade-up-3">
          <BentoCard className="aspect-square flex flex-col justify-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">🧠</div>
            <p className="font-heading text-sm font-800 text-primary uppercase tracking-widest leading-none">Piensa & Siente</p>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-border/40 rounded-full" />
               <div className="h-1.5 w-3/4 bg-border/40 rounded-full" />
            </div>
          </BentoCard>
          <BentoCard className="aspect-square flex flex-col justify-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-3xl">👀</div>
            <p className="font-heading text-sm font-800 text-accent uppercase tracking-widest leading-none">Ve</p>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-border/40 rounded-full" />
               <div className="h-1.5 w-3/4 bg-border/40 rounded-full" />
            </div>
          </BentoCard>
          <BentoCard className="aspect-square flex flex-col justify-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-3xl">👂</div>
            <p className="font-heading text-sm font-800 text-amber-600 uppercase tracking-widest leading-none">Oye</p>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-border/40 rounded-full" />
               <div className="h-1.5 w-3/4 bg-border/40 rounded-full" />
            </div>
          </BentoCard>
          <BentoCard className="aspect-square flex flex-col justify-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-3xl">🏃</div>
            <p className="font-heading text-sm font-800 text-emerald-600 uppercase tracking-widest leading-none">Dice & Hace</p>
            <div className="space-y-2">
               <div className="h-1.5 w-full bg-border/40 rounded-full" />
               <div className="h-1.5 w-3/4 bg-border/40 rounded-full" />
            </div>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={7} total={total || 24} />
    </SlideShell>
  );
};

export default Slide07EmpathyIntro;
