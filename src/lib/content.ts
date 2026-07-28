/* Contenu éditorial centralisé : une seule source de vérité pour l'accueil,
   la page Services et la page Formations. */

export type Service = {
  slug: string
  /** Nom de l'icône lucide-react, résolu dans la page */
  icone: 'Globe' | 'PenTool' | 'GraduationCap' | 'MessagesSquare'
  title: string
  pitch: string
  delivrables: string[]
  delai: string
  /** Si renseigné, la carte pointe vers cette route au lieu du contact */
  lien?: string
}

export const SERVICES: Service[] = [
  {
    slug: 'sites-web',
    icone: 'Globe',
    title: 'Création de sites web',
    pitch:
      'Vitrines et boutiques en ligne qui chargent en moins de deux secondes sur une connexion 3G — celle de la majorité de vos clients.',
    delivrables: [
      'Design sur mesure, validé avant développement',
      'Version mobile pensée en premier',
      'Formulaire relié à votre WhatsApp Business',
      'Formation à la mise à jour du contenu',
    ],
    delai: '7 à 14 jours',
  },
  {
    slug: 'creation-contenu',
    icone: 'PenTool',
    title: 'Création de contenu',
    pitch:
      'Photos, vidéos verticales et visuels écrits pour le scroll. Tournés pour la plateforme, pas recyclés d’un support à l’autre.',
    delivrables: [
      'Scénarios écrits avant tournage',
      'Tournage et montage vertical',
      'Sous-titres intégrés',
      'Déclinaison Reels, Shorts et TikTok',
    ],
    delai: '8 contenus par mois',
  },
  {
    slug: 'gestion-pages',
    icone: 'MessagesSquare',
    title: 'Gestion de pages',
    pitch:
      'Publier ne suffit pas. On répond aux commentaires, on relance les messages privés, on transforme l’audience en commandes.',
    delivrables: [
      'Calendrier éditorial mensuel',
      'Visuels aux couleurs de votre marque',
      'Modération et réponses sous deux heures',
      'Suivi des demandes entrantes',
    ],
    delai: 'Engagement mensuel',
  },
  {
    slug: 'formation',
    icone: 'GraduationCap',
    title: 'Formation',
    pitch:
      'Six modules pour internaliser ce que nous faisons. Pour les équipes qui veulent apprendre plutôt que déléguer indéfiniment.',
    delivrables: [
      'Sessions en présentiel à Yaoundé ou à distance',
      'Groupes de huit personnes maximum',
      'Exercices sur vos propres projets',
      'Attestation en fin de parcours',
    ],
    delai: '6 modules disponibles',
    lien: '/formations',
  },
]

/* ---------------------------------------------------------- */

export type Formation = {
  slug: string
  icone: 'Globe' | 'PenTool' | 'Megaphone' | 'MessagesSquare' | 'Clapperboard' | 'Palette'
  title: string
  pitch: string
  duree: string
  niveau: 'Débutant' | 'Intermédiaire' | 'Tous niveaux'
  programme: string[]
}

