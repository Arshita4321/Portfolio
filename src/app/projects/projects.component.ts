import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Array<any> = [
    {
      name: "WitWizHub- Study planner",
      description: "An Excel-based dashboard to analyze crop production with interactive filters and toggles for light/dark modes. Ideal for data-driven agricultural insights.",
      image: "assets/img/witwizhub.png",
      github: false,
      view: "https://github.com/Arshita4321/WitWizHub",
      status: true,
      date: "June - Present",
      demo: true,
      tech: [
        { name: "NodeJS", image: "assets/img/nodejs.svg" },
        { name: "MongoDB", image: "assets/img/mongodb.svg" },
        { name: "Bootstrap", image: "assets/img/bootstrap.svg" },
        { name: "Material-UI", image: "assets/img/material-ui.svg" },
        { name: "React", image: "assets/img/react.svg" },
        { name: "Tailwind CSS", image: "assets/img/tailwindcss.svg" },
        { name: "Hoppscotch", image: "assets/img/hoppscotch.svg" },
      ]
    },
    {
      name: "JobPortal",
      description: "A web-based job portal where users can apply for jobs, manage applications, and view job listings. Built using a robust Node.js backend and styled for a clean user experience.",
      image: "assets/img/jobportal.png",
      github: "https://github.com/Arshita4321/JobPortal",
      view: false,
      status: true,
      date: "December - Present",
      demo: true,
      tech: [
        { name: "NodeJS", image: "assets/img/nodejs.svg" },
        { name: "Express", image: "assets/img/Express.svg" },
        { name: "MongoDB", image: "assets/img/mongodb.svg" },
        { name: "HTML", image: "assets/img/html5.svg" },
        { name: "CSS", image: "assets/img/css3.svg" },
        { name: "Bootstrap", image: "assets/img/bootstrap.svg" },
      ]
    },
    {
      name: "Ghoomi Ghoomi",
      description: "A travel website designed for explorers to discover and plan trips. Features dynamic destination listings and user-friendly filters.",
      image: "assets/img/ghoomi.png",
      github: "https://github.com/Arshita4321/Ghoomi-Ghoomi-A-travelling-website",
      view: false,
      status: true,
      date: "June - 2025",
      demo: true,
      tech: [
        { name: "NodeJS", image: "assets/img/nodejs.svg" },
        { name: "Express", image: "assets/img/Express.svg" },
        { name: "MongoDB", image: "assets/img/mongodb.svg" },
        { name: "HTML", image: "assets/img/html5.svg" },
        { name: "CSS", image: "assets/img/css3.svg" },
        { name: "Bootstrap", image: "assets/img/bootstrap.svg" },
      ]
    },
    {
      name: "QuiteTales",
      description: "A storytelling platform where users can read and write short stories across categories. Built using React for a smooth, interactive reading experience.",
      image: "assets/img/quitetales.png",
      github: "https://github.com/Arshita4321/QuiteTales",
      view: false,
      status: true,
      date: "March - Present",
      demo: true,
      tech: [
        { name: "React", image: "assets/img/react.svg" },
        { name: "CSS", image: "assets/img/css3.svg" },
        { name: "HTML", image: "assets/img/html5.svg" },
        { name: "Material UI", image: "assets/img/material-ui.svg" },
      ]
    },
    {
      name: "WildGuard",
      description: "An analytics dashboard to track poaching crimes and predict risk zones using filters for species, states, and number of cases. Includes data visualization and forecasting.",
      image: "assets/img/wildgaurd.png",
      github: "https://github.com/Arshita4321/WildGaurd-wildlife-poaching-and-their-conservation",
      view: "https://www.linkedin.com/feed/update/urn:li:activity:7316425661802299392/",
      status: true,
      date: "February - 2025",
      demo: true,
      tech: [
        { name: "Python", image: "assets/img/python.svg" },
        { name: "HTML", image: "assets/img/html5.svg" },
        { name: "CSS", image: "assets/img/css3.svg" },
      ]
    },
    {
      name: "Crop Analytics",
      description: "An Excel-based dashboard to analyze crop production with interactive filters and toggles for light/dark modes. Ideal for data-driven agricultural insights.",
      image: "assets/img/cropanalytics.png",
      github: false,
      view: "https://www.linkedin.com/feed/update/urn:li:activity:7315828776007782404/",
      status: true,
      date: "January - 2025",
      demo: true,
      tech: [
        { name: "Excel", image: "assets/img/excel.svg" },
      ]
    }
  ];
}

