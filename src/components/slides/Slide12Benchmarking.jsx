import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const Slide12Benchmarking = ({ total }) => {
  const rows = [
    { name: 'NutriElite.es', audience: 'Atletas de alto rendimiento', value: 'Planes para profesionales', channel: 'YouTube + Instagram', gap: 'No habla al runner popular' },
    { name: 'DietaFácil', audience: 'Cualquiera que quiera adelgazar', value: 'Pierde peso sin hambre', channel: 'Facebook Ads', gap: 'Sin contexto deportivo. Genérico.' },
    { name: 'NutriCoach App', audience: 'Millennial urbano', value: 'Seguimiento automático', channel: 'App Store + TikTok', gap: 'Sin consultoría humana.' },
    { name: 'TU HUECO', audience: 'Corredores populares 30-50', value: 'Nutrición para runners no élite', channel: 'LinkedIn + Strava', gap: 'Nadie habla su lenguaje real.', highlight: true },
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <p className="font-body text-base tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1 text-center">Output — Análisis de competencia</p>
        
        <h2 className="font-heading text-4xl md:text-5xl font-800 mb-10 text-center fade-up fade-up-2">
          TABLA DE <span className="text-primary">BENCHMARKING.</span>
        </h2>

        <div className="bg-white border border-border/60 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.04)] fade-up fade-up-3">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5 border-b border-border/50">
                  <th className="p-8 font-heading text-xs font-900 uppercase tracking-widest text-primary/60">Competidor</th>
                  <th className="p-8 font-heading text-xs font-900 uppercase tracking-widest text-primary/60">Público</th>
                  <th className="p-8 font-heading text-xs font-900 uppercase tracking-widest text-primary/60">Propuesta</th>
                  <th className="p-8 font-heading text-xs font-900 uppercase tracking-widest text-primary/60">Canal</th>
                  <th className="p-8 font-heading text-xs font-900 uppercase tracking-widest text-primary/60">Oportunidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {rows.map((row, i) => (
                  <tr 
                    key={i} 
                    className={`${row.highlight ? 'bg-primary/10 font-bold' : 'hover:bg-muted/30'} transition-colors`}
                  >
                    <td className={`p-8 text-base font-bold ${row.highlight ? 'text-primary' : 'text-foreground/80'}`}>
                       <div className="flex items-center gap-3">
                          {row.highlight && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                          {row.name}
                       </div>
                    </td>
                    <td className="p-8 text-base text-muted-foreground">{row.audience}</td>
                    <td className="p-8 text-base text-muted-foreground">{row.value}</td>
                    <td className="p-8 text-base text-muted-foreground">{row.channel}</td>
                    <td className={`p-8 text-base ${row.highlight ? 'text-primary' : 'text-foreground/70 italic'}`}>
                        {row.gap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-12 text-center font-body text-base text-muted-foreground italic fade-up fade-up-4">
           "Donde todos hacen lo mismo, hay una oportunidad de diferenciación."
        </p>
      </div>
      <SlideNumber current={12} total={total || 24} />
    </SlideShell>
  );
};

export default Slide12Benchmarking;
