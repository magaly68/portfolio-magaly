import { Component, HostListener, computed, signal } from '@angular/core';

import { portfolioContent } from './portfolio-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly content = portfolioContent;
  readonly scrollProgress = signal(0);
  readonly selectedProjectId = signal('epiguard');
  readonly fullName = this.content.fullName;
  readonly contactEmail = this.content.contactEmail;
  readonly portfolioUrl = this.content.portfolioUrl;
  readonly cvUrl = this.content.cvUrl;
  readonly isSubmitting = signal(false);
  readonly submitState = signal<'idle' | 'success' | 'error'>('idle');
  readonly submitMessage = signal('');

  readonly metrics = this.content.metrics;
  readonly principles = this.content.principles;
  readonly milestones = this.content.milestones;
  readonly focusAreas = this.content.focusAreas;
  readonly projects = this.content.projects;

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
      this.submitMessage.set(this.content.contactSection.successMessage);

      const form = event.target as HTMLFormElement | null;
      form?.reset();
    } catch {
      this.submitState.set('error');
      this.submitMessage.set(this.content.contactSection.errorMessage);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
