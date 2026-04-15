import SlideShell from './SlideShell';
import SlideNumber from './SlideNumber';
import BentoCard from './BentoCard';

const Slide09EmpathyResult = ({ total }) => {
  const quadrants = [
    { 
      id: 'ef1', 
      label: '🧠 Piensa & Siente', 
      items: [
        '“Entreno mucho pero mi marca no baja, sospecho que es la dieta”',
        'Miedo: pagar una consulta y que me den un PDF genérico de ensaladas',
        'Frustración: los nutricionistas clásicos no entienden mi deporte'
      ],
      color: 'text-primary',
      bg: 'bg-primary/5',
      border: 'border-primary/20',
      icon: '🧠'
    },
    { 
      id: 'ef2', 
      label: '👀 Ve', 
      items: [
        'Anuncios de “dieta para adelgazar” que no cuadran con mi entreno',
        'Amigos del club que toman suplementos sin saber muy bien por qué',
        'Cuentas de atletas PRO con ritmos inalcanzables'
      ],
      color: 'text-accent-foreground',
      bg: 'bg-accent/10',
      border: 'border-accent/30',
      icon: '👀'
    },
    { 
      id: 'ef3', 
      label: '👂 Oye', 
      items: [
        '“Come pasta blanca la noche antes y ya vas bien” (error común)',
        '“Para correr no hace falta dietista, solo entrenar más fuerte”',
        'Podcasts de salud que dan consejos contradictorios'
      ],
      color: 'text-amber-800',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: '👂'
    },
    { 
      id: 'ef4', 
      label: '🏃 Dice & Hace', 
      items: [
        'Busca en Google “nutrición deportiva para maratón”',
        'Compra geles en Amazon por el sabor, no por la composición',
        'Si tiene una molestia, prefiere comprar zapas nuevas que ir al nutricionista'
      ],
      color: 'text-emerald-800',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: '🏃'
    }
  ];

  return (
    <SlideShell className="flex flex-col justify-center px-8 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 font-body">
        <h2 className="font-heading text-2xl md:text-3xl font-800 text-center mb-1 fade-up fade-up-1 text-foreground/80">
          MAPA DE EMPATÍA — <span className="text-primary truncate">RESULTADO</span>
        </h2>
        
        <p className="text-center text-sm text-muted-foreground font-medium mb-10 fade-up fade-up-1">
          Ejemplo: Nutricionista clínica especializada en corredores populares · Madrid
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 mb-10 fade-up fade-up-2">
          {quadrants.map((q, i) => (
            <BentoCard 
              key={i} 
              className={`flex flex-col gap-4 border ${q.bg} ${q.border} shadow-sm group hover:scale-[1.01] transition-transform`}
            >
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white shadow-sm text-lg">
                    {q.icon}
                 </div>
                 <p className={`font-heading text-xs font-900 uppercase tracking-widest ${q.color}`}>
                   {q.label}
                 </p>
              </div>
              <ul className="space-y-2">
                {q.items.map((item, j) => (
                  <li key={j} className="flex gap-2">
                     <span className={`text-[10px] mt-1 opacity-40 ${q.color}`}>●</span>
                     <p className="text-[13px] text-foreground leading-[1.4]">{item}</p>
                  </li>
                ))}
              </ul>
            </BentoCard>
          ))}
        </div>

        <div className="fade-up fade-up-3">
          <BentoCard accent className="bg-amber-100/30 border-2 border-amber-200/50 flex flex-col md:flex-row gap-4 items-center p-6">
             <div className="flex-shrink-0 bg-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm">
                <span className="text-2xl">🗣️</span>
             </div>
             <div>
                <p className="font-mono text-[10px] uppercase font-bold text-amber-900/60 mb-1 tracking-widest">Lenguaje del cliente (Lo que apunta tu IA)</p>
                <p className="text-[15px] font-bold text-amber-900 leading-[1.6] italic">
                   “Entreno 4 días y como lo que puedo. Sé que ahí está el problema pero no encuentro un nutricionista que entienda cómo funciona el cuerpo de un runner de verdad.”
                </p>
             </div>
          </BentoCard>
        </div>
      </div>
      <SlideNumber current={9} total={total || 24} />
    </SlideShell>
  );
};

export default Slide09EmpathyResult;
