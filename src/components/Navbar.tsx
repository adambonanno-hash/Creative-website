import { motion } from 'framer-motion'

const leftLinks = ["Features", "Solutions", "How it works"]
const rightLinks = ["Pricing", "Resources", "Get started"]

const linkStyle: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 300,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  fontFamily: "'Inter', sans-serif",
  color: 'rgba(255,255,255,0.72)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  whiteSpace: 'nowrap',
}

function NavLink({ label }: { label: string }) {
  return (
    <a
      href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
      style={linkStyle}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#fff' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.72)' }}
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '44px',
        padding: '30px 40px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '44px' }}>
        {leftLinks.map((link) => <NavLink key={link} label={link} />)}
      </div>

      {/* Centered logo mark — white gateway */}
      <a href="#" aria-label="Dune" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="1" opacity="0.5" fill="none" />
          <rect x="8.1" y="6" width="2.3" height="12" rx="1.15" fill="#fff" />
          <rect x="13.6" y="6" width="2.3" height="12" rx="1.15" fill="#fff" />
        </svg>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: '44px' }}>
        {rightLinks.map((link) => <NavLink key={link} label={link} />)}
      </div>
    </motion.nav>
  )
}
