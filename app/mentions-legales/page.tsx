import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-24 bg-[#07070a]">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#f5f5f7] mb-3">Mentions légales</h1>
        <p className="text-sm text-[rgba(245,245,247,0.4)] mb-12">Dernière mise à jour : juin 2025</p>

        <div className="space-y-10 text-sm text-[rgba(245,245,247,0.65)] leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">1. Éditeur du site</h2>
            <p><strong className="text-[rgba(245,245,247,0.85)]">Raison sociale :</strong> UPSILON — Junior-Entreprise de l&apos;Université de Toulouse</p>
            <p><strong className="text-[rgba(245,245,247,0.85)]">Forme juridique :</strong> Association (loi 1901)</p>
            <p><strong className="text-[rgba(245,245,247,0.85)]">Siège social :</strong> Bâtiment Louis Lareng, 118 Route de Narbonne, 31062 Toulouse CEDEX 9</p>
            <p><strong className="text-[rgba(245,245,247,0.85)]">Téléphone :</strong> +33 (0)5 61 55 83 93</p>
            <p><strong className="text-[rgba(245,245,247,0.85)]">Email :</strong> contact@upsilon-toulouse.fr</p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le Président en exercice d&apos;UPSILON.</p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">3. Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <p><strong className="text-[rgba(245,245,247,0.85)]">Vercel Inc.</strong></p>
            <p>340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
            <p>Site web : <span className="text-[#B32C25]">vercel.com</span></p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, logos, vidéos, graphismes, etc.)
              est la propriété exclusive d&apos;UPSILON ou de ses partenaires. Toute reproduction,
              représentation, modification, publication ou adaptation, totale ou partielle, est interdite
              sans l&apos;autorisation écrite préalable d&apos;UPSILON.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">5. Limitation de responsabilité</h2>
            <p>
              UPSILON s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
              diffusées sur ce site. Toutefois, UPSILON ne peut garantir l&apos;exactitude, la complétude
              et l&apos;actualité des informations. En conséquence, l&apos;utilisateur reconnaît utiliser
              ces informations sous sa responsabilité exclusive.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">6. Liens hypertextes</h2>
            <p>
              La création de liens hypertextes vers les pages du site est autorisée sans demande
              d&apos;autorisation préalable, à condition que le lien ne soit pas utilisé à des fins
              commerciales ou publicitaires et qu&apos;il ne nuise pas à l&apos;image d&apos;UPSILON.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, les tribunaux de Toulouse seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
