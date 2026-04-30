import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import { motion } from 'framer-motion';

const Slide14ValuePropIntro = ({ total }) => {
  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-20 items-center font-body">
        <div className="flex-1">
          <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 4 — Herramienta 3</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-800 leading-[1.07] mb-8 fade-up fade-up-2">
            ¿POR QUÉ<br/>
            <span className="text-primary truncate uppercase">ELEGIRTE<br/>A TI?</span>
          </h2>

          <p className="text-2xl text-muted-foreground leading-relaxed font-medium mb-12 fade-up fade-up-3">
             Tienes el proyecto definido, el cliente investigado y la competencia mapeada. Ahora viene lo importante.
          </p>

          <div className="space-y-5 fade-up fade-up-4">
            <div className="flex items-center gap-6 py-5 px-8 bg-muted/30 rounded-2xl border border-border/50">
               <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-900 text-primary text-xl">1</div>
               <p className="text-lg font-medium text-foreground/80">Input: Mapa de empatía + Benchmarking</p>
            </div>
            <div className="flex items-center gap-6 py-5 px-8 bg-muted/30 rounded-2xl border border-border/50">
               <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-900 text-primary text-xl">2</div>
               <p className="text-lg font-medium text-foreground/80">Proceso: ChatGPT como Copywriter Estratégico</p>
            </div>
            <div className="flex items-center gap-6 py-5 px-8 bg-primary/5 rounded-2xl border border-primary/20">
               <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center font-900 text-primary text-xl">3</div>
               <p className="text-lg font-900 text-primary italic">Output: Propuesta de valor diferencial</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 relative flex items-center justify-center p-10"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <svg viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[320px] relative z-10">
            <polygon points="130,20 240,100 200,240 60,240 20,100" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" fill="hsla(var(--primary) / 0.03)"/>
            <polygon points="130,50 210,110 180,210 80,210 50,110" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" fill="hsla(var(--accent) / 0.02)"/>
            <polygon points="130,80 180,120 160,180 100,180 80,120" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsla(var(--primary) / 0.05)"/>
            <circle cx="130" cy="130" r="14" fill="hsl(var(--primary))" />
            <circle cx="130" cy="130" r="8" fill="white" fillOpacity="0.5" />
            <line x1="130" y1="20" x2="130" y2="240" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
            <line x1="20" y1="100" x2="240" y2="100" stroke="hsl(var(--primary))" strokeWidth="0.5" strokeOpacity="0.1" />
          </svg>
        </motion.div>
      </div>
      <SlideNumber current={14} total={total || 24} />
    </SlideShell>
  );
};

export default Slide14ValuePropIntro;
