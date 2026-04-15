import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';

const Slide10Transition = ({ total }) => {
  return (
    <SlideShell className="flex flex-col justify-center items-center text-center px-8 md:px-16 overflow-hidden grid-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 font-body">
        <div className="inline-block mb-10 fade-up fade-up-1">
          <div className="h-0.5 w-16 bg-primary/30 mx-auto" />
        </div>

        <h2 className="font-heading font-900 leading-[1.1] tracking-tight text-foreground fade-up fade-up-2">
          <span className="block text-5xl md:text-6xl lg:text-7xl mb-4">YA LE CONOCES MEJOR</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-primary italic">QUE SU PROPIA MADRE.</span>
        </h2>
        
        <div className="mt-14 fade-up fade-up-3">
          <p className="text-xl md:text-2xl font-medium text-muted-foreground">
             Ahora veamos contra quién <br/>
             <span className="text-foreground font-bold underline decoration-primary/30 underline-offset-8">compite tu negocio.</span>
          </p>
        </div>
      </div>
      <SlideNumber current={10} total={total || 24} />
    </SlideShell>
  );
};

export default Slide10Transition;
