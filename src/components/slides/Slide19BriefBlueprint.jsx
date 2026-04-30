import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide19BriefBlueprint = ({ total }) => {
  const items = [
    { n: '01', name: 'PROYECTO', desc: 'Nombre de la empresa, marca o proyecto' },
    { n: '02', name: 'PRODUCTO', desc: 'Qué vendes, en 1-2 frases concretas' },
    { n: '03', name: 'CLIENTE IDEAL', desc: 'Mapa de empatía: quién es, qué le duele' },
    { n: '04', name: 'COMPETENCIA', desc: 'Benchmarking: patrón + hueco de mercado' },
    { n: '05', name: 'PROPUESTA VALOR', desc: 'Elevator pitch · Tweet · Slogan', highlight: true },
    { n: '06', name: 'FUNNEL ACTUAL', desc: 'Cómo llegan los clientes hoy' },
    { n: '07', name: 'OBJETIVO 90D', desc: 'Resultado medible y concreto' },
    { n: '08', name: 'MÉTRICA CLAVE', desc: 'El número que seguirás para validar' }
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Sprint final</p>
        
        <h2 className="font-heading text-3xl md:text-5xl font-800 mb-2 leading-tight fade-up fade-up-2">
          TU BRIEF ESTRATÉGICO.
        </h2>
        <p className="text-2xl font-bold text-primary italic mb-12 fade-up fade-up-2 tracking-tight">
           (Ensamblado en 1 página.)
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 fade-up fade-up-3">
          {items.map((item, i) => (
            <BentoCard 
              key={i} 
              accent={item.highlight}
              className={`p-6 flex flex-col gap-3 border shadow-sm transition-transform hover:scale-[1.02] cursor-default
              ${item.highlight ? 'border-primary/40 ring-4 ring-primary/5' : 'border-border/60'}`}
            >
              <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-1">
                 <span className="font-mono text-xs text-muted-foreground/40 font-bold uppercase tracking-widest">{item.n}</span>
                 {item.highlight && <div className="w-2 h-2 rounded-full bg-primary" />}
              </div>
              <h3 className={`font-heading text-sm font-900 uppercase tracking-widest leading-none ${item.highlight ? 'text-primary' : 'text-foreground/70'}`}>
                {item.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                {item.desc}
              </p>
            </BentoCard>
          ))}
        </div>

        <div className="mt-12 fade-up fade-up-4">
           <BentoCard accent className="bg-primary/5 border-2 border-primary/10 text-center py-6 px-10">
              <p className="text-lg font-bold text-primary italic tracking-tight leading-relaxed">
                 "Este brief es el INPUT de todas las sesiones siguientes. Sin él, cada IA produce resultados genéricos."
              </p>
           </BentoCard>
        </div>
      </div>
      <SlideNumber current={19} total={total || 24} />
    </SlideShell>
  );
};

export default Slide19BriefBlueprint;
