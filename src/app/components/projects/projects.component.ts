import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'AI CCTV Analyzer',
      description: 'Converts hours of surveillance video into machine-readable events using computer vision and generative AI for automated analysis and reporting.',
      tags: ['Python', 'OpenCV', 'Gemini 2.0', 'AI'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
      githubUrl: 'https://github.com/S0307-shar/cc-vid-logging-analysis'
    },
    {
      title: 'Profit Prediction System',
      description: 'Machine learning model predicting business profit drivers with 97% accuracy using automated ML pipelines and advanced analytics.',
      tags: ['PyCaret', 'Machine Learning', 'Python', 'Analytics','Regression Model'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      githubUrl: 'https://github.com/S0307-shar/prediction-model-profit'
    },
    {
      title: 'Object & Motion Detection',
      description: 'Real-time sports analytics system reducing decision-making time by 18% through automated object tracking and motion analysis.',
      tags: ['TensorFlow', 'Scikit-learn', 'Computer Vision', 'Python','YOLO v8','Mediapipe'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      githubUrl: 'https://github.com/S0307-shar/object-and-motion-analysis'
    },
    {
      title: 'Bankruptcy Prediction Tool',
      description: 'Real-time web-based financial prediction system using logistic regression deployed with ONNX.js for instant analysis.',
      tags: ['Logistic Regression', 'ONNX.js', 'JavaScript', 'ML'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      githubUrl: '#'
    },
    {
      title: 'Data Analysis for Supply Chain',
      description: 'Developed advanced digital twin simulations for manufacturing and IoT applications, improving operational efficiency.',
      tags: ['Python','Data Analytics', 'Simulation','Data Visualization'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
      githubUrl: '#'
    },

  ];

  selectedFilter: string = 'all';

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(project => 
      project.tags.some(tag => tag.toLowerCase().includes(this.selectedFilter.toLowerCase()))
    );
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
}