export const FORMATIONS: Formation[] = [
  {
    slug: 'creation-site-web',
    icone: 'Globe',
    title: 'Création de site web',
    pitch:
      'Construire et mettre en ligne un site présentable sans écrire de code, puis savoir le faire évoluer seul.',
    duree: '4 jours',
    niveau: 'Débutant',
    programme: [
      'Structurer les pages avant de dessiner quoi que ce soit',
      'Prendre en main un constructeur visuel',
      'Nom de domaine, hébergement et mise en ligne',
      'Corriger les erreurs les plus fréquentes',
    ],
  },
  {
    slug: 'creation-contenu',
    icone: 'PenTool',
    title: 'Création de contenu',
    pitch:
      'Produire des photos et des textes qui tiennent la comparaison avec les grandes marques, à partir d’un téléphone.',
    duree: '3 jours',
    niveau: 'Débutant',
    programme: [
      'Cadrage et lumière naturelle en intérieur',
      'Écrire une accroche qui arrête le pouce',
      'Construire une banque de contenus d’avance',
      'Retouche mobile en dix minutes',
    ],
  },
  {
    slug: 'marketing-digital',
    icone: 'Megaphone',
    title: 'Marketing digital',
    pitch:
      'Comprendre ce qui fait qu’une campagne rapporte de l’argent, et savoir couper celle qui n’en rapporte pas.',
    duree: '5 jours',
    niveau: 'Intermédiaire',
    programme: [
      'Calculer son coût d’acquisition réel',
      'Créer et cibler une campagne Facebook',
      'Lire les indicateurs sans se noyer dedans',
      'Décider quand arrêter un test',
    ],
  },
  {
    slug: 'community-management',
    icone: 'MessagesSquare',
    title: 'Community management',
    pitch:
      'Animer une page au quotidien : rythme de publication, réponses, gestion des commentaires difficiles.',
    duree: '3 jours',
    niveau: 'Tous niveaux',
    programme: [
      'Bâtir un calendrier éditorial tenable',
      'Répondre aux avis négatifs sans envenimer',
      'Transformer un commentaire en commande',
      'Mesurer l’engagement qui compte vraiment',
    ],
  },
  {
    slug: 'montage-video',
    icone: 'Clapperboard',
    title: 'Montage de vidéo',
    pitch:
      'Monter des formats courts rythmés, sous-titrés et exportés au bon format pour chaque plateforme.',
    duree: '4 jours',
    niveau: 'Débutant',
    programme: [
      'Dérushage rapide et sélection des plans',
      'Rythme, coupes et transitions sobres',
      'Sous-titres automatiques puis corrigés',
      'Exports verticaux, carrés et horizontaux',
    ],
  },
  {
    slug: 'design',
    icone: 'Palette',
    title: 'Design',
    pitch:
      'Les règles visuelles qui séparent un visuel amateur d’un visuel professionnel : hiérarchie, espace, couleur.',
    duree: '4 jours',
    niveau: 'Débutant',
    programme: [
      'Hiérarchie visuelle et lisibilité',
      'Choisir et associer deux typographies',
      'Construire une palette cohérente',
      'Créer des modèles réutilisables',
    ],
  },
]

/* ---------------------------------------------------------- */

export type Projet = {
  client: string
  secteur: string
  mission: string
  resultat: string
  chiffre: string
  libelle: string
}

export const PROJETS: Projet[] = [
  {
    client: 'Boutique Mama Eyenga',
    secteur: 'Commerce · Yaoundé',
    mission: 'Site vitrine et catalogue, campagnes Facebook sur la clientèle du quartier Bastos.',
    resultat:
      'Les commandes passent désormais par le site plutôt que par des messages privés éparpillés, ce qui a libéré deux heures par jour à la gérante.',
    chiffre: '×3',
    libelle: 'commandes mensuelles',
  },
  {
    client: 'Kamer Food',
    secteur: 'Restauration · Douala',
    mission: 'Campagnes Facebook et TikTok sur la livraison du midi, avec tournage sur place.',
    resultat:
      'Coût par commande divisé par deux en six semaines, en supprimant les audiences trop larges héritées de l’ancienne agence.',
    chiffre: '−52 %',
    libelle: 'coût par commande',
  },
  {
    client: 'Cabinet Nkolo & Associés',
    secteur: 'Services juridiques · Yaoundé',
    mission: 'Refonte du site, prise de rendez-vous en ligne, contenus LinkedIn.',
    resultat:
      'Le cabinet reçoit des demandes qualifiées sans passer par le standard téléphonique, avec un créneau réservé directement par le client.',
    chiffre: '18',
    libelle: 'rendez-vous par mois',
  },
  {
    client: 'Atelier Tissa',
    secteur: 'Mode · Yaoundé',
    mission: 'Identité visuelle complète et animation Instagram.',
    resultat:
      'Une marque enfin reconnaissable d’une publication à l’autre, et un catalogue photographié qui sert aussi bien en ligne qu’en boutique.',
    chiffre: '+2 400',
    libelle: 'abonnés en 4 mois',
  },
]

export type Etape = { n: string; title: string; desc: string }

export const ETAPES: Etape[] = [
  {
    n: '01',
    title: 'Cadrage',
    desc: 'Un échange de 30 minutes pour comprendre votre activité, votre marché et vos objectifs de croissance.',
  },
  {
    n: '02',
    title: 'Conception',
    desc: 'Maquettes, ton éditorial et plan de campagne validés avec vous avant tout développement.',
  },
  {
    n: '03',
    title: 'Réalisation',
    desc: 'Développement du site et lancement des premières campagnes, avec points d’avancement réguliers.',
  },
  {
    n: '04',
    title: 'Optimisation',
    desc: 'Suivi des performances et ajustements continus pour améliorer le retour sur investissement.',
  },
]