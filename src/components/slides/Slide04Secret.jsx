import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const Slide04Secret = ({ total }) => {
  return (
    <SlideShell variant="accent" className="flex flex-col justify-center items-center text-center px-8 md:px-16 overflow-hidden">
      {/* Decorative noise/grain over accent */}
      <div className="absolute inset-0 noise-bg opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 font-body">
        <div className="inline-block mb-10 fade-up fade-up-1">
          <div className="h-0.5 w-12 bg-white/40 mx-auto" />
        </div>

        <h2 className="font-heading font-900 leading-[0.9] tracking-tighter fade-up fade-up-2">
          <span className="block text-6xl md:text-8xl lg:text-9xl mb-4">LA MISMA IA.</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-white/90">RESULTADO INCOMPARABLE.</span>
        </h2>
        
        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/10 fade-up fade-up-3">
            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
              Hoy construimos <span className="font-bold underline decoration-white/30 underline-offset-8">ESE contexto</span> para tu negocio.<br/>
              Y a partir de aquí, cada IA produce resultados <span className="italic font-bold">específicos.</span>
            </p>
        </div>
      </div>
      <SlideNumber current={4} total={total || 24} />
    </SlideShell>
  );
};

export default Slide04Secret;
