import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { Share2, FolderOpen } from 'lucide-react';

const Slide23CTA = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body text-center flex flex-col items-center">
        <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Antes de la próxima sesión</p>
        
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 mb-12 leading-tight fade-up fade-up-2">
           DOS TAREAS. <span className="text-primary truncate uppercase">Sin excusas.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12 fade-up fade-up-3">
          {/* Task 1 */}
          <BentoCard accent className="p-10 border-2 border-primary/20 shadow-xl shadow-primary/5 flex flex-col items-center gap-6 group hover:scale-[1.02] transition-transform">
             <div className="flex items-center justify-between w-full border-b border-primary/10 pb-6 mb-2">
                <span className="font-heading text-6xl font-900 text-primary leading-none opacity-20 group-hover:opacity-40 transition-opacity">01</span>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                   <Share2 className="w-7 h-7" />
                </div>
             </div>
             <div>
                <h3 className="font-heading text-xl font-800 text-foreground mb-4">Valida tu brief.</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                   Enséñaselo a alguien externo — un cliente o un colega. Pregúntale: ¿se entiende? ¿comprarías? Apunta su reacción literal y ajústalo.
                </p>
             </div>
          </BentoCard>

          {/* Task 2 */}
          <BentoCard className="p-10 border border-border/60 bg-white flex flex-col items-center gap-6 group hover:scale-[1.02] transition-transform shadow-sm">
             <div className="flex items-center justify-between w-full border-b border-border/40 pb-6 mb-2">
                <span className="font-heading text-6xl font-900 text-muted-foreground leading-none opacity-10 group-hover:opacity-20 transition-opacity">02</span>
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform">
                   <FolderOpen className="w-7 h-7" />
                </div>
             </div>
             <div>
                <h3 className="font-heading text-xl font-800 text-foreground mb-4">Guarda el documento.</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                   El brief completo (8 secciones) en un doc accesible. Lo necesitarás en TODAS las sesiones siguientes como contexto inicial para cada IA.
                </p>
             </div>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={23} total={total || 24} />
    </SlideShell>
  );
};

export default Slide23CTA;
