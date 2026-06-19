'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  { label: 'Logiciels & Services IT', href: '/services#it', icon: '💻' },
  { label: 'Marketing & Communication', href: '/services#marketing', icon: '📣' },
  { label: 'Construction & Environnement', href: '/services#construction', icon: '🏗️' },
  { label: 'Chimie & Biotechnologies', href: '/services#chimie', icon: '🧪' },
  { label: 'Électronique & Mécanique', href: '/services#electronique', icon: '⚙️' },
]

const nav = [
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Réalisations', href: '/realisations', hasDropdown: false },
  { label: 'Équipe', href: '/equipe', hasDropdown: false },
  { label: 'À propos', href: '/a-propos', hasDropdown: false },
  { label: 'Recrutement', href: '/recrutement', hasDropdown: false },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'backdrop-blur-xl border-b border-black/[0.07] py-3'
            : 'py-5'
        )}
        style={{ background: scrolled ? 'rgba(245,241,236,0.96)' : 'rgba(245,241,236,0)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-base shrink-0 transition-shadow duration-300"
              style={{
                background: 'linear-gradient(145deg, #B32C25, #8C2019)',
                boxShadow: '0 2px 12px rgba(179,44,37,0.35)',
              }}
            >
              Υ
            </div>
            <span className="font-black text-[18px] tracking-[-0.05em] uppercase select-none">
              <span style={{ color: '#B32C25' }}>UPS</span><span style={{ color: '#DC6F6C' }}>ILON</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                      dropdownOpen
                        ? 'text-[#1C1418] bg-black/[0.06]'
                        : 'text-[rgba(28,20,24,0.62)] hover:text-[#1C1418] hover:bg-black/[0.05]'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={cn('transition-transform duration-200', dropdownOpen && 'rotate-180')}
                    />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 rounded-2xl p-2"
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(28,20,24,0.09)',
                          boxShadow: '0 8px 40px rgba(28,20,24,0.14)',
                        }}
                      >
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-black/[0.04] transition-colors group"
                          >
                            <span className="text-xl w-8 text-center">{s.icon}</span>
                            <span className="text-sm font-medium text-[rgba(28,20,24,0.72)] group-hover:text-[#1C1418] transition-colors">
                              {s.label}
                            </span>
                          </Link>
                        ))}
                        <div className="mx-4 my-2 h-px bg-black/[0.07]" />
                        <Link
                          href="/services"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-black/[0.04] transition-colors group"
                        >
                          <span className="text-sm font-semibold text-[#B32C25]">Voir tous les services</span>
                          <ArrowRight size={14} className="text-[#B32C25] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-[#1C1418] bg-black/[0.06]'
                      : 'text-[rgba(28,20,24,0.62)] hover:text-[#1C1418] hover:bg-black/[0.05]'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className="btn-red text-sm py-2.5 px-5">
              Demander un devis
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[rgba(28,20,24,0.62)] hover:text-[#1C1418] hover:bg-black/[0.05] transition-colors"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10 overflow-y-auto"
            style={{ background: '#F5F1EC' }}
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-xl font-semibold text-[rgba(28,20,24,0.75)] hover:text-[#1C1418] border-b border-black/[0.08] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto pt-8"
            >
              <Link href="/contact" className="btn-red w-full justify-center text-base py-4">
                Demander un devis
                <ArrowRight size={18} />
              </Link>
              <div className="mt-6 flex items-center gap-4 text-sm text-[rgba(28,20,24,0.45)]">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1418] transition-colors">LinkedIn</a>
                <span>·</span>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1418] transition-colors">Twitter</a>
                <span>·</span>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1C1418] transition-colors">Instagram</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
