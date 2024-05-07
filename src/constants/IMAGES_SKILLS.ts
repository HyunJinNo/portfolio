const IMAGES_FRONTEND = [
  {
    src: "/HTML5_Logo.svg",
    alt: "HTML5",
    width: 100,
  },
  {
    src: "/CSS3_logo_and_wordmark.svg",
    alt: "CSS3",
    width: 100,
  },
  {
    src: "/js.png",
    alt: "JAVASCRIPT",
    width: 100,
  },
  {
    src: "/Typescript.svg.png",
    alt: "TYPESCRIPT",
    width: 100,
  },
  {
    src: "/sass.svg",
    alt: "SASS",
    width: 100,
  },
  {
    src: "/React-icon.svg",
    alt: "REACT",
    width: 100,
  },
  {
    src: "/Nextjs-logo.svg.png",
    alt: "NEXT.JS",
    width: 200,
  },
  {
    src: "/Redux_Logo.png",
    alt: "REDUX",
    width: 200,
  },
];

const IMAGES_BACKEND = [
  {
    src: "/Node.js_logo.svg.png",
    alt: "NODE.JS",
    width: 150,
  },
  {
    src: "/Expressjs.png",
    alt: "EXPRESS.JS",
    width: 200,
  },
  {
    src: "/Python-logo-notext.svg.png",
    alt: "PYTHON",
    width: 100,
  },
  {
    src: "/Flask_logo.svg.png",
    alt: "FLASK",
    width: 200,
  },
];

const IMAGES_DATABASE = [
  {
    src: "/MySQL_logo.svg.png",
    alt: "MYSQL",
    width: 150,
  },
  {
    src: "/MariaDB_colour_logo.svg.png",
    alt: "MARIA DB",
    width: 200,
  },
  {
    src: "/Firebase_Logo.svg.png",
    alt: "FIREBASE",
    width: 200,
  },
];

const IMAGES_MOBILE = [
  {
    src: "/Android_2023_3D_logo_and_wordmark.svg.png",
    alt: "ANDROID",
    width: 300,
  },
  {
    src: "/Kotlin_logo_2021.svg.png",
    alt: "KOTLIN",
    width: 300,
  },
  {
    src: "/Java_programming_language_logo.svg.png",
    alt: "JAVA",
    width: 80,
  },
  {
    src: "/Google-flutter-logo.svg.png",
    alt: "FLUTTER",
    width: 200,
  },
  {
    src: "/Dart_programming_language_logo.svg.png",
    alt: "DART",
    width: 200,
  },
];

const IMAGES_DEPLOYMENT = [
  {
    src: "/Raspberry_Pi_Logo.svg.png",
    alt: "RASPBERRY PI",
    width: 100,
  },
  {
    src: "/Amazon_Web_Services_Logo.svg.png",
    alt: "AWS",
    width: 150,
  },
  {
    src: "/vercel.svg",
    alt: "VERCEL",
    width: 200,
  },
];

const IMAGES_VERSION_CONTROL = [
  {
    src: "/Git-logo.svg.png",
    alt: "GIT",
    width: 200,
  },
  {
    src: "/GitHub_Invertocat_Logo.svg.png",
    alt: "GITHUB",
    width: 100,
  },
];

export const IMAGES_SKILLS = new Map<
  string,
  { src: string; alt: string; width: number }[]
>();
IMAGES_SKILLS.set("Front-end", IMAGES_FRONTEND);
IMAGES_SKILLS.set("Back-end", IMAGES_BACKEND);
IMAGES_SKILLS.set("Database", IMAGES_DATABASE);
IMAGES_SKILLS.set("Mobile", IMAGES_MOBILE);
IMAGES_SKILLS.set("Deployment", IMAGES_DEPLOYMENT);
IMAGES_SKILLS.set("Version Control", IMAGES_VERSION_CONTROL);

export const IMAGES_SKILLS_KEYS = [
  "Front-end",
  "Back-end",
  "Database",
  "Mobile",
  "Deployment",
  "Version Control",
];
