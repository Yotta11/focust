/* Contenu éditorial centralisé : la page Accueil pioche dedans pour ses
   aperçus, les pages dédiées affichent tout. Une seule source de vérité. */

export type Service = {
  slug: string
  title: string
  pitch: string
  delivrables: string[]
  delai: string
}

export const SERVICES: Service[] = [
  {
    slug: 'sites-web',
    title: 'Sites web rapides',
    pitch:
      'Un site qui charge en moins de deux secondes sur une connexion 3G, parce que c’est celle de la majorité de vos clients.',
    delivrables: [
      'Design sur mesure, validé avant développement',
      'Version mobile pensée en premier',
      'Formulaire relié à votre WhatsApp Business',
      'Formation à la mise à jour du contenu',
    ],
    delai: '12 jours ouvrés',
  },
  {
    slug: 'facebook-ads',
    title: 'Campagnes Facebook & Instagram',
    pitch:
      'Des campagnes construites sur vos marges réelles, pas sur des impressions. On coupe ce qui ne convertit pas.',
    delivrables: [
      'Audit du compte publicitaire existant',
      'Ciblage bâti sur vos clients actuels',
      'Trois visuels testés par audience',
      'Rapport chiffré chaque semaine',
    ],
    delai: 'Premiers résultats sous 10 jours',
  },
  {
    slug: 'tiktok-ads',
    title: 'TikTok & contenus courts',
    pitch:
      'Le format qui coûte le moins cher au Cameroun en ce moment. Encore faut-il tourner pour la plateforme, pas pour la télévision.',
    delivrables: [
      'Scénarios écrits pour le scroll',
      'Tournage et montage vertical',
      'Sous-titres intégrés',
      'Déclinaison Reels et Shorts',
    ],
    delai: '8 vidéos par mois',
  },
  {
    slug: 'reseaux-sociaux',
    title: 'Animation de pages',
    pitch:
      'Publier régulièrement ne suffit pas. On répond aux commentaires, on relance les messages privés, on transforme l’audience en commandes.',
    delivrables: [
      'Calendrier éditorial mensuel',
      'Visuels aux couleurs de votre marque',
      'Modération et réponses sous deux heures',
      'Suivi des demandes entrantes',
    ],
    delai: 'Engagement mensuel',
  },
  {
    slug: 'identite',
    title: 'Identité visuelle',
    pitch:
      'Logo, palette, typographies et modèles réutilisables. De quoi rester reconnaissable partout où vous publiez.',
    delivrables: [
      'Trois pistes de logo',
      'Charte graphique en PDF',
      'Modèles Canva prêts à l’emploi',
      'Fichiers sources livrés',
    ],
    delai: '3 semaines',
  },
  {
    slug: 'conseil',
    title: 'Accompagnement stratégique',
    pitch:
      'Pour les équipes qui gèrent déjà leur communication en interne et veulent un regard extérieur chaque mois.',
    delivrables: [
      'Point mensuel de deux heures',
      'Lecture des chiffres avec vous',
      'Priorités du mois écrites',
      'Accès direct par WhatsApp',
    ],
    delai: 'Sans engagement',
  },
]

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
