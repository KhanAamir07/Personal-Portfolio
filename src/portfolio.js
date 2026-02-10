import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Khan Aamir",
  title: "Hi all, I'm Khan Aamir",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 specializing in Backend and Database Development with hands-on experience in Java, Python, MySQL, and modern web technologies."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=177jF8e-WiFJ4S8Z49-kTx8hEVEDBLH4v",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/KhanAamir07",
  linkedin: "https://www.linkedin.com/in/khanaamir07/",
  gmail: "aamirkhan91613216@gmail.com",
  instagram: "https://www.instagram.com/khan_aamir7411/",
  facebook: "https://www.facebook.com/share/1Fta5JnfEQ/",
  twitter: "https://twitter.com/AamirKhan490233",

  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "javascript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "jsp", fontAwesomeClassname: "fas fa-code"},
    {skillName: "servlet", fontAwesomeClassname: "fas fa-server"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},

    {skillName: "rest-api", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "hibernate", fontAwesomeClassname: "fas fa-layer-group"},
    {skillName: "spring", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "spring-mvc", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "spring-boot", fontAwesomeClassname: "fas fa-rocket"},
    {skillName: "django", fontAwesomeClassname: "fas fa-code"},
    {skillName: "flask", fontAwesomeClassname: "fas fa-flask"},
    {skillName: "numpy", fontAwesomeClassname: "fas fa-calculator"},
    {skillName: "pandas", fontAwesomeClassname: "fas fa-chart-bar"},

    {skillName: "mysql", fontAwesomeClassname: "fas fa-database"},
    {skillName: "apache-tomcat", fontAwesomeClassname: "fas fa-server"},
    {skillName: "eclipse", fontAwesomeClassname: "fas fa-code"},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "vs-code", fontAwesomeClassname: "fas fa-code"},
    {skillName: "notepad++", fontAwesomeClassname: "fas fa-file-code"},
    {skillName: "google-colab", fontAwesomeClassname: "fab fa-google"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "github", fontAwesomeClassname: "fab fa-github"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "SPDT College, University of Mumbai",
      logo: require("./assets/images/mumbai-logo.png"),
      subHeader: "Master of Science in Information Technology (M.Sc. IT)",
      duration: "June 2025 - May 2027",
      desc: "Postgraduate program focused on advanced software development, backend technologies, and databases.",
      descBullets: [
        "Advanced programming and software engineering concepts",
        "Backend and database-focused academic projects"
      ]
    },
    {
      schoolName: "SPDT College, University of Mumbai",
      logo: require("./assets/images/spdt.png"),
      subHeader: "Bachelor of Science in Information Technology (B.Sc. IT)",
      duration: "July 2022 - June 2025",
      desc: "Undergraduate program covering core IT concepts, programming, web technologies, and databases.",
      descBullets: [
        "Strong foundation in programming and web development",
        "Completed multiple academic and practical IT projects"
      ]
    },
    {
      schoolName: "CCS Inter College",
      logo: require("./assets/images/senior.png"),
      subHeader: "Class XII (Senior Secondary) – Uttar Pradesh Board",
      duration: "2020 - 2022",
      desc: "Completed Class 12th under Uttar Pradesh Board from CCS Inter College.",
      descBullets: [
        "Science / relevant stream",
        "Built strong academic foundation"
      ]
    },
    {
      schoolName: "Maulana Abul Kalam Azad",
      logo: require("./assets/images/junior.png"),
      subHeader: "Class X (Secondary) – Uttar Pradesh Board",
      duration: "2018 - 2020",
      desc: "Completed Class 10th under Uttar Pradesh Board from Maulana Abul Kalam Azad.",
      descBullets: [
        "Strong fundamentals in core subjects",
        "Developed analytical and problem-solving skills"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer",
      company: "Academic & Self Projects",
      companylogo: require("./assets/images/self.png"),
      date: "2022 – Present",
      desc: "Worked on full stack academic and self-learning projects as part of IT curriculum and independent practice.",
      descBullets: [
        "Developed backend logic and APIs using Java and Spring Boot",
        "Designed database-driven applications with proper validation"
      ]
    },
    {
      role: "Certified Programmer",
      company: "HackerRank",
      companylogo: require("./assets/images/hackerrank.png"),
      date: "2023",
      desc: "Completed skill-based coding assessments to validate programming and problem-solving abilities.",
      descBullets: [
        "Solved algorithmic and logical problems on HackerRank platform",
        "Demonstrated consistency in coding standards and accuracy"
      ]
    },
    {
      role: "Backend Developer",
      company: "College Projects",
      companylogo: require("./assets/images/project.png"),
      date: "2024 – 2025",
      desc: "Built backend-focused projects as part of B.Sc. IT and M.Sc. IT curriculum.",
      descBullets: [
        "Created hospital management and appointment booking systems",
        "Implemented authentication, form handling, and database operations"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: false,
  display: false
};

const bigProjects = {
  title: "Major Projects",
  subtitle:
    "ACADEMIC AND SELF PROJECTS DEVELOPED USING JAVA & FULL STACK TECHNOLOGIES",
  projects: [
    {
      image: require("./assets/images/hospital.png"),
      projectName: "Hospital Management System",
      projectDesc:
        "A full stack web application to manage patients, appointments, and staff using Java, JSP, Servlet, JDBC, and MySQL.",
      footerLink: [
        {
          name: "Source Code",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerce.png"),
      projectName: "E-Commerce Website",
      projectDesc:
        "An e-commerce web application with product listing, user authentication, cart, and order management using Java, Spring Boot, and MySQL.",
      footerLink: [
        {
          name: "Source Code",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/hostel.png"),
      projectName: "Hostel Management System",
      projectDesc:
        "A management system to handle student records, room allocation, fees, and attendance using Python, Django, and MySQL.",
      footerLink: [
        {
          name: "Source Code",
          url: "#"
        }
      ]
    },
    {
      image: require("./assets/images/quiz.png"),
      projectName: "Online Quiz Application",
      projectDesc:
        "A dynamic quiz application with timer, score calculation, and result summary using Java, Servlet, and MYSQL.",
      footerLink: [
        {
          name: "Source Code",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications and achievements earned during academic and self-learning journey",

  achievementsCards: [
    {
      title: "HackerRank Certified Programmer",
      subtitle:
        "Successfully cleared skill-based coding assessments on the HackerRank platform in Java, Python, and SQL.",
      image: require("./assets/images/hackerrank-achive.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Java Certificate",
          url: "https://drive.google.com/file/d/1wae1V1i6qR3YFsN9ZSt3tTKkKzQELp9i/view"
        },
        {
          name: "Python Certificate",
          url: "https://drive.google.com/file/d/10EyDOyXEbrw91_Khw6zkNVPUWQPOSXRa/view"
        },
        {
          name: "SQL Certificate",
          url: "https://drive.google.com/file/d/1A3itKizaxJF6UdP4017f56Z6p_yBrRmY/view"
        }
      ]
    },
    {
      title: "Academic Projects & Learning",
      subtitle:
        "Completed multiple academic and self-learning projects using Java, Spring Boot, Python, and MySQL.",
      image: require("./assets/images/project-achive.png"),
      imageAlt: "Projects Logo",
      footerLink: [
        {
          name: "GitHub Profile",
          url: "https://github.com/KhanAamir07"
        }
      ]
    },

    {
      title: "Continuous Learning & Practice",
      subtitle:
        "Actively practicing Data Structures, Algorithms, and Backend Development concepts.",
      image: require("./assets/images/learning-achive.png"),
      imageAlt: "Learning Logo",
      footerLink: [
        {
          name: "View GitHub Repositories",
          url: "https://github.com/KhanAamir07?tab=repositories"
        }
      ]
    }
  ],
  display: true
};
const blogSection = {
  title: "College Learning & IT Journey",
  subtitle:
    "Thoughts, experiences, and learnings from my B.Sc. IT and M.Sc. IT academic journey.",
  displayMediumBlogs: false,
  blogs: [
    {
      title: "From B.Sc. IT to M.Sc. IT – What I Actually Learned",
      description:
        "An honest reflection on how my understanding evolved during graduation.",
      content: [
        "During my B.Sc. IT journey, I initially focused only on passing exams rather than understanding concepts deeply.",
        "Subjects like DBMS, Java, and Web Technologies helped me build logical thinking and problem-solving skills.",
        "By the time I entered M.Sc. IT, my approach completely changed.",
        "I started learning with clarity, consistency, and real-world perspective."
      ]
    },
    {
      title: "My Learning Curve During IT Graduation",
      description:
        "Key learnings from my college journey that shaped my academics.",
      content: [
        "In the early semesters, my focus was mainly on completing the syllabus rather than understanding concepts deeply.",
        "Gradually, I realized that true learning comes from clarity, practice, and applying concepts beyond exams.",
        "Interacting with subjects like programming and databases helped me improve my logical thinking.",
        "This learning curve shaped my discipline, confidence, and approach towards continuous improvement."
      ]
    }
  ],
  display: true
};

const talkSection = {
  title: "WHAT I AM CURRENTLY IMPROVING 📌",
  subtitle: emoji(
    "Focused on continuous improvement and strengthening my core technical skills 🚀"
  ),

  talks: [
    {
      title: "Backend Design & Architecture",
      subtitle:
        "Improving backend design patterns and structuring scalable logic"
    },
    {
      title: "SQL Performance & Optimization",
      subtitle: "Writing efficient queries and improving database performance"
    },
    {
      title: "API Design & Structuring",
      subtitle:
        "Learning better REST API structuring and clean request handling"
    },
    {
      title: "Problem-Solving Skills",
      subtitle: "Enhancing logical thinking through consistent practice"
    }
  ],
  display: true
};
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY 😎 ",

  podcast: ["https://open.spotify.com/embed/episode/6DWXwOn1bc7P2VseHNMrJT"],
  display: true
};
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8303761651",
  email_address: "aamirkhan91613216@gmail.com"
};

const twitterDetails = {
  userName: "AamirKhan490233",
  display: true
};

const isHireable = false;
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
