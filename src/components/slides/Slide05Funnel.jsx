import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { motion } from 'framer-motion';

const Slide05Funnel = ({ total }) => {
  const funnelSteps = [
    { name: 'Atención', hint: '¿Cómo me encuentran?', color: 'bg-accent/40', text: 'text-accent-foreground', width: 'w-full' },
    { name: 'Interés', hint: '¿Por qué seguirme?', color: 'bg-accent/30', text: 'text-accent-foreground', width: 'w-[87%]' },
    { name: 'Consideración', hint: '¿Eres tú la solución?', color: 'bg-primary/20', text: 'text-primary', width: 'w-[74%]' },
    { name: 'Conversión', hint: '¿Compran?', color: 'bg-primary/30', text: 'text-primary', width: 'w-[61%]' },
    { name: 'Fidelización', hint: '¿Vuelven?', color: 'bg-primary/40', text: 'text-primary', width: 'w-[48%]' },
  ];

  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-16 items-center">
        
        {/* Left: Funnel Visual */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-[2px]"
        >
          {funnelSteps.map((step, i) => (
            <div 
              key={i}
              className={`flex items-center justify-center p-[16px_20px] rounded-[8px] border border-border/50 ${step.color} ${step.width} shadow-sm transition-transform hover:scale-[1.02] cursor-default`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)' }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`text-sm md:text-base font-900 tracking-[0.5px] uppercase ${step.text}`}>{step.name}</div>
                <div className="text-xs font-medium text-muted-foreground mt-[1px]">{step.hint}</div>
              </div>
            </div>
          ))}
          <div className="mt-8 text-sm font-mono font-bold text-muted-foreground uppercase tracking-widest bg-muted px-6 py-3 rounded-full border border-border/50">
             Ventas & Retención
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="flex flex-col">
          <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Contexto mínimo</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.07] mb-[24px] fade-up fade-up-2">
            EL FUNNEL ES TU MAPA.<br/>
            <span className="text-muted-foreground/40 font-300 text-[0.7em]">No te pierdas.</span>
          </h2>

          <div className="space-y-6 fade-up fade-up-3">
             <BentoCard accent className="border-l-4 border-l-primary/40 p-8">
                <p className="text-xl font-bold text-foreground mb-6"><strong>Misma energía. Mejores resultados.</strong></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                   <div className="text-base text-muted-foreground leading-relaxed">
                      <span className="text-destructive font-bold uppercase text-xs tracking-wider mb-2 block">❌ Ruido</span>
                      Publicar 5 veces al día sin estrategia ni funnel.
                   </div>
                   <div className="text-base text-foreground leading-relaxed">
                      <span className="text-primary font-bold uppercase text-xs tracking-wider mb-2 block">✅ Resultados</span>
                      Funnel claro + 2 posts semanales estratégicos.
                   </div>
                </div>
             </BentoCard>

             <div className="bg-muted/30 p-8 rounded-2xl border border-border/50">
                <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
                  La diferencia no es la cantidad. Es saber <span className="text-primary font-bold italic tracking-tight underline underline-offset-4 decoration-primary/20">en qué fase del funnel</span> está cada contenido.
                </p>
             </div>
          </div>
        </div>
      </div>
      <SlideNumber current={5} total={total || 24} />
    </SlideShell>
  );
};

export default Slide05Funnel;
