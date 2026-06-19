export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  initials: string
  color: string
  project?: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Frédéric Dumont',
    role: 'Directeur Technique',
    company: 'IndustrialTech SAS',
    content: "L'équipe Upsilon a su comprendre nos enjeux industriels et livrer une solution IoT parfaitement adaptée. La qualité du code et la rigueur du suivi de projet étaient au niveau d'un cabinet de conseil senior. Nous avons renouvelé la collaboration.",
    rating: 5,
    avatar: '',
    initials: 'FD',
    color: '#c41e3a',
    project: 'Application IoT Industrielle',
  },
  {
    id: '2',
    name: 'Sophie Marchand',
    role: 'CEO & Co-fondatrice',
    company: 'GreenProtein SAS',
    content: "Notre étude de marché était un investissement décisif avant notre levée de fonds. Upsilon a réalisé un travail d'une qualité remarquable, avec une méthodologie rigoureuse et des insights vraiment actionnables. Je recommande sans hésitation.",
    rating: 5,
    avatar: '',
    initials: 'SM',
    color: '#10b981',
    project: 'Étude de Marché FoodTech',
  },
  {
    id: '3',
    name: 'Dr. Philippe Laurent',
    role: 'Architecte Principal',
    company: 'Laurent & Associés Architectes',
    content: "La simulation thermique réalisée par l'équipe d'Upsilon nous a permis d'argumenter nos choix techniques avec des données précises. Le rapport livré était d'une grande clarté et directement exploitable dans notre dossier de permis.",
    rating: 5,
    avatar: '',
    initials: 'PL',
    color: '#6366f1',
    project: 'Simulation Thermique BBC',
  },
  {
    id: '4',
    name: 'Aurore Chen',
    role: 'Head of Data',
    company: 'CreditFlow Fintech',
    content: "Upsilon a développé notre modèle de scoring crédit avec une maîtrise technique impressionnante pour des étudiants. La rigueur scientifique, les métriques de validation et la documentation livrée étaient dignes d'une équipe data senior.",
    rating: 5,
    avatar: '',
    initials: 'AC',
    color: '#f59e0b',
    project: 'Plateforme ML Prédictive',
  },
]

export const stats = [
  { value: 149, suffix: '', label: 'Formations universitaires', description: 'Accès à 149 formations de l\'Université de Toulouse' },
  { value: 68, suffix: '', label: 'Laboratoires de recherche', description: '68 labos de renommée internationale' },
  { value: 500, suffix: '+', label: 'Missions réalisées', description: 'Depuis notre création en 2011' },
  { value: 13, suffix: ' ans', label: "D'expérience", description: 'Junior-Entreprise certifiée depuis 2013' },
]

export const clients = [
  'Airbus',
  'Thales',
  'Pierre Fabre',
  'Latécoère',
  'CNES',
  'Safran',
  'Toulouse Métropole',
  'SNCF',
]
