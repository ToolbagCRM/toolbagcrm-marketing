'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '70vh' }}
    >
      {/* ── Full-bleed background video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{ opacity: 0.62 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Base dark overlay for text readability ── */}
      <div className="absolute inset-0 bg-gray-950/50" />

      {/* ── Animated radial gradient at section edges (scroll-triggered) ── */}
      {/* Top-left glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-1000"
        style={{
          inset: 0,
          opacity: isVisible ? 1 : 0,
          background: [
            'radial-gradient(ellipse 55% 45% at 0% 0%, rgba(251,146,60,0.45) 0%, transparent 70%)',
            'radial-gradient(ellipse 55% 45% at 100% 100%, rgba(29,78,216,0.45) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 40% at 100% 0%, rgba(251,146,60,0.25) 0%, transparent 60%)',
            'radial-gradient(ellipse 40% 40% at 0% 100%, rgba(29,78,216,0.25) 0%, transparent 60%)',
          ].join(', '),
          animation: isVisible ? 'edgeGlowPulse 5s ease-in-out infinite alternate' : 'none',
        }}
      />

      {/* ── Foreground content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32" style={{ minHeight: '70vh' }}>
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          ⚡ Built for the field
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 max-w-3xl"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.8)' }}
        >
          Everything you need.{' '}
          <span className="text-orange-400">One toolbox.</span>
        </h2>
        <p
          className="text-lg sm:text-xl text-white/80 max-w-xl mb-10"
          style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
        >
          CRM built for contractors who&apos;d rather be on the job than behind a desk.
        </p>
        <a
          href="#waitlist"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base shadow-lg shadow-orange-900/30"
        >
          Join the Waitlist
        </a>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes edgeGlowPulse {
          0% {
            opacity: 0.75;
            background:
              radial-gradient(ellipse 55% 45% at 0% 0%, rgba(251,146,60,0.45) 0%, transparent 70%),
              radial-gradient(ellipse 55% 45% at 100% 100%, rgba(29,78,216,0.45) 0%, transparent 70%),
              radial-gradient(ellipse 40% 40% at 100% 0%, rgba(251,146,60,0.25) 0%, transparent 60%),
              radial-gradient(ellipse 40% 40% at 0% 100%, rgba(29,78,216,0.25) 0%, transparent 60%);
          }
          100% {
            opacity: 1;
            background:
              radial-gradient(ellipse 65% 55% at 0% 0%, rgba(251,146,60,0.6) 0%, transparent 70%),
              radial-gradient(ellipse 65% 55% at 100% 100%, rgba(29,78,216,0.6) 0%, transparent 70%),
              radial-gradient(ellipse 50% 50% at 100% 0%, rgba(29,78,216,0.35) 0%, transparent 60%),
              radial-gradient(ellipse 50% 50% at 0% 100%, rgba(251,146,60,0.35) 0%, transparent 60%);
          }
        }
      `}</style>
    </section>
  );
}
