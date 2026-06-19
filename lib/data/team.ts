export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  bio: string
  skills: string[]
  linkedin?: string
  avatar: string
  initials: string
  color: string
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Alexandre Moreau',
    role: 'Président',
    department: 'Direction',
    bio: "Étudiant en Master Systèmes Embarqués à l'INSA Toulouse, Alexandre coordonne la stratégie globale d'Upsilon et représente la JE auprès des partenaires institutionnels.",
    skills: ['Leadership', 'Stratégie', 'Relations institutionnelles'],
    linkedin: '#',
    avatar: '',
    initials: 'AM',
    color: '#B32C25',
  },
  {
    id: '2',
    name: 'Chloé Bernard',
    role: 'Vice-Présidente',
    department: 'Direction',
    bio: "En Master Management à Sciences Po Toulouse, Chloé supervise les relations clients et le développement commercial de la Junior-Entreprise.",
    skills: ['Business Development', 'Négociation', 'Management'],
    linkedin: '#',
    avatar: '',
    initials: 'CB',
    color: '#6366f1',
  },
  {
    id: '3',
    name: 'Lucas Fontaine',
    role: 'Trésorier',
    department: 'Administration',
    bio: "Étudiant en Master Finance à l'Université Toulouse 1 Capitole, Lucas gère la comptabilité, les budgets et la conformité financière d'Upsilon.",
    skills: ['Finance', 'Comptabilité', 'Contrôle de gestion'],
    linkedin: '#',
    avatar: '',
    initials: 'LF',
    color: '#10b981',
  },
  {
    id: '4',
    name: 'Sarah El Mansouri',
    role: 'Responsable Qualité',
    department: 'Qualité',
    bio: "Spécialisée en Génie Industriel à l'INSA, Sarah pilote les processus qualité et les audits annuels qui garantissent la certification Marque Junior-Entreprise.",
    skills: ['Qualité ISO', 'Audit', 'Process improvement'],
    linkedin: '#',
    avatar: '',
    initials: 'SE',
    color: '#f59e0b',
  },
  {
    id: '5',
    name: 'Thomas Navarro',
    role: 'Directeur Commercial',
    department: 'Commercial',
    bio: "En Master Marketing Digital à l'IAE Toulouse, Thomas pilote la prospection, les appels d'offres et le suivi client tout au long des missions.",
    skills: ['Vente', 'CRM', 'Marketing B2B'],
    linkedin: '#',
    avatar: '',
    initials: 'TN',
    color: '#8b5cf6',
  },
  {
    id: '6',
    name: 'Marie Lefèvre',
    role: 'Directrice des Ressources Humaines',
    department: 'RH',
    bio: "Étudiante en Master RH, Marie gère le recrutement, l'intégration et le développement des compétences des membres d'Upsilon.",
    skills: ['Recrutement', 'Formation', 'Culture d\'entreprise'],
    linkedin: '#',
    avatar: '',
    initials: 'ML',
    color: '#ec4899',
  },
  {
    id: '7',
    name: 'Antoine Rousseau',
    role: 'Responsable IT',
    department: 'IT',
    bio: "Développeur fullstack en Master Informatique à Paul Sabatier, Antoine coordonne les missions logicielles et maintient l'infrastructure digitale d'Upsilon.",
    skills: ['React', 'Node.js', 'DevOps'],
    linkedin: '#',
    avatar: '',
    initials: 'AR',
    color: '#06b6d4',
  },
  {
    id: '8',
    name: 'Inès Toussaint',
    role: 'Responsable Communication',
    department: 'Communication',
    bio: "En Master Communication à l'UT1, Inès gère l'image de marque, les réseaux sociaux et les supports de communication d'Upsilon.",
    skills: ['Design', 'Réseaux sociaux', 'Rédaction'],
    linkedin: '#',
    avatar: '',
    initials: 'IT',
    color: '#f97316',
  },
]
