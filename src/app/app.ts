import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { portfolioContent } from './portfolio-content';

type SubmitState = 'idle' | 'success' | 'error';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  content = portfolioContent;

  metrics = this.content.metrics;
  principles = this.content.principles;
  milestones = this.content.milestones;
  projects = this.content.projects;
  focusAreas = this.content.focusAreas;

  selectedProjectId = signal(this.projects[0]?.id ?? '');
  selectedProject = computed(
    () =>
      this.projects.find((project) => project.id === this.selectedProjectId()) ??
      this.projects[0]
  );

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  private submitting = signal(false);
  private submitStatus = signal<SubmitState>('idle');
  private submitFeedback = signal('');

  constructor(private http: HttpClient) {}

  isSubmitting() {
    return this.submitting();
  }

  submitState() {
    return this.submitStatus();
  }

  submitMessage() {
    return this.submitFeedback();
  }

  selectProject(projectId: string) {
    this.selectedProjectId.set(projectId);
  }

  sendMessage() {
    if (
      !this.formData.name.trim() ||
      !this.formData.email.trim() ||
      !this.formData.subject.trim() ||
      !this.formData.message.trim()
    ) {
      this.submitStatus.set('error');
      this.submitFeedback.set('Merci de remplir tous les champs.');
      return;
    }

    this.submitting.set(true);
    this.submitStatus.set('idle');
    this.submitFeedback.set('');

    const formPayload = new FormData();
    formPayload.append('name', this.formData.name);
    formPayload.append('email', this.formData.email);
    formPayload.append('subject', this.formData.subject);
    formPayload.append('message', this.formData.message);

    // Remplace TON_ENDPOINT_FORMSUBMIT par ton vrai endpoint si nécessaire
    this.http
      .post('https://formsubmit.co/ajax/wintzer.magaly@gmail.com', formPayload, {
        headers: {
          Accept: 'application/json'
        }
      })
      .pipe(finalize(() => this.submitting.set(false)))
      .subscribe({
        next: () => {
          this.submitStatus.set('success');
          this.submitFeedback.set(this.content.contactSection.successMessage);

          this.formData = {
            name: '',
            email: '',
            subject: '',
            message: ''
          };
        },
        error: () => {
          this.submitStatus.set('error');
          this.submitFeedback.set(this.content.contactSection.errorMessage);
        }
      });
  }
}