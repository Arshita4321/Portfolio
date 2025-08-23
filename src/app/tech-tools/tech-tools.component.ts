import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
                modern frameworks and
                languages to powerful platforms, my toolkit ensures high-quality and efficient development. 🚀 🌟`
  items: Array<any> = [
  {
    name: "PHP",
    description: "PHP is a popular general-purpose scripting language that is especially suited for web development.",
    link: "https://www.php.net/",
    image: "assets/img/php.svg"
  },
  {
    name: "Java",
    description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    link: "https://dev.java",
    image: "assets/img/java.svg"
  },
  {
    name: "C++",
    description: "C++ is a general-purpose programming language created as an extension of the C programming language.",
    link: "https://cplusplus.com",
    image: "assets/img/cpp.svg"
  },
  {
    name: "C",
    description: "C is a general-purpose, procedural computer programming language supporting structured programming.",
    link: "https://www.learn-c.org/",
    image: "assets/img/C.svg"
  },
  {
    name: "Python",
    description: "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability.",
    link: "https://www.python.org/",
    image: "assets/img/python.svg"
  },
  {
    name: "Angular",
    description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    link: "https://angular.io",
    image: "assets/img/angular17.svg"
  },
  {
    name: "Django",
    description: "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
    link: "https://www.djangoproject.com/",
    image: "assets/img/django.svg"
  },
  {
    name: "Tailwind CSS",
    description: "Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.",
    link: "https://tailwindcss.com/",
    image: "assets/img/tailwindcss.svg"
  },
  {
    name: "JavaScript",
    description: "JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "assets/img/js.svg"
  },
  {
    name: "Bootstrap",
    description: "Bootstrap is a popular open-source CSS framework for developing responsive and mobile-first websites.",
    link: "https://getbootstrap.com/",
    image: "assets/img/bootstrap.svg"
  },
  {
    name: "Material UI",
    description: "Material UI is a popular React UI framework that implements Google's Material Design.",
    link: "https://mui.com/",
    image: "assets/img/material-ui.svg"
  },
  {
    name: "Express",
    description: "Express is a minimal and flexible Node.js web application framework.",
    link: "https://expressjs.com/",
    image: "assets/img/Express.svg"
  },
  {
    name: "HTML5",
    description: "HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    image: "assets/img/html5.svg"
  },
  {
    name: "CSS3",
    description: "CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    image: "assets/img/css3.svg"
  },
  {
    name: "jQuery",
    description: "jQuery is a fast, small, and feature-rich JavaScript library that simplifies things like HTML document traversal and manipulation.",
    link: "https://jquery.com/",
    image: "assets/img/jquery.svg"
  },
  {
    name: "Vite",
    description: "Vite is a modern build tool that provides a fast development environment and optimized builds.",
    link: "https://vitejs.dev/",
    image: "assets/img/vitejs.svg"
  },
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces, maintained by Meta.",
    link: "https://react.dev",
    image: "assets/img/react.svg"
  },
  {
    name: "MySQL",
    description: "MySQL is an open-source relational database management system based on SQL (Structured Query Language).",
    link: "https://www.mysql.com/",
    image: "assets/img/mysql.svg"
  },
  {
    name: "MongoDB",
    description: "MongoDB is a document database, which means it stores data in JSON-like documents.",
    link: "https://www.mongodb.com/",
    image: "assets/img/mongodb.svg"
  },
  {
    name: "GitHub",
    description: "GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.",
    link: "https://github.com/",
    image: "assets/img/github.svg"
  },
  {
    name: "Figma",
    description: "Figma is a powerful, collaborative design tool for teams. Explore ideas and gather feedback, build realistic prototypes.",
    link: "https://www.figma.com",
    image: "assets/img/figma.svg"
  },
  {
    name: "Hoppscotch",
    description: "Hoppscotch is an open-source API development ecosystem.",
    link: "https://hoppscotch.io/",
    image: "assets/img/hoppscotch.svg"
  },
  {
    name: "Linux",
    description: "Linux is a free and open-source operating system kernel used in many distributions for servers, desktops, and embedded systems.",
    link: "https://ubuntu.com/",
    image: "assets/img/linux.svg"
  },
  {
    name: "Ubuntu",
    description: "Ubuntu is a popular free and open-source Linux-based operating system, is used for a wide range of purposes, including powering desktops, servers, cloud platforms.",
    link: "https://www.kernel.org/",
    image: "assets/img/ubuntu.svg"
  },
  {
    name: "Visual Studio Code",
    description: "Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.",
    link: "https://code.visualstudio.com/",
    image: "assets/img/vscode.svg"
  },
  {
    name: "ChatGPT",
    description: "ChatGPT is an AI chatbot developed by OpenAI, is used for content writing, and assisting with coding, all through natural language processing.",
    link: "https://chatgpt.com/",
    image: "assets/img/openai.svg"
  },
  {
    name: "TypeScript",
    description: "TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.",
    link: "https://www.typescriptlang.org/",
    image: "assets/img/typescript.svg"
  },
  {
    name: "Power BI",
    description: "Power BI is a business analytics tool by Microsoft that provides interactive visualizations and business intelligence.",
    link: "https://powerbi.microsoft.com/",
    image: "assets/img/power-bi.svg"
  },
  {
    name: "Excel",
    description: "Microsoft Excel is a spreadsheet developed by Microsoft used for data analysis and visualization.",
    link: "https://www.microsoft.com/en-us/microsoft-365/excel",
    image: "assets/img/excel.svg"
  },
  {
    name: "IntelliJ",
    description: "IntelliJ IDEA is a powerful Java integrated development environment (IDE) for developing computer software.",
    link: "https://www.jetbrains.com/idea/",
    image: "assets/img/IntelliJ.svg"
  },
  {
    name: "Node.js",
    description: "Node.js is an open-source, cross-platform JavaScript runtime environment.",
    link: "https://nodejs.org/",
    image: "assets/img/nodejs.svg"
  }
];

}
