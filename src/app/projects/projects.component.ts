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
      name: "Student Placement Readiness Prediction Model",
      description: "A machine learning–based predictive analytics project that analyzes primary data collected from students to classify placement readiness. The system evaluates academic performance, study habits, stress levels, and AI tool usage using multiple ML models with visual insights and comparative evaluation.",
      image: "assets/img/placement.png",
      github: "https://github.com/Arshita4321/Placement-Readiness-Prediction-Model",
      view: "https://github.com/Arshita4321/Placement-Readiness-Prediction-Model",
      status: true,
      date: "December 2025",
      demo: true,
      tech: [
        { name: "Python", image: "assets/img/python.svg" },
        { name: "Pandas", image: "assets/img/pandas.png" },
        { name: "NumPy", image: "assets/img/numpy.png" },
        { name: "Scikit-learn", image: "assets/img/sckit-learn.png" },
        { name: "Matplotlib", image: "assets/img/matplotlib.jpg" },
        { name: "Seaborn", image: "assets/img/seaborn.png" },
      ]
    }, 
    {
      name: "WHO Air Pollution Analytics",
      description: "An interactive Power BI dashboard that analyzes global air quality using WHO data. The dashboard provides insights into pollution trends, monitoring stations, AQI levels, and regional variations through dynamic KPIs, maps, and advanced visualizations.",
      image: "assets/img/dashboard.png",
      github: false,
      view: "https://www.linkedin.com/posts/arshita-thakur-25b082294_i-recently-built-an-air-pollution-analysis-activity-7404959259202879488-3-lY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEczlucBuWOIts1kYX2d-vG-j46XslQxJTE",
      status: true,
      date: "December 2025",
      demo: true,
      tech: [
        { name: "Power BI", image: "assets/img/powerbi.jpg" },
        { name: "Power Query", image: "assets/img/powerquery.jpg" },
        { name: "DAX", image: "assets/img/dax.png" },
        { name: "Microsoft Excel", image: "assets/img/excel.svg" },
      ]
    },
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

