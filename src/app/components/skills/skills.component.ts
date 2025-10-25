import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Programming',
      skills: [
        { name: 'Python', level: 95, icon: '🐍' },
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'Angular', level: 88, icon: '🅰️' },
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Shell Scripting', level: 80, icon: '💻' }
      ]
    },
    {
      category: 'Data & Cloud',
      skills: [
        { name: 'Firebase', level: 90, icon: '🔥' },
        { name: 'BigQuery', level: 85, icon: '📊' },
        { name: 'Azure', level: 85, icon: '☁️' },
        { name: 'MySQL', level: 88, icon: '🗄️' },
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Power BI', level: 85, icon: '📈' }
      ]
    },
    {
      category: 'AI & Tools',
      skills: [
        { name: 'Machine Learning', level: 90, icon: '🤖' },
        { name: 'TensorFlow', level: 85, icon: '🧠' },
        { name: 'CI/CD', level: 88, icon: '⚙️' },
        { name: 'Git', level: 95, icon: '📚' },
        { name: 'Tableau', level: 85, icon: '📊' },
        { name: 'OpenCV', level: 80, icon: '👁️' }
      ]
    }
  ];
}

