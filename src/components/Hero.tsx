import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} src={`${import.meta.env.BASE_URL}hero.mp4`} autoPlay muted loop playsInline />
      {/* Overlays — opacity reduced by 70% */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.13)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.17) 0%, transparent 22%, transparent 55%, rgba(0,0,0,0.25) 100%)' }} />
      <div style={{ position: 'absolute', top: '-14%', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '720px', background: 'radial-gradient(ellipse at 50% 30%, rgba(180,83,9,0.05) 0%, transparent 68%)', pointerEvents: 'none' }} />

      {/* Bottom-anchored content */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 10, padding: '0 48px 48px', display: 'flex', flexDirection: 'column' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15, ease: 'easeOut' }}
          style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.95rem, 2.15vw, 1.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
        >
          <span style={{ display: 'block', color: '#fff', fontWeight: 400, whiteSpace: 'nowrap' }}>Step Through. Work Smarter.</span>
          <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontWeight: 300, whiteSpace: 'nowrap' }}>Cross the threshold into AI-driven efficiency.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          style={{ transformOrigin: 'left', height: '1px', width: '100%', background: 'rgba(255,255,255,0.22)', margin: '28px 0 22px' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '48px', flexWrap: 'wrap' }}
        >
          <p style={{ margin: 0, maxWidth: '260px', fontSize: '9px', fontWeight: 400, letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.7, color: 'rgba(255,255,255,0.6)', fontFamily: "'Inter', sans-serif", textShadow: '0 1px 16px rgba(0,0,0,0.4)' }}>
            A system that learns, adapts, and accelerates your success.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', fontFamily: "'Inter', sans-serif", textShadow: '0 1px 16px rgba(0,0,0,0.4)' }}>
              Step into the future of automation. Our AI-driven platform optimizes workflows, predicts outcomes, and accelerates decision-making—effortlessly.
            </p>
            <p style={{ margin: 0, fontSize: '11px', fontWeight: 300, lineHeight: 1.65, color: 'rgba(255,255,255,0.72)', fontFamily: "'Inter', sans-serif", textShadow: '0 1px 16px rgba(0,0,0,0.4)' }}>
              AI that doesn't just assist—it anticipates, learns, and executes with precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
