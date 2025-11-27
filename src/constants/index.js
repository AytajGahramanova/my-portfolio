import assessment from "../assets/image/projects/assessment.png";
import githubProfile from "../assets/image/projects/githubProfile.png";
import aktasplastic from "../assets/image/projects/aktasplastik.png";
import minorgroup from "../assets/image/projects/minorgroup.png";
import ayuna from "../assets/image/projects/ayunaImage.png";
import stuhmer from "../assets/image/projects/stuhmer.png";

export const HERO_CONTENT = `I am a Full Stack Developer experienced in building modern, efficient, and user-centric web applications. 
On the frontend, I work with HTML, CSS, JavaScript, TypeScript, React.js, and Next.js to create responsive interfaces with smooth user experiences.
On the backend, I develop structured and reliable server-side logic using C#, ASP.NET Core, Entity Framework Core, and design optimized databases with MSSQL.

I combine creative thinking with analytical problem-solving and maintain strong attention to detail throughout the development process. As a collaborative team player, I contribute to building high-quality products, improving workflows, and driving innovation within projects.

 `;

export const EXPERIENCES = [
  {
    year: "09/2025 - 10/2025",
    role: "Frontend Developer",
    company: "Scorewatt",
    description: `During this project, I’ve been working with to solve real-world problems, fix bugs and implement new features.
This experience allows me to gain deeper hands-on knowledge in Front-End Development and improve my skills in code optimization.
`,
    technologies: ["Next.js", "TypeScript"],
  },
  {
    year: "08/2024 - 12/2024",
    role: "Frontend Developer",
    company: "Kvadrat MMC",
    description: `Worked closely with backend developers to integrate frontend components with APIs.Collaborating with the team on various stages of projects using React and Tailwind CSS.Expertise in creating efficient and high-performance web applications using Next.js.
`,
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Figma",
    ],
  },
  {
    year: "03/2024 - 08/2024",
    role: "Frontend Developer",
    company: "Khan Buta Group MMC",
    description: `Practices to improve the appearance of websites and solve errors.Updating the sites according to the customer's request.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
  {
    year: "07/2023 - 09/2023",
    role: "Frontend Developer",
    company: "Proton MMC",
    description: `Built responsive and accessible websites using Bootstrap, CSS, SCSS/SASS resulting in improved user engagement and experience.Created interactive web components and animations using JavaScript, resulting in visually appealing designs.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript"],
  },
];

export const PROJECTS = [
  {
    image: ayuna,
    title: "Ayuna",
    description:
      "This is a project for those interested in various types of accessories and gold items. This project is written with MVC logic.",
    technologies: ["#mvc"],
    // deploy: "https://flags-route.vercel.app/",
    github: "https://github.com/AytajGahramanova/Ayuna_BackEnd",
  },
  {
    title: "Minor Group",
    image: minorgroup,
    description:
      "Mainly react and sass are used for this site. Data comes from the API and is essentially synchronized to it.",
    technologies: ["#react", "#scss"],
    deploy: "https://minorgroup.az/",
    github: "https://github.com/gurularavel/minorfrontnew",
  },
  {
    title: "Github Profile",
    image: githubProfile,
    description:
      "GitHub searches for users by name and displays their profiles.Lists each user's GitHub repositories, so user profiles can be fully explored.",
    technologies: ["#html", "#css", "#javascript"],
    deploy: "https://create-git-hub.vercel.app/",
    github: "https://github.com/AytajGahramanova/createGitHub",
  },
  {
    title: "Assessment",
    image: assessment,
    description:
      "Coded using react hooks. It has the ability to change the color accordingly.",
    technologies: ["#react", "#css"],
    deploy: "https://custom-hooks-beta.vercel.app/",
    github: "https://github.com/AytajGahramanova/customHooks",
  },
  {
    title: "Aktas Plastik",
    image: aktasplastic,
    description:
      "It is a site about various types of plastic items. One of the technologies used is javascript.",
    technologies: ["#html", "#css", "#bootstrap", "#javascript"],
    deploy: "https://aktasplastik.az",
    github: "https://github.com/gurularavel/aktasplastik",
  },
  {
    title: "Stuhmer",
    image: stuhmer,
    description: "",
    technologies: ["#html", "#css", "#bootstrap", "#javascript"],
    deploy: "https://stuhmer.az/",
    github: "",
  },
];

export const CONTACT = {
  phoneNo: "+994 55 715 05 40 ",
  email: "aytac2003qehremanova@gmail.com",
};
