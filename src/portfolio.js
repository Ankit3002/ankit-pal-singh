/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ankit Pal Singh",
  title: "Hi all, I'm Ankit Pal Singh",
  subTitle: emoji(
    "A passionate Full Stack Android Developer 🚀 having an experience of building Mobile applications with kotlin and Java. Committed to seamless user experiences and open-source collaboration for innovative solutions. A machine Learning and Deep learning Enthusiast passionate about LLM's, Neural Networks and AI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-hPg_bKHS5iA3ehDBrIS6NEwROS549Yn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ankit3002",
  linkedin: "https://www.linkedin.com/in/ankit-pal-singh-640716200/",
  gmail: "hmankit2003@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and Android (Kotlin and Java) mobile applications"
    ),
    emoji("⚡ Backend Development with Spring Boot and Hibernate"),
    emoji(
      "⚡ Develop LLMs, Machine and Deep Learning Models and NLP (Natural Language Processing)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Technology Mandi",
      logo: require("./assets/images/iit_mandi.png"),
      subHeader: "Bachelor of Technology in Electrical Engineering",
      duration: "2020 - Present",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Open Source Contributor",
      company: "The Linux Foundation",
      companylogo: require("./assets/images/Untitled design.png"),
      date: "June 2018 – Present",
      desc: "Worked .",
      descBullets: [
        "Contributed in The Linux Foundation at Google Summer of Code 2023.",
        "Fixed a bug in the CUPS service where using the ’cupsctl’ command with command-line arguments would remove comments from the ’cupsd.conf’ file. Additionally, I raised an issue on the CUPS repository in order to acheive v2.5 milestone."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Ace Online",
      companylogo: require("./assets/images/ace.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Worked on transitioning Ace online Android App from Java to kotlin, helped in implementing Clean Architecture and dependency injection, Multi-module gradle , Proto and Preference DataStore Designed Ui in jetpack compose and worked on navigation between screens  wrote test cases using junit, mockito and espresso..."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "Note Taking Mobile Application",
      projectDesc: "A comprehensive Android note-taking app with an easy-to-use interface using Jetpack Compose. It connects to external services through Retrofit and relies on Spring Boot for the backend.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/Note-taking-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/foundation.png"),
      projectName: "OPTION PRESETS IN PAPPL BASED PRINTER APPLICATION",
      projectDesc: "A preset functionality is added in Pappl( Printer Application Framework ) which is used to created,edit,copy and delete presets( A predefined set of printer attributes) in Unix Based Operating System.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/michaelrsweet/pappl/pull/314"
        }
      ]
    },
    {
      image: require("./assets/images/gait_recog.jpg"),
      projectName: "Gait Recognition",
      projectDesc: "In this project, I 'm developing a State fo the Art model to identify humans based on their walking style. I 'm using a U-Net architecture, which has an encoder-decoder structure with convolutinonal neural networks(CNNs). The model generates missing silhouettes of humans and then trains the encoder and decoder separately using triplet loss, gallery probe loss and regression loss.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/OpenGait/commits/master/"
        }
      ]
    },
    {
      image: require("./assets/images/photo.png"),
      projectName: "FINED TUNED LLM (PEGASUS) FOR TEXT SUMMARIZATION",
      projectDesc: "Fine tuned Pegasus (LLM) for Text Summarization task on Academic paper Dataset.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/Text-Summarizer"
        }
      ]
    },
    {
      image: require("./assets/images/cntroller.png"),
      projectName: "RoboSapiens - Game Controller using Hand gesture Recognition",
      projectDesc: "Created a hand gesture recognition Game controller using sequential Convolution Neural Network.The model is trained so that it classiﬁes 5 classes with 93 percent accuracy.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/Ankit3002/RoboSapiens"
        }
      ]
    }
    

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9149024234",
  email_address: "hmankit2003@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
