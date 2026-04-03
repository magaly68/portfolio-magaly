import { Component, HostListener, computed, signal } from '@angular/core';

type Metric = {
  value: string;
  label: string;
};

type Principle = {
  title: string;
  text: string;
};

type Milestone = {
  phase: string;
  title: string;
  text: string;
};

type FocusArea = {
  title: string;
  text: string;
};

type Project = {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly scrollProgress = signal(0);
  readonly selectedProjectId = signal('epiguard');
  readonly contactEmail = 'wintzer.magaly@gmail.com';
  readonly isSubmitting = signal(false);
  readonly submitState = signal<'idle' | 'success' | 'error'>('idle');
  readonly submitMessage = signal('');

  readonly metrics: Metric[] = [
    { value: '20', label: 'depots publics sur GitHub' },
    { value: '4', label: 'axes montres dans ce portfolio' },
    { value: '1', label: 'prototype mobile fort avec EpiGuard' }
  ];

  readonly principles: Principle[] = [
    {
      title: 'Clarte avant decoration',
      text: 'Je privilegie des interfaces lisibles, un rythme net et une hierarchie que l on comprend en quelques secondes.'
    },
    {
      title: 'Front-end vivant',
      text: 'J aime quand le mouvement sert la comprehension: etats, transitions, retour visuel et interactions utiles.'
    },
    {
      title: 'Apprentissage concret',
      text: 'Mes projets publics montrent une progression reelle entre HTML CSS, JavaScript, narration interactive, Linux et C.'
    }
  ];

  readonly milestones: Milestone[] = [
    {
      phase: 'Phase 01',
      title: 'Recits interactifs',
      text: 'Avec histoire_interactive, j ai explore Twine pour raconter une histoire a embranchements et transformer un outil narratif en experience web.'
    },
    {
      phase: 'Phase 02',
      title: 'Bases front-end solides',
      text: 'Les depots projet_html_css et 7697016-Front-End.1 montrent un travail autour du HTML, du CSS et des pages web dynamiques en JavaScript.'
    },
    {
      phase: 'Phase 03',
      title: 'Culture produit',
      text: 'EpiGuard marque une etape plus produit: surveillance, journal, urgence, profil medical et logique d usage mobile.'
    },
    {
      phase: 'Phase 04',
      title: 'Ouverture technique',
      text: 'project_linux documente le modele OSI, un TP Linux et un premier projet perso en C pour elargir la pratique au dela du navigateur.'
    }
  ];

  readonly focusAreas: FocusArea[] = [
    {
      title: 'Interfaces front-end',
      text: 'Structurer une page, poser une bonne hierarchie et rendre l interaction plus naturelle.'
    },
    {
      title: 'JavaScript concret',
      text: 'Passer du statique au dynamique avec des filtres, de la logique d affichage et des donnees externes.'
    },
    {
      title: 'Prototypes a usage reel',
      text: 'Imaginer des ecrans qui repondent a une situation precise, ici la surveillance et l urgence.'
    },
    {
      title: 'Fondamentaux systeme',
      text: 'Comprendre ce qu il se passe sous l interface avec Linux, reseau et premiers programmes en C.'
    }
  ];

  readonly projects: Project[] = [
    {
      id: 'epiguard',
      kicker: 'Prototype mobile',
      title: 'EpiGuard',
      summary: 'Un concept d application mobile centre sur la surveillance active, le journal des crises et l urgence.',
      detail:
        'Le projet articule un etat de monitoring fort, une navigation simple et des ecrans qui rassurent sans noyer l utilisateur.',
      outcomes: [
        'Ecran de surveillance avec etat actif immediat',
        'Journal filtrable et export medical',
        'Module SOS, contacts et montre connectee'
      ],
      stack: ['UX mobile', 'Prototype produit', 'Parcours sante'],
      repo: 'https://github.com/magaly68/epiguard',
      repoLabel: 'Voir le depot epiguard',
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
      kicker: 'Front-end dynamique',
      title: '7697016-Front-End.1',
      summary: 'Une base de travail OpenClassrooms pour creer des pages web dynamiques avec JavaScript.',
      detail:
        'Le depot montre une progression vers un front-end plus interactif avec HTML, CSS, fichiers JSON et scripts JavaScript dedies.',
      outcomes: [
        'Passage d une page statique a une page dynamique',
        'Manipulation de donnees JSON',
        'Organisation des scripts et de l interface'
      ],
      stack: ['HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/magaly68/7697016-Front-End.1',
      repoLabel: 'Voir le depot Front-End.1',
      visualStyle: 'signal',
      images: []
    },
    {
      id: 'story',
      kicker: 'Narration interactive',
      title: 'Histoire interactive',
      summary: 'Une experience realisee avec Twine autour de Lylah et la foret des reves.',
      detail:
        'Ce projet raconte une histoire a embranchements et montre une sensibilite a la narration, au rythme et au choix utilisateur.',
      outcomes: [
        'Scenario a embranchements',
        'Production HTML issue de Twine',
        'Premier travail d experience interactive'
      ],
      stack: ['Twine', 'HTML', 'Storytelling'],
      repo: 'https://github.com/magaly68/histoire_interactive',
      repoLabel: 'Voir le depot histoire_interactive',
      visualStyle: 'signal',
      images: []
    },
    {
      id: 'linux',
      kicker: 'Fondamentaux techniques',
      title: 'Project Linux',
      summary: 'Un depot qui rassemble un TP Linux, un document sur le modele OSI et un premier projet personnel en C.',
      detail:
        'Cette partie du parcours montre une curiosite qui depasse le front-end pur et un effort pour comprendre les bases reseau et systeme.',
      outcomes: [
        'Travail documente sur Linux et systeme',
        'Approche du modele OSI',
        'Premiers pas en C'
      ],
      stack: ['Linux', 'Systeme', 'C'],
      repo: 'https://github.com/magaly68/project_linux',
      repoLabel: 'Voir le depot project_linux',
      visualStyle: 'signal',
      images: []
    }
  ];

  readonly selectedProject = computed(
    () => this.projects.find((project) => project.id === this.selectedProjectId()) ?? this.projects[0]
  );

  readonly heroVisualTransform = computed(
    () => `translate3d(0, ${Math.min(this.scrollProgress(), 1.15) * 32}px, 0)`
  );

  readonly haloTransform = computed(
    () => `scale(${1 + Math.min(this.scrollProgress(), 1) * 0.08})`
  );

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const viewportHeight = window.innerHeight || 1;
    this.scrollProgress.set(Math.min(window.scrollY / viewportHeight, 1.25));
  }

  selectProject(projectId: string): void {
    this.selectedProjectId.set(projectId);
  }

  async submitContactForm(
    event: Event,
    name: string,
    email: string,
    subject: string,
    message: string,
    honey: string
  ): Promise<void> {
    event.preventDefault();

    if (this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    this.submitState.set('idle');
    this.submitMessage.set('');

    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('email', email.trim());
    formData.append('subject', subject.trim());
    formData.append('message', message.trim());
    formData.append('_subject', `Portfolio Magaly - ${subject.trim()}`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');
    formData.append('_honey', honey);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.contactEmail}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      this.submitState.set('success');
      this.submitMessage.set(
        'Message envoye. Verifiez votre boite Gmail pour confirmer FormSubmit lors du tout premier envoi.'
      );

      const form = event.target as HTMLFormElement | null;
      form?.reset();
    } catch {
      this.submitState.set('error');
      this.submitMessage.set(
        'Le formulaire n a pas pu etre envoye. Vous pouvez aussi me contacter directement par email.'
      );
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
