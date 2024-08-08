import jobListingImg from "../assets/projects/joblisting.png";
import githubSearchImg from "../assets/projects/githubUserSearch.png";
import foodOrderImg from "../assets/projects/foodApp.png";
import tbcXusaidImg from "../assets/projects/TBCxUSAID.png";
import investmentImg from "../assets/projects/investmentApp.png";
import sentobarImg from "../assets/projects/SENTOBAR.png";
import diceGameImg from "../assets/projects/dice-game.png";
import signupImg from "../assets/projects/sign-up-form.png";
import projectAppImg from "../assets/projects/projectApp.png";
import skoteImg from "../assets/projects/skote.png";
import flowRecordsImg from "../assets/projects/flowrecords.png";

import HTML_IMG from "../assets/skills/html.png";
import CSS_IMG from "../assets/skills/css.png";
import JS_IMG from "../assets/skills/javascript.png";
import TS_IMG from "../assets/skills/typescript.png";
import REACT_IMG from "../assets/skills/react.png";
import NEXT_IMG from "../assets/skills/next.png";
import POSTGRES_IMG from "../assets/skills/postgresSQL.png";
import TAILWIND_IMG from "../assets/skills/tailwind.png";
import SASS_IMG from "../assets/skills/sass.png";
import BOOTSTRAP_IMG from "../assets/skills/bootstrap.png";
import AUTH0_IMG from "../assets/skills/auth0.png";
import VITE_IMG from "../assets/skills/vite.png";
import GITHUB_IMG from "../assets/skills/github.png";
import VERCEL_IMG from "../assets/skills/vercel.png";

export interface Project {
  id: string;
  name: string;
  image: string;
  description: string;
  skills: string[];
  overview: string;
  link: string;
}

export interface Skill {
  image: string;
  language: string;
}

export const MY_SKILLS: Skill[] = [
  {
    image: HTML_IMG,
    language: "HTML5",
  },
  {
    image: CSS_IMG,
    language: "CSS3",
  },
  {
    image: JS_IMG,
    language: "JavaScript",
  },
  {
    image: TS_IMG,
    language: "TypeScript",
  },
  {
    image: REACT_IMG,
    language: "React.js",
  },
  {
    image: NEXT_IMG,
    language: "Next.js",
  },
  {
    image: POSTGRES_IMG,
    language: "PostgreSQL",
  },
  {
    image: TAILWIND_IMG,
    language: "Tailwind CSS",
  },
  {
    image: SASS_IMG,
    language: "SASS",
  },
  {
    image: BOOTSTRAP_IMG,
    language: "Bootstrap",
  },
  {
    image: AUTH0_IMG,
    language: "Auth0",
  },
  {
    image: VITE_IMG,
    language: "Vite",
  },
  {
    image: GITHUB_IMG,
    language: "GitHub",
  },
  {
    image: VERCEL_IMG,
    language: "Vercel",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    name: "Sign Up Form",
    image: signupImg,
    description:
      "Sign Up Form is a project with several steps of registering and a full validation logic.",
    skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
    overview:
      "Sign Up Form is a project with several steps of registering and a full validation logic. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/Sign-up-Form/",
  },
  {
    id: "p2",
    name: "SENTOBAR",
    image: sentobarImg,
    description:
      "SENTOBAR is a markup project for Barber Shop including all the services and booking form with nice styling.",
    skills: ["HTML", "CSS", "Bootstrap", "Github"],
    overview:
      "SENTOBAR is a markup project for Barber Shop including all the services and booking form with nice styling. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/SENTOBAR/",
  },
  {
    id: "p3",
    name: "Dice-Game",
    image: diceGameImg,
    description:
      "Dice Game is an app for 2 players with logic - rolling dice and collecting points to win.",
    skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
    overview:
      "Dice Game is an app for 2 players with logic - each player rolls the dice and collects points to win. First player who reaches 100 points is a winner. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/Dice-Game/",
  },

  {
    id: "p4",
    name: "SKOTE Dashboard",
    image: skoteImg,
    description:
      "SKOTE Dashboard is a markup project displaying the personal dashboard of the agent with some stats, activities and tables.",
    skills: ["HTML", "CSS", "SCSS", "Github"],
    overview:
      "SKOTE Dashboard is a markup project displaying the personal dashboard of the agent with some stats, activities and tables. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/SKOTE---Project-2/",
  },
  {
    id: "p5",
    name: "Investment Calculator",
    image: investmentImg,
    description:
      "Investment Calculator is an app with logic to calculate the total savings and interest based on user interaction.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Redux",
      "Github",
    ],
    overview:
      "Investment Calculator is an app with logic to calculate the total savings and interest based on user interaction. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/investment-calculator/",
  },
  {
    id: "p6",
    name: "Project App",
    image: projectAppImg,
    description:
      "Project App is an app for creating new projects, have an access on them to the sidebar and option to add tasks in each of them.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Redux",
      "Github",
    ],
    overview:
      "Project App is an app for creating new projects, have an access on them to the sidebar and option to add tasks in each of them. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/Project-App/",
  },
  {
    id: "p7",
    name: "Food Order App",
    image: foodOrderImg,
    description:
      "Food Order App is an app for adding selected products to the cart and managing cart with adding or removing items.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "SCSS",
      "Styled Components",
      "Redux",
      "Github",
    ],
    overview:
      "Food Order App is an app similar to the food delivery apps where you have several products selection with option to add it on a cart and manage. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/order-food-app/",
  },
  {
    id: "p8",
    name: "Github User Search",
    image: githubSearchImg,
    description:
      "Github User Search is an App for searching developers on gitHub using API and displaying it on the screen.",
    skills: ["HTML", "CSS", "Javascript", "SCSS", "Github"],
    overview:
      "Github User Search is an App for searching developers on gitHub. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices. Also, I'm using API and based on username search it displays developer info on the screen.",
    link: "https://davemakara.github.io/Github-User-Search/",
  },
  {
    id: "p9",
    name: "TBC x USAID page",
    image: tbcXusaidImg,
    description:
      "An identical page of tbc IT academy website - including carousel, cards and QA section.",
    skills: ["HTML", "CSS", "Javascript", "Github"],
    overview:
      "This is one identical page of tbc IT academy website - including carousel, cards and QA section. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices.",
    link: "https://davemakara.github.io/TBCxUSAID/",
  },
  {
    id: "p10",
    name: "Job Listings",
    image: jobListingImg,
    description:
      "Job Listings is an App with an option to filter and search jobs based on tech skills and experience.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "Github",
    ],
    overview:
      "Job Listings is an App with an option to filter and search jobs based on tech skills and experience. In this project I used my Frontend Web Development skills to provide a better user experience for all types of devices. Also, I'm using API and based on username search it displays developer info on the screen.",
    link: "https://job-listings-hub.vercel.app/",
  },
  {
    id: "p11",
    name: "FlowRecords",
    image: flowRecordsImg,
    description:
      "FlowRecords is a music app, where you can check latest music news, stay updated about weekly charts and buy some products.",
    skills: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel Blob",
      "Auth0",
      "Stripe",
      "Github",
    ],
    overview:
      "FlowRecords is a cutting-edge music app designed to keep you in tune with the latest music news and trends. Stay updated with Spotify charts and insightful articles about the music industry. Discover your favorite products, from albums to accessories and instruments, and easily add them to your cart or purchase them directly.",
    link: "https://tbc-acceleration-project.vercel.app/",
  },
];
