import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';
import { motion } from 'framer-motion';

const Slide20InverseValidation = ({ total }) => {
  const steps = [
    { n: '01', text: '¿Qué te convence de verdad?' },
    { n: '02', text: '¿Qué te genera dudas o desconfianza?' },
    { n: '03', text: '¿Qué le falta para que sacases la tarjeta?' },
    { n: '04', text: 'En 1 frase: ¿qué cambiarías para que sea irresistible?' }
  ];

  const chat = [
    { role: 'user', text: 'Actúa como un cliente escéptico que ha visto cientos de ofertas parecidas.', type: 'user' },
    { role: 'ai', text: 'De acuerdo. Dame la propuesta que quieres que evalúe.', type: 'ai' },
    { role: 'user', text: '[Pega tu elevator pitch aquí]', type: 'user' },
    { role: 'ai', text: '📌 Convence: la especificidad "corredor popular". <br><br>⚠️ Duda: ¿cómo sincronizo la dieta con mis series? <br><br>💡 Clave: mostrar un ejemplo de semana de carga.', type: 'highlight' }
  ];

  return (
    <SlideShell className="flex items-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-20 items-center font-body">
        <div className="flex-1">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 fade-up fade-up-1">Tip — Cierre</p>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 leading-[1.07] mb-8 fade-up fade-up-2">
            VALIDACIÓN<br/>
            <span className="text-primary truncate uppercase underline underline-offset-8 decoration-primary/20">INVERSA.</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 fade-up fade-up-3">
             El prompt para detectar las "banderas rojas" de tu mensaje antes de lanzarlo al mercado.
          </p>

          <div className="space-y-4 fade-up fade-up-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-x-2">
                 <span className="font-mono text-sm font-bold text-primary opacity-40">{step.n}</span>
                 <p className="text-base font-bold text-foreground/80 leading-snug">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3 max-w-[420px] w-full"
        >
          {chat.map((msg, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm border
              ${msg.type === 'user' ? 'bg-primary text-white border-primary/10 rounded-br-[4px] self-end max-w-[85%] font-medium' : ''}
              ${msg.type === 'ai' ? 'bg-white border-border/60 text-foreground/80 rounded-bl-[4px] self-start max-w-[85%]' : ''}
              ${msg.type === 'highlight' ? 'bg-accent/10 border-accent/30 text-accent-foreground rounded-bl-[4px] self-start max-w-[90%] font-bold' : ''}
              `}
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          ))}
          <div className="text-center mt-4">
             <span className="text-[10px] font-mono font-900 text-muted-foreground/30 uppercase tracking-widest">IA en modo Focus Group</span>
          </div>
        </motion.div>
      </div>
      <SlideNumber current={20} total={total || 24} />
    </SlideShell>
  );
};

export default Slide20InverseValidation;
