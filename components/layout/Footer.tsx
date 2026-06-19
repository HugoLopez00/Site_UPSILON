import Link from 'next/link'
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'

const footerNav = {
  services: [
    { label: 'Logiciels & IT', href: '/services#it' },
    { label: 'Marketing & Communication', href: '/services#marketing' },
    { label: 'Construction & Environnement', href: '/services#construction' },
    { label: 'Chimie & Biotechnologies', href: '/services#chimie' },
    { label: 'Électronique & Mécanique', href: '/services#electronique' },
  ],
  upsilon: [
    { label: 'À propos', href: '/a-propos' },
    { label: 'Équipe', href: '/equipe' },
    { label: 'Réalisations', href: '/realisations' },
    { label: 'Recrutement', href: '/recrutement' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'CGU', href: '/cgu' },
  ],
}

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07070a]">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 w-fit group mb-6">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B32C25] to-[#8C2019] flex items-center justify-center text-white font-bold text-xl shadow-red-glow">
                Υ
              </div>
              <span className="font-bold text-xl tracking-tight text-[#f5f5f7]">UPSILON</span>
            </Link>
            <p className="text-sm text-[rgba(245,245,247,0.5)] leading-relaxed max-w-xs mb-8">
              Junior-Entreprise de l&apos;Université de Toulouse. Prestations d&apos;ingénierie et de conseil
              en technologie depuis 2011.
            </p>
            <div className="space-y-3">
              <a href="mailto:contact@upsilon-toulouse.fr" className="flex items-center gap-3 text-sm text-[rgba(245,245,247,0.5)] hover:text-[#B32C25] transition-colors group">
                <Mail size={14} className="text-[rgba(245,245,247,0.3)] group-hover:text-[#B32C25] transition-colors" />
                contact@upsilon-toulouse.fr
              </a>
              <a href="tel:+33561558393" className="flex items-center gap-3 text-sm text-[rgba(245,245,247,0.5)] hover:text-[#B32C25] transition-colors group">
                <Phone size={14} className="text-[rgba(245,245,247,0.3)] group-hover:text-[#B32C25] transition-colors" />
                +33 (0)5 61 55 83 93
              </a>
              <div className="flex items-start gap-3 text-sm text-[rgba(245,245,247,0.5)]">
                <MapPin size={14} className="text-[rgba(245,245,247,0.3)] mt-0.5 shrink-0" />
                <span>Bât. Louis Lareng, 118 Route de Narbonne<br />31062 Toulouse CEDEX 9</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[rgba(245,245,247,0.35)] mb-5">
              Nos services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[rgba(245,245,247,0.5)] hover:text-[#f5f5f7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[rgba(245,245,247,0.35)] mb-5">
              UPSILON
            </h3>
            <ul className="space-y-3">
              {footerNav.upsilon.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[rgba(245,245,247,0.5)] hover:text-[#f5f5f7] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[rgba(245,245,247,0.35)] mb-5">
              Suivez-nous
            </h3>
            <ul className="space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[rgba(245,245,247,0.5)] hover:text-[#f5f5f7] transition-colors group"
                  >
                    {s.label}
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[rgba(245,245,247,0.3)]">
            © {new Date().getFullYear()} UPSILON — Junior-Entreprise de l&apos;Université de Toulouse. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-[rgba(245,245,247,0.3)] hover:text-[rgba(245,245,247,0.6)] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
