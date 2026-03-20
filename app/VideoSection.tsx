'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: '85vh' }}
    >
      {/* ── Full-bleed background video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{ opacity: 0.65 }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark readability overlay ── */}
      <div className="absolute inset-0 bg-gray-950/45" />

      {/* ── Top fade: blend from hero (gray-900) into video ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '22%',
          background: 'linear-gradient(to bottom, #111827 0%, transparent 100%)',
        }}
      />

      {/* ── Bottom fade: blend video into next section (white/gray-50) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '22%',
          background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)',
        }}
      />

      {/* ── Animated radial glow at section edges (scroll-triggered) ── */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          background: [
            'radial-gradient(ellipse 60% 50% at 0% 0%, rgba(251,146,60,0.5) 0%, transparent 65%)',
            'radial-gradient(ellipse 60% 50% at 100% 100%, rgba(29,78,216,0.5) 0%, transparent 65%)',
            'radial-gradient(ellipse 45% 45% at 100% 0%, rgba(29,78,216,0.3) 0%, transparent 60%)',
            'radial-gradient(ellipse 45% 45% at 0% 100%, rgba(251,146,60,0.3) 0%, transparent 60%)',
          ].join(', '),
          animation: isVisible ? 'edgeGlowPulse 5s ease-in-out infinite alternate' : 'none',
        }}
      />

      {/* ── Foreground content ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: '85vh', paddingTop: '8vh', paddingBottom: '8vh' }}
      >
        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          ⚡ Built for the field
        </div>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 max-w-3xl leading-tight"
          style={{ textShadow: '0 2px 24px rgba(0,0,0,0.7), 0 1px 6px rgba(0,0,0,0.9)' }}
        >
          Everything you need.{' '}
          <span className="text-orange-400">One toolbox.</span>
        </h2>
        <p
          className="text-lg sm:text-xl text-white/85 max-w-xl mb-10 leading-relaxed"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.8)' }}
        >
          CRM built for contractors who&apos;d rather be on the job than behind a desk.
        </p>
        <a
          href="#waitlist"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-lg transition-colors text-base shadow-xl shadow-black/40"
        >
          Join the Waitlist
        </a>
      </div>

      <style>{`
        @keyframes edgeGlowPulse {
          0% {
            opacity: 0.8;
            background:
              radial-gradient(ellipse 60% 50% at 0% 0%, rgba(251,146,60,0.5) 0%, transparent 65%),
              radial-gradient(ellipse 60% 50% at 100% 100%, rgba(29,78,216,0.5) 0%, transparent 65%),
              radial-gradient(ellipse 45% 45% at 100% 0%, rgba(29,78,216,0.3) 0%, transparent 60%),
              radial-gradient(ellipse 45% 45% at 0% 100%, rgba(251,146,60,0.3) 0%, transparent 60%);
          }
          100% {
            opacity: 1;
            background:
              radial-gradient(ellipse 70% 60% at 0% 0%, rgba(251,146,60,0.65) 0%, transparent 65%),
              radial-gradient(ellipse 70% 60% at 100% 100%, rgba(29,78,216,0.65) 0%, transparent 65%),
              radial-gradient(ellipse 55% 55% at 100% 0%, rgba(29,78,216,0.4) 0%, transparent 60%),
              radial-gradient(ellipse 55% 55% at 0% 100%, rgba(251,146,60,0.4) 0%, transparent 60%);
          }
        }
      `}</style>
    </section>
  );
}
