export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  shortDescription: string
  description: string
  benefits: string[]
  methodology: string[]
  useCases: string[]
  color: string
}

export const services: Service[] = [
  {
    id: 'it',
    slug: 'logiciels-services-it',
    icon: '💻',
    title: 'Logiciels & Services IT',
    shortDescription: 'Développement sur-mesure, applications mobiles, IA et web.',
    description:
      "Notre pôle IT mobilise les meilleurs talents en informatique de l'Université de Toulouse pour concevoir et livrer des solutions logicielles robustes, scalables et maintenues selon les standards de l'industrie.",
    benefits: [
      'Code source documenté et livré',
      'Technologies open-source et propriétaires',
      'Accompagnement post-livraison',
      'Tests et assurance qualité intégrés',
    ],
    methodology: ['Cadrage & spécifications', 'Architecture & design', 'Développement agile', 'Tests & recette', 'Livraison & documentation'],
    useCases: [
      'Application mobile IoT pour industriel',
      'Plateforme SaaS de gestion de données',
      "Outil d'analyse prédictive par IA",
      'Site e-commerce sur-mesure',
    ],
    color: '#6366f1',
  },
  {
    id: 'marketing',
    slug: 'marketing-communication',
    icon: '📣',
    title: 'Marketing & Communication',
    shortDescription: 'Stratégie, image de marque et communication digitale.',
    description:
      "Nos consultants en marketing et communication vous aident à définir votre positionnement, développer votre image de marque et déployer des stratégies de communication percutantes adaptées à vos cibles.",
    benefits: [
      'Livrables professionnels clé en main',
      'Méthodes issues des meilleures écoles',
      'Approche data-driven',
      'Veille concurrentielle incluse',
    ],
    methodology: ["Audit de l'existant", 'Analyse concurrentielle', 'Définition stratégique', 'Production créative', 'Déploiement & suivi'],
    useCases: [
      'Refonte identité visuelle startup',
      'Plan de communication institutionnelle',
      'Étude de marché sectorielle',
      'Stratégie contenu réseaux sociaux',
    ],
    color: '#f59e0b',
  },
  {
    id: 'construction',
    slug: 'construction-environnement',
    icon: '🏗️',
    title: 'Construction & Environnement',
    shortDescription: 'Dimensionnement, plans techniques et simulation thermique.',
    description:
      "Soutenus par les laboratoires de génie civil et d'environnement de l'Université de Toulouse, nos équipes réalisent des études techniques de haute précision pour vos projets de construction et d'aménagement.",
    benefits: [
      'Expertise pluridisciplinaire',
      'Outils de simulation avancés',
      'Conformité normes européennes',
      'Rapports détaillés et actionnables',
    ],
    methodology: ['Analyse des besoins', 'Modélisation numérique', 'Simulation & calculs', 'Rédaction du rapport', 'Restitution client'],
    useCases: [
      'Dimensionnement structure bâtiment BBC',
      'Simulation thermique dynamique STD',
      'Étude acoustique salle polyvalente',
      'Plans techniques et coupes de rénovation',
    ],
    color: '#10b981',
  },
  {
    id: 'chimie',
    slug: 'chimie-biotechnologies',
    icon: '🧪',
    title: 'Chimie & Biotechnologies',
    shortDescription: 'Synthèse moléculaire, bioinformatique et veille scientifique.',
    description:
      "Forts de l'accès aux laboratoires de chimie et biotechnologies de renommée internationale de Toulouse (pôle de compétitivité Cancer-Bio-Santé), nos consultants opèrent à la frontière de la science et de l'industrie.",
    benefits: [
      'Accès équipements de laboratoire',
      'Expertise doctorants et chercheurs',
      'Résultats reproductibles et certifiés',
      'Rapport scientifique complet',
    ],
    methodology: ['Revue de littérature', 'Protocole expérimental', 'Expérimentation & mesures', 'Analyse des données', 'Rapport & conclusions'],
    useCases: [
      'Synthèse et caractérisation moléculaire',
      'Analyse bioinformatique de séquences',
      'Revue systématique de littérature',
      'Banc de test matériaux innovants',
    ],
    color: '#8b5cf6',
  },
  {
    id: 'electronique',
    slug: 'electronique-mecanique',
    icon: '⚙️',
    title: 'Électronique & Mécanique',
    shortDescription: 'Modélisation, simulation énergétique et conception de prototypes.',
    description:
      "Notre équipe d'ingénieurs en électronique et mécanique conçoit, modélise et teste des systèmes complexes en exploitant les plateformes de simulation de pointe de l'Université Paul Sabatier et de l'INSA Toulouse.",
    benefits: [
      'Simulation multi-physique avancée',
      'Conception et impression 3D',
      'Calculs de fatigue et fiabilité',
      'Documentation technique complète',
    ],
    methodology: ['Cahier des charges', 'Conception CAO', 'Simulation & validation', 'Prototypage', 'Tests & recette'],
    useCases: [
      'Prototype carte électronique embarquée',
      'Calcul fatigue composant mécanique',
      "Simulation énergie d'un système hybride",
      'Modélisation cinématique bras robotique',
    ],
    color: '#ef4444',
  },
]
