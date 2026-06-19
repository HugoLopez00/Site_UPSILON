import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation',
}

export default function CguPage() {
  return (
    <div className="pt-32 pb-24 bg-[#07070a]">
      <div className="max-w-[800px] mx-auto px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#f5f5f7] mb-3">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-sm text-[rgba(245,245,247,0.4)] mb-12">Version en vigueur au 1er juin 2025</p>

        <div className="space-y-10 text-sm text-[rgba(245,245,247,0.65)] leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les
              modalités d&apos;accès et d&apos;utilisation du site internet d&apos;UPSILON accessible à l&apos;adresse
              upsilon-toulouse.fr. Tout accès au site implique l&apos;acceptation sans réserve des présentes CGU.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">2. Accès au site</h2>
            <p>
              Le site est accessible 24h/24 et 7j/7, sauf interruption programmée ou non
              pour des raisons de maintenance. UPSILON ne saurait être tenu responsable
              de toute interruption de service ou de toute impossibilité d&apos;accès au site.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">3. Utilisation des formulaires</h2>
            <p>
              Les formulaires présents sur le site (contact, recrutement) permettent la transmission
              d&apos;informations à UPSILON. L&apos;utilisateur s&apos;engage à fournir des informations
              exactes et à ne pas utiliser les formulaires à des fins frauduleuses, abusives ou illicites.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments constituant le site (structure, design, textes, images, logo,
              animations) est protégé par le droit de la propriété intellectuelle. Toute reproduction
              ou représentation, même partielle, est interdite sans l&apos;accord écrit préalable d&apos;UPSILON.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">5. Comportements interdits</h2>
            <p className="mb-3">Il est interdit de :</p>
            <ul className="space-y-2 ml-4">
              {[
                'Introduire des programmes informatiques malveillants dans le site',
                'Tenter de contourner les mesures de sécurité du site',
                'Collecter des données à caractère personnel sans autorisation',
                'Utiliser le site à des fins contraires aux lois en vigueur',
                'Reproduire le contenu du site sans autorisation préalable',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#B32C25] mt-1">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">6. Limitation de responsabilité</h2>
            <p>
              UPSILON ne saurait être tenu responsable des dommages directs ou indirects causés
              à l&apos;utilisateur lors de l&apos;accès au site, notamment en cas d&apos;indisponibilité,
              de virus, ou d&apos;inexactitude des informations.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">7. Modification des CGU</h2>
            <p>
              UPSILON se réserve le droit de modifier les présentes CGU à tout moment.
              L&apos;utilisateur est invité à les consulter régulièrement. La version applicable
              est celle en vigueur au moment de la consultation du site.
            </p>
          </section>

          <div className="h-px bg-white/[0.06]" />

          <section>
            <h2 className="text-base font-bold text-[#f5f5f7] mb-3">8. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, et après tentative
              de résolution amiable, les tribunaux compétents de Toulouse seront saisis.
            </p>
          </section>

          <div className="card rounded-xl p-5 border border-white/[0.06]">
            <p className="text-xs text-[rgba(245,245,247,0.5)]">
              Pour toute question relative aux CGU, contactez-nous à{' '}
              <span className="text-[#B32C25]">contact@upsilon-toulouse.fr</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
