# UPSILON — Site Web Premium

Site web de la Junior-Entreprise de l'Université de Toulouse.  
Construit avec Next.js 15, TypeScript, Tailwind CSS et Framer Motion.

---

## Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| Next.js | ^15.3.3 | Framework React (App Router) |
| React | ^19.0.0 | UI Library |
| TypeScript | ^5 | Typage statique |
| Tailwind CSS | ^3.4.17 | Utilitaires CSS |
| Framer Motion | ^12.15.0 | Animations |
| Lucide React | ^0.469.0 | Icônes |
| Radix UI | — | Composants accessibles |

---

## Installation

### Prérequis

- Node.js ≥ 18.17.0
- npm ≥ 9 (ou pnpm / yarn)

### Cloner et installer

```bash
git clone https://github.com/upsilon/upsilon-site.git
cd upsilon-site
npm install
```

---

## Lancement en développement

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## Build de production

```bash
npm run build
npm run start
```

---

## Déploiement sur Vercel

### Option 1 : Interface Vercel (recommandé)

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Clique sur **"Add New Project"**
3. Importe le repository GitHub
4. Vercel détecte automatiquement Next.js — clique **"Deploy"**

### Option 2 : CLI Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Variables d'environnement

Aucune variable requise pour le déploiement de base.  
Si tu ajoutes un service backend (email, CMS), configure les variables dans **Vercel → Settings → Environment Variables**.

---

## Structure du projet

```
upsilon-site/
├── app/                    # Pages (App Router)
│   ├── layout.tsx          # Layout racine (Navbar, Footer, metadata)
│   ├── page.tsx            # Page d'accueil
│   ├── a-propos/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── realisations/
│   │   └── page.tsx
│   ├── equipe/
│   │   └── page.tsx
│   ├── recrutement/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── mentions-legales/
│   │   └── page.tsx
│   ├── politique-confidentialite/
│   │   └── page.tsx
│   ├── cgu/
│   │   └── page.tsx
│   └── globals.css         # Styles globaux + variables CSS
│
├── animations/
│   ├── variants.ts         # Variantes Framer Motion réutilisables
│   └── index.ts            # Exports + constantes d'animation
│
├── components/
│   ├── home/               # Sections de la page d'accueil
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Clients.tsx
│   │   └── HomeCTA.tsx
│   ├── layout/             # Composants de mise en page
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Composants UI réutilisables
│       ├── AnimatedCounter.tsx
│       ├── GlassCard.tsx
│       ├── RevealWrapper.tsx
│       └── SectionLabel.tsx
│
├── hooks/                  # Custom hooks React
│   ├── useCountUp.ts
│   └── useMediaQuery.ts
│
├── lib/
│   ├── utils.ts            # Utilitaires (cn, slugify, formatDate)
│   └── data/               # Données mockées
│       ├── services.ts
│       ├── team.ts
│       ├── projects.ts
│       └── testimonials.ts
│
├── public/                 # Assets statiques
├── tailwind.config.ts      # Config Tailwind + design tokens
├── next.config.ts          # Config Next.js
├── tsconfig.json
└── package.json
```

---

## Personnalisation du contenu

### Couleurs de marque

Dans `tailwind.config.ts` et `app/globals.css` :

```css
--upsilon-red: #c41e3a;       /* Rouge primaire Upsilon */
--upsilon-red-light: #e02d4e; /* Variante claire */
--upsilon-red-dark: #9b1830;  /* Variante sombre */
```

### Données du site

Toutes les données sont dans `lib/data/` :

| Fichier | Contenu |
|---------|---------|
| `services.ts` | Les 5 pôles d'expertise |
| `team.ts` | Les membres de l'équipe |
| `projects.ts` | Les projets réalisés |
| `testimonials.ts` | Témoignages et statistiques |

### Métadonnées SEO

Modifier `app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: 'UPSILON — ...',
  description: '...',
  // ...
}
```

### Ajouter un membre de l'équipe

Dans `lib/data/team.ts` :

```typescript
{
  id: '9',
  name: 'Nouveau Membre',
  role: 'Son Rôle',
  department: 'Pôle',
  bio: 'Sa biographie...',
  skills: ['Compétence 1', 'Compétence 2'],
  linkedin: 'https://linkedin.com/in/...',
  avatar: '',
  initials: 'NM',
  color: '#c41e3a',
}
```

### Ajouter un projet

Dans `lib/data/projects.ts`, ajouter un objet au tableau `projects` en suivant l'interface `Project`.

---

## Design System

### Composants clés

| Composant | Usage |
|-----------|-------|
| `<SectionLabel>` | Label de section rouge avec point animé |
| `<GlassCard>` | Carte glassmorphism |
| `<AnimatedCounter>` | Compteur animé au scroll |
| `<RevealWrapper>` | Wrapper d'animation au scroll |

### Classes CSS utilitaires

| Classe | Effet |
|--------|-------|
| `.glass` | Effet glassmorphism |
| `.glass-hover` | Glassmorphism avec transition au hover |
| `.text-gradient` | Texte dégradé rouge animé |
| `.dot-grid` | Fond grille de points |
| `.line-grid` | Fond grille de lignes |
| `.badge` | Badge Upsilon rouge |
| `.btn-red` | Bouton rouge primaire |
| `.btn-ghost` | Bouton secondaire transparent |

### Animations Framer Motion

Dans `animations/variants.ts` :

```typescript
import { fadeInUp, staggerContainer, scaleIn } from '@/animations'

// Usage
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  <motion.div variants={fadeInUp}>...</motion.div>
</motion.div>
```

---

## Accessibilité

- Contraste AA respecté sur toutes les combinaisons texte/fond
- Focus visible sur tous les éléments interactifs
- Labels ARIA sur les boutons icon-only
- Navigation clavier complète
- `alt` sur toutes les images
- Structure sémantique HTML5

---

## Performance

- Fonts chargées via `next/font/google` (auto-hébergement)
- Images optimisées via `next/image`
- Animations désactivées si `prefers-reduced-motion`
- Code splitting automatique par page (App Router)

---

## Contribuer

1. Forke le repo
2. Crée une branche : `git checkout -b feat/ma-fonctionnalite`
3. Commit : `git commit -m 'feat: description'`
4. Push et ouvre une PR

---

## Contact

Junior-Entreprise UPSILON  
Bât. Louis Lareng, 118 Route de Narbonne, 31062 Toulouse CEDEX 9  
contact@upsilon-toulouse.fr | +33 (0)5 61 55 83 93

---

*"Think Success, Make It Happen."*
