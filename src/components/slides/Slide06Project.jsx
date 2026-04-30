import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide06Project = ({ total }) => {
  const fields = [
    { label: 'Empresa / Marca / Proyecto', value: 'NutriRunners Madrid' },
    { label: 'Qué vendo o servicio', value: 'Planes nutrición deportiva' },
    { label: 'Público Objetivo', value: 'Runners populares 30-50 años' },
    { label: 'Problema que resuelvo', value: 'Falta de energía en carrera' },
    { label: 'Canal principal', value: 'Instagram / Clubes de Running' },
    { label: 'Objetivo de negocio (90d)', value: '20 altas mensuales nuevas', special: true },
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 1 — Tu caso de estudio</p>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 mb-6 leading-tight fade-up fade-up-2">
          DEFINE TU <span className="text-primary">PROYECTO REAL.</span>
        </h2>

        <p className="text-xl text-muted-foreground font-medium mb-10 fade-up fade-up-3 leading-relaxed">
          Todo lo que construyas en las 8 sesiones se aplica sobre <strong className="text-primary underline underline-offset-4 font-900">este único proyecto.</strong> Elige ahora.
        </p>

        <div className="bg-white border border-border/60 rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.06)] fade-up fade-up-4">
          <div className="bg-primary/[0.03] border-b border-border/50 px-10 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
               <div className="w-2.5 h-2.5 rounded-full bg-primary/40 animate-pulse" />
               <span className="font-mono text-xs tracking-[3px] text-primary/70 uppercase font-bold">Expediente del Proyecto — Módulo 1</span>
            </div>
            <div className="flex gap-2 font-mono text-xs text-muted-foreground/40">
               <span>ID: 2026-001</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {fields.map((field, i) => (
              <div 
                key={i} 
                className={`p-10 border-b border-r border-border/40 last:border-b-0 
                ${(i + 1) % 3 === 0 ? 'lg:border-r-0' : ''} 
                ${i >= 3 ? 'md:border-b-0' : ''}`}
              >
                <div className="font-mono text-[10px] tracking-[2px] text-primary uppercase font-bold mb-4 opacity-60">{field.label}</div>
                <div className={`text-lg md:text-xl font-bold min-h-[1.5em] pb-2 border-b border-dashed border-border/60 
                  ${field.special ? 'text-primary' : 'text-foreground/80'}`}>
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center font-body text-base text-muted-foreground italic fade-up fade-up-5">
           "Mejor decidir rápido que no decidir nunca. Si no tienes proyecto propio, usa el de un cliente."
        </p>
      </div>
      <SlideNumber current={6} total={total || 24} />
    </SlideShell>
  );
};

export default Slide06Project;
