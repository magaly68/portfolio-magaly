export type Metric = {
  value: string;
  label: string;
};

export type Principle = {
  title: string;
  text: string;
};

export type Milestone = {
  phase: string;
  title: string;
  text: string;
};

export type FocusArea = {
  title: string;
  text: string;
};

export type Project = {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  detail: string;
  outcomes: string[];
  stack: string[];
  repo: string;
  repoLabel: string;
  visualStyle: 'mobile' | 'signal';
  images: string[];
};

export const portfolioContent = {
  fullName: 'Magaly Wintzer',
  handle: 'magaly68',
  contactEmail: 'wintzer.magaly@gmail.com',
  portfolioUrl: 'https://portfolio-magaly.vercel.app',
  cvUrl: '/documents/Magaly-Wintzer-CV.pdf',
  hero: {
    eyebrow: 'Portfolio 2026 / Angular',
    title: "Je conçois des interfaces front-end sobres, utiles et pensées pour être comprises rapidement.",
    text:
      "Je m'appelle Magaly Wintzer. À partir de mon profil GitHub public, du projet EpiGuard et de plusieurs dépôts personnels, ce portfolio raconte un parcours en construction entre HTML, CSS, JavaScript, Angular, prototypes mobiles et curiosité technique.",
    projectsCta: 'Voir les projets',
    cvCta: 'Télécharger le CV',
    githubCta: 'Ouvrir GitHub',
    noteTitle: "Intentions d'interaction",
    noteText: "Révélation progressive, rail de projets interactif et héros qui réagit au défilement."
  },
  intro: {
    eyebrow: 'Profil',
    title:
      "Un parcours qui avance par projets, avec une attention réelle pour la lisibilité, l'usage et le rythme d'une interface.",
    paragraphs: [
      "Je travaille le front-end comme un espace de clarté. J'aime organiser une page, faire ressortir l'information essentielle et donner à chaque interaction une raison d'être.",
      "Mes projets publics montrent cette progression : des bases HTML et CSS jusqu'à des interfaces plus denses, des expériences narratives et un prototype mobile pensé comme un vrai produit."
    ]
  },
  timeline: {
    eyebrow: 'Parcours',
    title:
      "Le fil conducteur reste le même : apprendre en fabriquant, puis rendre chaque projet plus lisible et plus utile que le précédent."
  },
  projectsSection: {
    eyebrow: 'Projets choisis',
    title: "Une sélection courte pour comprendre comment je passe d'une idée à une interface concrète."
  },
  focusSection: {
    eyebrow: 'Axes de travail',
    title:
      "Le cœur de ce que je développe aujourd'hui : interface, logique front-end, produit et fondamentaux techniques."
  },
  contactSection: {
    eyebrow: 'Contact',
    title: "Parlons d'un stage, d'une mission ou d'un projet à construire.",
    text:
      "Le portfolio renvoie vers GitHub, mais vous pouvez aussi me contacter directement depuis cette page ou télécharger un CV de synthèse. Les messages sont transmis à wintzer.magaly@gmail.com.",
    cvCta: 'Télécharger le CV',
    githubCta: 'Aller sur GitHub',
    emailCta: 'Envoyer un email direct',
    successMessage:
      "Message envoyé. Vérifiez votre boîte Gmail pour confirmer FormSubmit lors du tout premier envoi.",
    errorMessage:
      "Le formulaire n'a pas pu être envoyé. Vous pouvez aussi me contacter directement par email."
  },
  formLabels: {
    name: 'Nom',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',
    submit: 'Envoyer le message',
    pending: 'Envoi en cours...'
  },
  metrics: [
    { value: '20', label: 'dépôts publics sur GitHub' },
    { value: '4', label: 'projets choisis pour raconter le parcours' },
    { value: '1', label: 'portfolio Angular mis en ligne sur Vercel' }
  ] satisfies Metric[],
  principles: [
    {
      title: 'Des interfaces qui respirent',
      text: "Je privilégie des écrans lisibles, des sections qui ont chacune un rôle clair et une hiérarchie qu'on comprend vite."
    },
    {
      title: 'Un mouvement utile',
      text: "J'aime quand le front-end répond visuellement sans bruit : états, transitions, retours visuels et interactions qui guident."
    },
    {
      title: 'Apprendre par projets réels',
      text: 'Mes dépôts publics montrent une progression concrète entre HTML, CSS, JavaScript, narration interactive, Linux et C.'
    }
  ] satisfies Principle[],
  milestones: [
    {
      phase: 'Phase 01',
      title: 'Récits interactifs',
      text: "Avec histoire_interactive, j'ai travaillé la logique de choix, le rythme et la narration à embranchements dans une expérience web."
    },
    {
      phase: 'Phase 02',
      title: 'Bases front-end solides',
      text: 'Les dépôts projet_html_css et 7697016-Front-End.1 montrent la transition du statique vers des pages plus dynamiques avec JavaScript.'
    },
    {
      phase: 'Phase 03',
      title: 'Culture produit',
      text: "EpiGuard marque une étape plus produit avec une logique mobile complète : surveillance, journal, urgence, montre connectée et profil."
    },
    {
      phase: 'Phase 04',
      title: 'Ouverture technique',
      text: 'project_linux élargit la pratique au-delà du navigateur avec Linux, réseau et premiers pas en C.'
    }
  ] satisfies Milestone[],
  focusAreas: [
    {
      title: 'Angular et interfaces',
      text: "Structurer une page, découper une interface et donner une vraie présence visuelle à un projet front-end."
    },
    {
      title: 'JavaScript concret',
      text: "Passer du statique au dynamique avec des filtres, de la logique d'affichage et des données qui racontent quelque chose."
    },
    {
      title: 'Prototypes à usage réel',
      text: "Imaginer des écrans qui répondent à une situation précise, ici la surveillance, l'urgence et la réassurance."
    },
    {
      title: 'Fondamentaux système',
      text: "Comprendre ce qu'il se passe sous l'interface avec Linux, réseau et premiers programmes en C."
    }
  ] satisfies FocusArea[],
  projects: [
    {
      id: 'epiguard',
      kicker: 'Prototype mobile',
      title: 'EpiGuard',
      summary: "Un concept d'application mobile centré sur la surveillance active, le journal des crises et les gestes d'urgence.",
      detail:
        "Le projet articule un état de monitoring très lisible, une navigation simple et des écrans qui rassurent sans surcharger.",
      outcomes: [
        'Écran de surveillance avec état actif immédiat',
        'Journal filtrable et export médical',
        'Module SOS, contacts et montre connectée'
      ],
      stack: ['UX mobile', 'Prototype produit', 'Parcours santé'],
      repo: 'https://github.com/magaly68/epiguard',
      repoLabel: 'Voir le dépôt epiguard',
      visualStyle: 'mobile',
      images: [
        '/projects/Screenshot_20260329_145746_EpiGuard.jpg',
        '/projects/Screenshot_20260329_145812_EpiGuard.jpg',
        '/projects/Screenshot_20260329_145854_EpiGuard.jpg',
        '/projects/Screenshot_20260329_145958_EpiGuard.jpg'
      ]
    },
    {
      id: 'frontend',
      kicker: 'Projet OpenClassrooms',
      title: 'Front-End.1',
      summary: 'Une base de travail pour construire une page web dynamique en JavaScript.',
      detail:
        'Le dépôt montre une progression vers un front-end plus interactif avec HTML, CSS, fichiers JSON et scripts JavaScript dédiés.',
      outcomes: [
        "Passage d'une page statique à une page dynamique",
        'Manipulation de données JSON',
        "Organisation des scripts et de l'interface"
      ],
      stack: ['HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/magaly68/7697016-Front-End.1',
      repoLabel: 'Voir le dépôt 7697016-Front-End.1',
      visualStyle: 'signal',
      images: []
    },
    {
      id: 'story',
      kicker: 'Narration interactive',
      title: 'Histoire interactive',
      summary: 'Une expérience réalisée avec Twine autour de Lylah et la forêt des rêves.',
      detail:
        'Ce projet raconte une histoire à embranchements et montre une sensibilité à la narration, au rythme et au choix utilisateur.',
      outcomes: [
        'Scénario à embranchements',
        'Production HTML issue de Twine',
        "Premier travail d'expérience interactive"
      ],
      stack: ['Twine', 'HTML', 'Storytelling'],
      repo: 'https://github.com/magaly68/histoire_interactive',
      repoLabel: 'Voir le dépôt histoire_interactive',
      visualStyle: 'signal',
      images: []
    },
    {
      id: 'linux',
      kicker: 'Fondamentaux techniques',
      title: 'Projet Linux',
      summary: 'Un dépôt qui rassemble un TP Linux, un document sur le modèle OSI et un premier projet personnel en C.',
      detail:
        "Cette partie du parcours montre une curiosité qui dépasse le front-end pur et un effort pour comprendre les bases réseau et système.",
      outcomes: [
        'Travail documenté sur Linux et système',
        'Approche du modèle OSI',
        'Premiers pas en C'
      ],
      stack: ['Linux', 'Système', 'C'],
      repo: 'https://github.com/magaly68/project_linux',
      repoLabel: 'Voir le dépôt project_linux',
      visualStyle: 'signal',
      images: []
    }
  ] satisfies Project[]
};
