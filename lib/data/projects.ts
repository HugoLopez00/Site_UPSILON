export interface Project {
  id: string
  slug: string
  title: string
  client: string
  category: string
  categoryId: string
  year: string
  duration: string
  description: string
  challenge: string
  solution: string
  results: string[]
  tags: string[]
  image: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'application-iot-industrielle',
    title: 'Application IoT Industrielle',
    client: 'PME Industrielle – Toulouse',
    category: 'Logiciels & IT',
    categoryId: 'it',
    year: '2024',
    duration: '3 mois',
    description: "Développement d'une application mobile cross-platform pour superviser en temps réel des capteurs IoT dans un environnement de production industrielle.",
    challenge: "L'entreprise manquait de visibilité sur ses équipements de production. Les pannes non anticipées coûtaient plusieurs milliers d'euros par heure d'arrêt.",
    solution: "Conception d'une architecture MQTT → backend Node.js → app React Native avec alertes push, tableaux de bord temps réel et historique des métriques.",
    results: [
      'Réduction des pannes imprévues de 40%',
      'Visibilité temps réel sur 80 capteurs',
      'ROI atteint en 4 mois',
    ],
    tags: ['React Native', 'IoT', 'Node.js', 'MQTT', 'Dashboard'],
    image: '',
    featured: true,
  },
  {
    id: '2',
    slug: 'etude-marche-foodtech',
    title: 'Étude de Marché FoodTech',
    client: 'Startup FoodTech – Paris',
    category: 'Marketing & Communication',
    categoryId: 'marketing',
    year: '2024',
    duration: '6 semaines',
    description: "Étude de marché complète sur le segment des alternatives protéinées végétales en France, avec analyse concurrentielle et recommandations stratégiques.",
    challenge: "La startup souhaitait valider son positionnement et identifier ses cibles prioritaires avant son lancement commercial.",
    solution: "Combinaison d'analyse documentaire, enquêtes consommateurs (n=320) et 12 entretiens qualitatifs avec acteurs de la distribution.",
    results: [
      'Identification de 3 segments prioritaires',
      'Cartographie de 47 concurrents directs',
      'Plan go-to-market validé par les investisseurs',
    ],
    tags: ['Étude de marché', 'Analyse concurrentielle', 'Stratégie', 'FoodTech'],
    image: '',
    featured: true,
  },
  {
    id: '3',
    slug: 'simulation-thermique-bat',
    title: 'Simulation Thermique BBC',
    client: 'Cabinet Architecture – Toulouse',
    category: 'Construction & Environnement',
    categoryId: 'construction',
    year: '2024',
    duration: '4 semaines',
    description: "Simulation thermique dynamique d'un immeuble de bureaux BBC pour optimiser le système de chauffage/climatisation et réduire la consommation énergétique.",
    challenge: "Le cabinet devait justifier ses choix techniques auprès du maître d'ouvrage et réduire la consommation sous le seuil BBC réglementation.",
    solution: "Modélisation complète sous EnergyPlus avec intégration des données météo locales et simulation de 5 scénarios de solutions techniques.",
    results: [
      'Économie simulée de 32% sur les consommations',
      'Conformité BBC atteinte sur tous les scénarios',
      'Rapport de 85 pages remis au client',
    ],
    tags: ['Thermique', 'EnergyPlus', 'BBC', 'Énergie', 'Bâtiment'],
    image: '',
    featured: false,
  },
  {
    id: '4',
    slug: 'plateforme-ml-prediction',
    title: 'Plateforme ML Prédictive',
    client: 'Scale-up FinTech – Bordeaux',
    category: 'Logiciels & IT',
    categoryId: 'it',
    year: '2023',
    duration: '5 mois',
    description: "Développement d'une plateforme de machine learning pour prédire le risque de défaut de paiement sur un portefeuille de crédits SME.",
    challenge: "L'entreprise subissait un taux de défaut anormalement élevé (3.8%) faute d'outils de scoring adaptés à sa clientèle PME.",
    solution: "Entraînement et déploiement d'un modèle XGBoost sur données historiques (5 ans, 12k dossiers), avec API REST et tableau de bord d'interprétabilité SHAP.",
    results: [
      'AUC de 0.87 sur le jeu de test',
      'Réduction du taux de défaut à 2.1% en 3 mois',
      'Économie annuelle estimée à 240k€',
    ],
    tags: ['Machine Learning', 'Python', 'XGBoost', 'FinTech', 'API'],
    image: '',
    featured: true,
  },
  {
    id: '5',
    slug: 'prototype-electronique',
    title: 'Prototype Carte Électronique',
    client: 'Labo de Recherche – LAAS-CNRS',
    category: 'Électronique & Mécanique',
    categoryId: 'electronique',
    year: '2023',
    duration: '8 semaines',
    description: "Conception et réalisation d'une carte électronique embarquée pour l'acquisition de signaux physiologiques à faible consommation.",
    challenge: "Le laboratoire avait besoin d'un module d'acquisition portable, autonome 72h sur batterie, capable de traiter des signaux EEG en temps réel.",
    solution: "Schématique KiCad, routage PCB 4 couches, firmware STM32 avec DSP embarqué et protocole BLE pour transfert vers application smartphone.",
    results: [
      'Autonomie de 80h atteinte (objectif 72h)',
      'Bruit de mesure < 1µV RMS',
      'Prototype validé en protocole expérimental',
    ],
    tags: ['Électronique', 'STM32', 'PCB', 'Embarqué', 'BLE'],
    image: '',
    featured: false,
  },
  {
    id: '6',
    slug: 'identite-visuelle-startup',
    title: 'Identité Visuelle Startup',
    client: 'Startup EdTech – Toulouse',
    category: 'Marketing & Communication',
    categoryId: 'marketing',
    year: '2023',
    duration: '3 semaines',
    description: "Création complète de l'identité visuelle d'une startup EdTech : logotype, charte graphique, templates communication, et guide d'utilisation de la marque.",
    challenge: "La startup levait ses premiers fonds et avait besoin d'une image professionnelle cohérente pour convaincre investisseurs et établissements scolaires.",
    solution: "Processus créatif complet incluant audit de l'existant, 3 pistes créatives, révisions et livraison d'un brand book de 40 pages.",
    results: [
      'Identité complète livrée en 3 semaines',
      'Utilisée pour une levée de fonds de 500k€',
      'Note de satisfaction client : 9.4/10',
    ],
    tags: ['Branding', 'Design', 'Identité visuelle', 'EdTech', 'Charte graphique'],
    image: '',
    featured: false,
  },
]

export const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'it', label: 'Logiciels & IT' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'construction', label: 'Construction' },
  { id: 'chimie', label: 'Chimie & Biotech' },
  { id: 'electronique', label: 'Électronique' },
]
