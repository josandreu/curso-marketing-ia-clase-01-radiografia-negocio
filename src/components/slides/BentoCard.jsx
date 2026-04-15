export default function BentoCard({ children, className = "", accent = false }) {
  return (
    <div className={`rounded-2xl p-5 transition-all duration-300 
      ${accent 
        ? 'bg-primary/10 border border-primary/20 hover:bg-primary/15' 
        : 'bg-white border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
      } ${className}`}
    >
      {children}
    </div>
  );
}