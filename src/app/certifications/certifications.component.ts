import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  loading = true;

  certifications = [
    {
      title: 'Cloud Computing (NPTEL)',
      description: 'Successfully completed an in-depth course on Cloud Computing concepts, service models, virtualization, and distributed systems through NPTEL, demonstrating strong understanding of cloud architectures and deployment strategies.',
      image: 'assets/img/cloud-computing.png',
      date: '2024-05-12',
      tags: [{ name: 'Cloud', color: '#4CAF50' }, { name: 'NPTEL', color: '#2196F3' }]
    },
    {
      title: 'Database Structures and Management with MySQL (Meta)',
      description: 'Gained hands-on expertise in designing, implementing, and optimizing relational databases using MySQL, covering schema design, indexing, query optimization, and data security best practices.',
      image: 'assets/img/meta.png',
      date: '2023-12-01',
      tags: [{ name: 'Database', color: '#FF9900' }, { name: 'MySQL', color: '#607D8B' }]
    },
    {
      title: 'Data Analytics Job Simulation (Deloitte)',
      description: 'Completed a Deloitte virtual job simulation, performing real-world data analysis tasks including data cleaning, trend identification, and generating actionable business insights for decision-making.',
      image: 'assets/img/deloitte.png',
      date: '2023-12-01',
      tags: [{ name: 'Data Analytics', color: '#4CAF50' }, { name: 'Deloitte', color: '#607D8B' }]
    },
    {
      title: 'Full Stack Web Development',
      description: 'Acquired full-stack development skills in MERN stack (MongoDB, Express, React, Node.js) including API creation, frontend UI/UX design, and database integration for dynamic web applications.',
      image: 'assets/img/mern.png',
      date: '2023-12-01',
      tags: [{ name: 'Web Development', color: '#FF9900' }, { name: 'MERN', color: '#607D8B' }]
    },
    {
      title: 'Build Generative AI Apps and Solutions with No-Code Tools',
      description: 'Learned to design and deploy AI-driven applications using no-code platforms, focusing on Generative AI solutions for content creation, automation, and business process optimization.',
      image: 'assets/img/genai.png',
      date: '2023-12-01',
      tags: [{ name: 'AI', color: '#4CAF50' }, { name: 'No-Code', color: '#607D8B' }]
    },
    {
      title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
      description: 'Mastered prompt engineering techniques for ChatGPT-4 and other large language models, enabling precise and context-aware AI responses for various real-world applications.',
      image: 'assets/img/prompt.png',
      date: '2023-12-01',
      tags: [{ name: 'Generative AI', color: '#FF9900' }, { name: 'Prompt Engineering', color: '#607D8B' }]
    }
  ];

  ngOnInit(): void {
    timer(1000).subscribe(() => this.loading = false);
  }
}
