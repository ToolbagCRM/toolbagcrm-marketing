'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 px-4 bg-gray-950 overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(29,78,216,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14 text-white">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            ⚡ Built for the field
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Run Your Business{' '}
            <span className="text-orange-400">From Anywhere</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Manage your crew, dispatch jobs, and get paid — all from one platform, on any device, anywhere your work takes you.
          </p>
        </div>

        {/* Video container with animated glow border */}
        <div
          ref={wrapperRef}
          className="relative"
          style={{
            /* Border glow via box-shadow, animated in when visible */
            borderRadius: '1rem',
            padding: '3px',
            background: isVisible
              ? 'linear-gradient(135deg, rgba(251,146,60,0.8) 0%, rgba(29,78,216,0.7) 50%, rgba(251,146,60,0.8) 100%)'
              : 'transparent',
            transition: 'background 1s ease-out',
            animation: isVisible ? 'borderGradientShift 4s ease-in-out infinite' : 'none',
          }}
        >
          {/* Outer glow ring (blur layer behind) */}
          <div
            className="absolute -inset-[6px] rounded-2xl pointer-events-none transition-opacity duration-1000"
            style={{
              background:
                'linear-gradient(135deg, rgba(251,146,60,0.5) 0%, rgba(29,78,216,0.4) 50%, rgba(251,146,60,0.5) 100%)',
              filter: 'blur(12px)',
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? 'glowPulse 4s ease-in-out infinite' : 'none',
              borderRadius: '1rem',
            }}
          />

          {/* Video wrapper */}
          <div className="relative rounded-[0.875rem] overflow-hidden">
            <video
              className="w-full block"
              autoPlay
              loop
              muted
              playsInline
              style={{ opacity: 0.78, display: 'block' }}
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Radial vignette overlay — fades in on scroll */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                background:
                  'radial-gradient(ellipse at center, transparent 38%, rgba(251,146,60,0.18) 65%, rgba(15,23,42,0.55) 100%)',
                animation: isVisible ? 'vignettePulse 4s ease-in-out infinite' : 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframe definitions via a style tag */}
      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.7;
            filter: blur(12px);
          }
          50% {
            opacity: 1;
            filter: blur(20px);
          }
        }
        @keyframes borderGradientShift {
          0%, 100% {
            background: linear-gradient(135deg, rgba(251,146,60,0.8) 0%, rgba(29,78,216,0.7) 50%, rgba(251,146,60,0.8) 100%);
          }
          50% {
            background: linear-gradient(135deg, rgba(29,78,216,0.8) 0%, rgba(251,146,60,0.9) 50%, rgba(29,78,216,0.8) 100%);
          }
        }
        @keyframes vignettePulse {
          0%, 100% {
            opacity: 0.85;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
