/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Ankit Pal Singh",
  title: "Hi, I'm Ankit Pal Singh",
  subTitle: emoji(
    "Software Development Engineer building scalable cloud platforms, event-driven backend systems, Android products and open-source Linux tooling. I love designing reliable distributed systems across AWS, OCI and GCP, optimizing high-volume data pipelines, and turning complex engineering problems into polished products. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-hPg_bKHS5iA3ehDBrIS6NEwROS549Yn/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ankit3002",
  linkedin: "https://www.linkedin.com/in/ankit-pal-singh-640716200/",
  gmail: "hmankit2003@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Engineering Superpowers",
  subTitle:
    "CLOUD-NATIVE SOFTWARE ENGINEER SPECIALIZING IN DISTRIBUTED SYSTEMS, DATA PIPELINES, BACKEND PLATFORMS AND ANDROID EXPERIENCES",
  skills: [
    emoji(
      "⚡ Build event-driven services, scraping platforms and proxy infrastructure processing millions of daily requests with high availability."
    ),
    emoji(
      "⚡ Design scalable data ingestion and streaming pipelines using OCI Data Flow, Delta Lake, Spark, Kafka and cloud-native observability."
    ),
    emoji(
      "⚡ Ship production-grade apps and APIs using Java, Kotlin, Spring Boot, Python, Go, Node.js, Redis, Docker and modern databases."
    )
  ],

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Cloud",
      fontAwesomeClassname: "fas fa-cloud"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Technology Mandi",
      logo: require("./assets/images/iit_mandi.png"),
      subHeader: "B.Tech - School of Computing and Engineering Department",
      duration: "2020 - 2024",
      desc: "Coursework focused on core computer science foundations and applied data systems.",
      descBullets: [
        "Data Structures & Algorithms, Operating Systems, OOPS, Computer Networks and Computer Organization.",
        "Deep Learning, Data Science, Linear Algebra and applied machine learning fundamentals."
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Cloud & Distributed Systems",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend Engineering",
      progressPercentage: "92%"
    },
    {
      Stack: "Data Pipelines & Streaming",
      progressPercentage: "88%"
    },
    {
      Stack: "Android & Product UI",
      progressPercentage: "84%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Member of Technical Staff (IC2)",
      company: "Oracle",
      companylogo: require("./assets/images/oracle.png"),
      date: "Feb 2026 - Present",
      desc: "Building scalable cloud data infrastructure and platform observability on OCI.",
      descBullets: [
        "Designed and optimized scalable data ingestion pipelines using OCI Data Flow and Delta Lake; reduced streaming lag by tuning batch size, output file size and compute configurations.",
        "Re-architected cloud infrastructure using Terraform by segregating environments and teams into separate compartments.",
        "Enabled region-wise and environment-specific alarm deployments to improve observability, ownership and resource tracking."
      ]
    },
    {
      role: "Software Development Engineer 1",
      company: "Anakin Skywalker Pvt LTD",
      companylogo: require("./assets/images/anakin.webp"),
      date: "Aug 2024 - Jan 2026",
      desc: "Engineered high-throughput cloud automation platforms for large-scale scraping, proxy routing and account generation.",
      descBullets: [
        "Built event-driven AWS scraping services processing 5M+ daily requests with 99.9% uptime using Redis caching and Dockerized microservices.",
        "Designed a multi-cloud proxy management platform across AWS, GCP and third-party providers with intelligent rotation, static sessions and auto-scaling.",
        "Applied machine learning to classify proxies by performance and cost, enabling optimal routing and significant cost reduction.",
        "Developed an automated account generation system with UI automation, parallel subprocess execution and efficient multithreading/multiprocessing."
      ]
    },
    {
      role: "Open Source Contributor - Google Summer of Code",
      company: "The Linux Foundation",
      companylogo: require("./assets/images/GSoC_logo.svg.png"),
      date: "Apr 2024 - Nov 2024",
      desc: "Contributed to the Common Unix Printing System and Linux printing stack.",
      descBullets: [
        "Developed a native printer application supporting a wide range of printers and improving open-source printer compatibility.",
        "Packaged the solution as a Snap application for easy installation on Linux with a web interface for printer configuration."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Ace Online",
      companylogo: require("./assets/images/ace.png"),
      date: "Jan 2023 - Jul 2023",
      desc: "Worked on Android product experiences, UI quality and testing reliability.",
      descBullets: [
        "Created a user-friendly Android interface using Jetpack Compose and added 20+ polished animations.",
        "Developed test cases using JUnit, Mockito and Espresso, ensuring 99% test coverage and robust functionality validation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Selected products and engineering projects spanning Android, cloud backends, Linux tooling, ML and developer platforms.",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Note Taking Application",
      projectDesc:
        "Feature-rich Android note-taking app with Jetpack Compose UI, Retrofit API integration, Spring Boot backend, MySQL persistence and full CRUD workflows.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/Note-taking-app"
        }
      ]
    },
    {
      image: require("./assets/images/foundation.png"),
      projectName: "PAPPL Printer Application Presets",
      projectDesc:
        "Implemented option preset capabilities in the Printer Application Framework to create, edit, copy and delete predefined printer attribute sets on Unix systems.",
      footerLink: [
        {
          name: "Pull Request",
          url: "https://github.com/michaelrsweet/pappl/pull/314"
        }
      ]
    },
    {
      image: require("./assets/images/gait_recog.jpg"),
      projectName: "Gait Recognition",
      projectDesc:
        "Developed a deep learning pipeline for identifying people by walking patterns using U-Net style silhouette generation and metric-learning losses.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/OpenGait/commits/master/"
        }
      ]
    },
    {
      image: require("./assets/images/photo.png"),
      projectName: "Pegasus Text Summarizer",
      projectDesc:
        "Fine-tuned the Pegasus language model for academic paper summarization, turning long-form research content into concise summaries.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/Text-Summarizer"
        }
      ]
    },
    {
      image: require("./assets/images/cntroller.png"),
      projectName: "RoboSapiens Gesture Controller",
      projectDesc:
        "Built a game controller powered by hand gesture recognition using a CNN classifier trained across five gesture classes with 93% accuracy.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/RoboSapiens"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Certifications, open-source milestones and continuous learning across cloud, backend and systems engineering.",
  achievementsCards: [
    {
      title: "Google Summer of Code",
      subtitle:
        "Selected contributor with The Linux Foundation, contributing to the Common Unix Printing System and Linux printer application ecosystem.",
      image: require("./assets/images/GSoC_logo.svg.png"),
      imageAlt: "Linux Foundation Logo",
      footerLink: [
        {
          name: "GSoC",
          url: "https://drive.google.com/file/d/1YH46NczfpWhiTlmff50IA-CCQlu2z4zJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Microservices with Spring Boot",
      subtitle:
        "Completed microservices training covering Spring Boot, Spring Cloud, Docker and Kubernetes.",
      image: require("./assets/images/springboot.webp"),
      imageAlt: "Certification Logo",
      footerLink: [
        {
          name: "Udemy",
          url: "https://www.udemy.com/certificate/UC-63e53eee-2901-4a4a-9498-20d4068c4559/"
        }
      ]
    },
    {
      title: "Tools of The Trade: Linux and SQL",
      subtitle:
        "Google certification strengthening practical Linux/Unix and SQL foundations for software engineering workflows.",
      image: require("./assets/images/linux2.png"),
      imageAlt: "Linux Logo",
      footerLink: [
        {
          name: "Google",
          url: "https://coursera.org/share/4dbe20193ca2ae3dc3c01ed7479424c2"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Engineering notes, architecture learnings and experiments from building reliable software.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("I enjoy sharing practical engineering learnings with the community."),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations on software engineering and technology.",
  podcast: [],
  display: false
};

const contactInfo = {
  title: emoji("Let's Build Something Great ☎️"),
  subtitle:
    "Have an opportunity, collaboration idea or engineering problem to discuss? My inbox is open.",
  number: "+91-9149024234",
  email_address: "hmankit2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false
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
  isHireable
};