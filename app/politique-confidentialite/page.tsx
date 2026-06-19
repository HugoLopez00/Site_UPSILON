import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-32 pb-24 bg-[#F5F1EC]">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#1C1418] mb-3">Politique de confidentialité</h1>
        <p className="text-sm text-[rgba(28,20,24,0.4)] mb-12">Conformément au RGPD (Règlement UE 2016/679) · Dernière mise à jour : juin 2025</p>

        <div className="space-y-10 text-sm text-[rgba(28,20,24,0.65)] leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-[#1C1418] mb-3">1. Responsable du traitement</h2>
            <p>
              UPSILON, Junior-Entreprise de l&apos;Université de Toulouse, dont le siège est situé au
              Bâtiment Louis Lareng, 118 Route de Narbonne, 31062 Toulouse CEDEX 9, est responsable
              du traitement des données personnelles collectées via ce site.
            </p>
            <p className="mt-2">Contact DPO : <span className="text-[#B32C25]">contact@upsilon-toulouse.fr</span></p>
          </section>

          <div className="h-px bg-black/[0.08]" />

          <section>
            <h2 className="text-base font-bold text-[#1C1418] mb-3">2. Données collectées</h2>
            <p className="mb-3">Nous collectons les données suivantes :</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2"><span className="text-[#B32C25] mt-1">→</span>Via le formulaire de contact : nom, email, société, message</li>
              <li className="flex items-start gap-2"><span className="text-[#B32C25] mt-1">→</span>Via le formulaire de recrutement : nom, email, école, année, lettre de motivation</li>
              <li className="flex items-start gap-2"><span className="text-[#B32C25] mt-1">→</span>Données de navigation : adresse IP, pages visitées, durée de visite (via cookies analytiques)</li>
            </ul>
          </section>

          <div className="h-px bg-black/[0.08]" />

          <section>
            <h2 className="text-base font-bold text-[#1C1418] mb-3">3. Finalités et bases légales</h2>
            <div className="card rounded-xl p-5 space-y-3">
              {[
                { finalite: 'Traitement de votre demande de contact', base: 'Intérêt légitime' },
                { finalite: 'Traitement de votre candidature', base: 'Consentement' },
                { finalite: 'Amélioration du site (analytics)', base: 'Consentement' },
                { finalite: 'Envoi de réponses et suivi commercial', base: 'Intérêt légitime' },
              ].map((row) => (
                <div key={row.finalite} className="flex items-start justify-between gap-4 border-b border-black/[0.08] pb-3 last:border-0 last:pb-0">
                  <span>{row.finalite}</span>
                  <span className="text-[11px] shrink-0 px-2 py-0.5 rounded-md bg-[rgba(196,30,58,0.1)] border border-[rgba(196,30,58,0.2)] text-[#B32C25]">{row.base}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="h-px bg-black/[0.08]" />

          <section>
            <h2 className="text-base font-bold text-[#1C1418] mb-3">4. Durée de conservation</h2>
            <p>
              Les données issues des formulaires de contact sont conservées <strong className="text-[rgba(28,20,24,0.85)]">3 ans</strong> à
              compter du dernier contact. Les candidatures non retenues sont supprimées après <strong className="text-[rgba(28,20,24,0.85)]">6 mois</strong>.
            </p>
          </section>

          <div className="h-px bg-black/[0.08]" />

          <section>
            <h2 className="text-base font-bold text-[#1C1418] mb-3">5. Vos droits</h2>
            <p className="mb-3">Conformément au RGPD, vous disposez des droits suivants :</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Droit d\'accès', 'Droit de rectification', 'Droit à l\'effacement', 'Droit à la portabilité', 'Droit d\'opposition', 'Droit à la limitation'].map((droit) => (
                <div key={droit} className="flex items-center gap-2 text-xs rounded-lg px-3 py-2" style={{ background: 'var(--bg-2)', border: '1px solid rgba(28,20,24,0.1)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B32C25] shrink-0" />
                  {droit}
                </div>
              ))}
            </div>
            <p className="mt-4">
              Pour exercer vos droits : <span className="text-[#B32C25]">contact@upsilon-toulouse.fr</span>
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la <strong className="text-[rgba(28,20,24,0.85)]">CNIL</strong> : <span className="text-[#B32C25]">cnil.fr</span>
            </p>
          </section>

          <div className="h-px bg-black/[0.08]" />

          <section>
            <h2 className="text-base font-bold text-[#1C1418] mb-3">6. Cookies</h2>
            <p>
              Ce site utilise des cookies strictement nécessaires à son fonctionnement.
              Des cookies analytiques (Vercel Analytics) peuvent être utilisés pour mesurer l&apos;audience,
              sous réserve de votre consentement. Aucune donnée n&apos;est vendue à des tiers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}




