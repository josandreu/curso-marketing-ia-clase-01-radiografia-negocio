import SlideShell from './SlideShell';
import { motion } from 'framer-motion';

const Slide24Close = () => {
  return (
    <SlideShell className="flex flex-col justify-center items-center text-center px-8 md:px-16 overflow-hidden grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10 font-body">
        <h2 className="font-heading font-900 leading-[0.9] tracking-tighter text-foreground fade-up fade-up-1">
          <span className="block text-5xl md:text-7xl lg:text-8xl mb-6">SI NO SABES A</span>
          <span className="block text-5xl md:text-7xl lg:text-8xl text-primary italic">QUIÉN HABLAS...</span>
        </h2>
        
        <div className="h-px w-24 bg-border my-12 mx-auto fade-up fade-up-2 shadow-[0_0_10px_rgba(0,0,0,0.1)]" />

        <h2 className="font-heading font-900 leading-[0.9] tracking-tighter text-foreground fade-up fade-up-3">
          <span className="block text-4xl md:text-6xl lg:text-7xl mb-4">NO IMPORTA LO QUE</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-muted-foreground/30 truncate">DIGAS.</span>
        </h2>

        <div className="mt-20 fade-up fade-up-4 flex flex-col items-center">
          <div className="h-px w-12 bg-primary/20 mb-6" />
          <p className="font-mono text-[10px] tracking-[4px] text-muted-foreground uppercase font-bold">
            Marketing Inteligente con IA &nbsp;·&nbsp; Sesión 1 de 8 &nbsp;·&nbsp; Módulo 1
          </p>
        </div>
      </div>
    </SlideShell>
  );
};

export default Slide24Close;
