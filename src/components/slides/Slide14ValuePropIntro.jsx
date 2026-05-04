import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const Slide14ValuePropIntro = ({ total }) => {
  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr),minmax(0,1.05fr)] gap-12 lg:gap-16 items-start font-body">
        <div className="flex-1 min-w-0">
          <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Paso 4 — Herramienta 3</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.07] mb-6 fade-up fade-up-2">
            ¿POR QUÉ<br/>
            <span className="text-primary truncate uppercase">ELEGIRTE<br/>A TI?</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-8 fade-up fade-up-3">
             Tienes el proyecto definido, el cliente investigado y la competencia mapeada. Ahora viene lo importante.
          </p>

          <div className="space-y-3 fade-up fade-up-4">
            <div className="flex items-center gap-4 py-4 px-6 bg-muted/30 rounded-2xl border border-border/50">
               <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-900 text-primary text-lg shrink-0">1</div>
               <p className="text-base font-medium text-foreground/80">Input: Mapa de empatía + Benchmarking</p>
            </div>
            <div className="flex items-center gap-4 py-4 px-6 bg-muted/30 rounded-2xl border border-border/50">
               <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-900 text-primary text-lg shrink-0">2</div>
               <p className="text-base font-medium text-foreground/80">Proceso: ChatGPT como Copywriter Estratégico</p>
            </div>
            <div className="flex items-center gap-4 py-4 px-6 bg-primary/5 rounded-2xl border border-primary/20">
               <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-900 text-primary text-lg shrink-0">3</div>
               <p className="text-base font-900 text-primary italic">Output: Propuesta de valor diferencial</p>
            </div>
          </div>
        </div>

        <div className="fade-up fade-up-3 min-w-0 w-full">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-primary/80 mb-3 font-bold">
            Prompt — ChatGPT
          </p>
          <div className="bg-white border-2 border-primary/10 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
            <div className="bg-primary/5 px-6 py-4 border-b border-primary/10 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-amber-400/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
              <span className="font-mono text-xs text-primary/60 font-bold uppercase tracking-[0.2em]">
                Propuesta de valor (3 formatos)
              </span>
            </div>
            <div className="p-6 md:p-8 max-h-[min(58vh,560px)] overflow-y-auto font-mono text-[14px] md:text-[15px] leading-relaxed text-foreground/80 scrollbar-thin scrollbar-thumb-primary/10">
              <p className="font-bold text-foreground mb-3">
                Basándote en esta información sobre mi negocio y mi cliente ideal:
              </p>
              <ul className="space-y-2 mb-4">
                <li>
                  Mi negocio: <span className="text-primary font-bold">[pegar ficha del paso 1]</span>
                </li>
                <li>
                  Mi cliente ideal: <span className="text-primary font-bold">[pegar mapa de empatía del paso 2]</span>
                </li>
                <li>
                  Mi competencia: <span className="text-primary font-bold">[pegar análisis del paso 3]</span>
                </li>
              </ul>
              <p className="font-bold text-foreground mb-2">Genera mi propuesta de valor en 3 formatos:</p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>
                  <span className="font-bold text-foreground">ELEVATOR PITCH</span> (30 segundos, 3-4 frases): presenta el problema, la solución y el diferencial.
                </li>
                <li>
                  <span className="font-bold text-foreground">FORMATO TWEET</span> (máx. 280 caracteres): gancho directo para redes sociales.
                </li>
                <li>
                  <span className="font-bold text-foreground">SLOGAN</span> (máx. 8 palabras): frase memorable de marca.
                </li>
              </ol>
              <p className="text-primary/70 italic">
                Para cada formato, dame 2 opciones: una con tono profesional y otra con tono cercano/directo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <SlideNumber current={14} total={total || 24} />
    </SlideShell>
  );
};

export default Slide14ValuePropIntro;
