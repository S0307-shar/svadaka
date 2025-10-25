import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  experiences = [
    {
      title: 'Product Engineer',
      company: 'Workcuit AI',
      period: 'Feb 2025 – Present',
      description: 'Founding Member shaping product strategy, feature development, and technical decision-making for AI-driven operational intelligence platforms. Collaborated on system architecture, documentation frameworks, and cross-platform development initiatives.'
    },
    {
      title: 'Research & Student Assistant',
      company: 'Purdue University Northwest',
      period: 'Jan 2023 – Dec 2024',
      description: 'Developed AI-driven simulation models and data pipelines using Python to optimize industrial efficiency and support data-driven decision-making in digital twin research.'
    },
    {
      title: 'Associate Technical Engineer',
      company: 'IBM – Kyndryl',
      period: 'Dec 2021 – Dec 2022',
      description: 'Managed 5K+ Linux/Unix servers; automated monitoring systems; improved uptime and security through proactive maintenance.'
    }
  ];
}

