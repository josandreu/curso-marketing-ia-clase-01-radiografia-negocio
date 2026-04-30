import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import Slide01Cover from '../components/slides/Slide01Cover';
import Slide02InitialProblem from '../components/slides/Slide02InitialProblem';
import Slide03DemoSplit from '../components/slides/Slide03DemoSplit';
import Slide04Secret from '../components/slides/Slide04Secret';
import Slide05Funnel from '../components/slides/Slide05Funnel';
import Slide06Project from '../components/slides/Slide06Project';
import Slide07EmpathyIntro from '../components/slides/Slide07EmpathyIntro';
import Slide08EmpathyPrompt from '../components/slides/Slide08EmpathyPrompt';
import Slide09EmpathyResult from '../components/slides/Slide09EmpathyResult';
import Slide10Transition from '../components/slides/Slide10Transition';
import Slide11Perplexity from '../components/slides/Slide11Perplexity';
import Slide12Benchmarking from '../components/slides/Slide12Benchmarking';
import Slide13StrategicSynthesis from '../components/slides/Slide13StrategicSynthesis';
import Slide14ValuePropIntro from '../components/slides/Slide14ValuePropIntro';
import Slide15ThreeFormats from '../components/slides/Slide15ThreeFormats';
import Slide16ValuePropResult from '../components/slides/Slide16ValuePropResult';
import Slide17SprintTask from '../components/slides/Slide17SprintTask';
import Slide18GroupReview from '../components/slides/Slide18GroupReview';
import Slide19BriefBlueprint from '../components/slides/Slide19BriefBlueprint';
import Slide20InverseValidation from '../components/slides/Slide20InverseValidation';
import Slide21Recap from '../components/slides/Slide21Recap';
import Slide22Connection from '../components/slides/Slide22Connection';
import Slide23CTA from '../components/slides/Slide23CTA';
import Slide24Close from '../components/slides/Slide24Close';

const TOTAL = 24;

const slides = [
  Slide01Cover, Slide02InitialProblem, Slide03DemoSplit, Slide04Secret, Slide05Funnel,
  Slide06Project, Slide07EmpathyIntro, Slide08EmpathyPrompt, Slide09EmpathyResult, Slide10Transition,
  Slide11Perplexity, Slide12Benchmarking, Slide13StrategicSynthesis, Slide14ValuePropIntro,
  Slide15ThreeFormats, Slide16ValuePropResult, Slide17SprintTask, Slide18GroupReview,
  Slide19BriefBlueprint, Slide20InverseValidation, Slide21Recap, Slide22Connection,
  Slide23CTA, Slide24Close,
];

const slideTitles = [
  "Portada", "El Problema", "Demo Contexto", "El Secreto", "El Funnel",
  "Proyecto Real", "Mapa Empatía Intro", "Prompt Empatía", "Resultado Empatía", "Transición",
  "Perplexity vs ChatGPT", "Benchmarking", "Síntesis Estratégica", "Propuesta de Valor Intro",
  "Los 3 Formatos", "Resultado Propuesta", "Sprint de Trabajo", "Revisión Grupal",
  "El Brief", "Validación Inversa", "Recap", "Conexión Sesión 2",
  "Tareas CTA", "Cierre",
];

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const goNext = useCallback(() => {
    setCurrent(prev => Math.min(prev + 1, TOTAL - 1));
    setShowGrid(false);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(prev => Math.max(prev - 1, 0));
    setShowGrid(false);
  }, []);

  const goTo = useCallback((index) => {
    setCurrent(index);
    setShowGrid(false);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
      if (e.key === 'Escape') { setShowGrid(false); setIsFullscreen(false); }
      if (e.key === 'g') setShowGrid(prev => !prev);
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  const CurrentSlide = slides[current];

  if (showGrid) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] p-6 md:p-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-2xl font-800 text-foreground">Todas las diapositivas</h2>
          <button onClick={() => setShowGrid(false)} className="font-body text-sm text-primary font-medium hover:underline">
            ← Volver a la presentación
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {slides.map((Slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-105 hover:shadow-lg
                ${i === current ? 'border-primary shadow-lg shadow-primary/20' : 'border-border/50'}`}
            >
              <div className="w-full h-full transform scale-[0.25] origin-top-left" style={{ width: '400%', height: '400%' }}>
                <Slide />
              </div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2">
          {slideTitles.map((title, i) => (
            <p key={i} className="font-body text-[10px] text-muted-foreground text-center truncate px-2">
              {i + 1}. {title}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0a0a0a] overflow-hidden">
      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-[100vw] max-h-[100vh] aspect-video">
            <AnimatePresence mode="wait">
              <CurrentSlide key={current} />
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md flex items-center justify-center transition-all disabled:opacity-0 z-20 shadow-lg border border-white/10"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goNext}
          disabled={current === TOTAL - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md flex items-center justify-center transition-all disabled:opacity-0 z-20 shadow-lg border border-white/10"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Bottom bar */}
      <div className="h-12 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => setShowGrid(true)} className="text-white/40 hover:text-white/80 transition-colors">
            <Grid3X3 className="w-4 h-4" />
          </button>
          <span className="font-body text-xs text-white/40 truncate max-w-[200px]">
            {slideTitles[current]}
          </span>
        </div>

        {/* Progress bar */}
        <div className="flex-1 max-w-xs mx-6">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-300"
              style={{ width: `${((current + 1) / TOTAL) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-heading text-xs text-white/40 tabular-nums">
            {current + 1} / {TOTAL}
          </span>
          <button onClick={toggleFullscreen} className="text-white/40 hover:text-white/80 transition-colors">
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}