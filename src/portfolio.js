/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "NaderSalama",
  title: "Hello There, I’m Nader Salama",
  subTitle:
    "I'm a Mechatronics Engineer & an enthusiastic Data Scientist & Machine learning Engineer👨‍🔬" +
    'Who is passionate about exploring the wonders of Data Science, Machine Learning & AI with the aim of making the world a better place one day 🌟'
  ,
  resumeLink:
    "https://drive.google.com/file/d/1nOS8UWtG9MrVHhIElCphf23fknmTIqvb/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/LuciferLuther",
  linkedin: "https://www.linkedin.com/in/nader-salama-lucifers/",
  gmail: "nadersalama666@gmail.com",
  facebook: "https://www.facebook.com/nader.salama.77",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

    


const skillsSection = {
  title: "What I do", 
  subTitle: "I'm always seeking to learing new things & solve problem & projects that can increase my knowldge & experience ,I'm currently aiming to become a Certified Data Scientist",
  skills: [
    emoji(
      "⚡ Mine and analyze data from company databases to drive optimization and improvement of product development, marketing techniques and business strategies."
    ),
    emoji("⚡ Use predictive modeling to increase and optimize customer experiences, revenue generation, ad targeting and other business outcomes."),
    emoji(
      "⚡ Develop processes and tools to monitor and analyze different model performance metrics."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "tensorflow-original.svg"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-C++"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "AinShams , Faculty of Engineering",
      logo: require("./assets/images/asunews_119_img.png"),
      subHeader: "Bachelor Degree in Bio-Mechatronics Engineering",
      duration: "September 2015 - July 2020",
      desc: "My graduation project was a collaboration between Ain shams University and Lincolin University in UK"+
      " The major goal of this collaborative project between Ain Shams University and Lincoln University is to construct a four-wheeled modular autonomous fruit harvesting robot",
     // descBullets: [
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
     //  ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
     {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures",
      progressPercentage: "85%"
    },
    {
      Stack: "Python",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
        {
      role: "Software Engineer",
      company: "Manara",
      companylogo: require("./assets/images/Manara.png"),
      date: "May 2022",
      desc: "I am participating in the Manara programme as a software engineer in order to advance and better my career as a software engineer and to achieve my dream of working for an FAANG organisation."
    },
        {
      role: "Business Analyst & Data Scientist",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/Sparks.jpg"),
      date: "April 2022 – May 2022",
      desc: "Data Analysis · Machine Learning · Python"
    },
    {
      role: "Mechatronics Engineer",
      company: "Aerospace Aviation Research Centre",
      companylogo: require("./assets/images/arc.png"),
      date: "Mar 2021 – Mar 2022",
      desc: "I was working as a mechatronics engineer in the Aviation Research Centre, which is inside the Helwan factory for developed industries, and my role was working as a Development & Maintenance Engineer mainly for the Avionics labs."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: emoji("Projects & Accomplishments 🎯"),
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://drive.google.com/file/d/10csrueqScmqWPe98zqnrlaLyco6nUvrI/view?usp=sharing",
      image: require("./assets/images/Dashboard White.JPG"),
      title: "Retail - Sales Performance",
      description:
        "A descriptive Power Bi Dashboard that explains various aspects that affect sales and profit"
    },
    {
      url: "https://deepnote.com/@nadersalama-lucifer/Credit-Card-Approval-ec91b3b9-a743-4996-926f-3f4e957417a2",
      title: "Predicting Credit Card Approvals",
      description:
        "Build a machine learning model to predict if a credit card application will get approved."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "Different Projects that I have done",
  projects: [
    {
      image: require("./assets/images/Dashboard White.JPG"),
      projectName: "Retail - Sales Performance",
      projectDesc: "A descriptive Power Bi Dashboard that explains various aspects that affect sales and profit",
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/10csrueqScmqWPe98zqnrlaLyco6nUvrI/view?usp=sharing"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications",
  achievementsCards: [
     {
      title: "Supervised & Unsupervised Machine Learning",
      subtitle:
        "Certificate of completion from Udacity",
      image: require("./assets/images/ML Cross-Skilling.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1Rw4QxMEWl7PCLuSPF6278K5OpmZBKRNX/view?usp=sharing"
        },
      ]
    },
    {
      title: "Advanced Data Analysis NanoDegree",
      subtitle:
        "Certificate of completion from Udacity",
      image: require("./assets/images/Udacity.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1vKrpmyH-eceiHhRao6bsh7vf0EbRK0Sf/view?usp=sharing"
        },
      ]
    },
    {
      title: "The Sparks Foundation Internship",
      subtitle:
        "Certificate of completion from The Sparks Foundation",
      image: require("./assets/images/Sparks_Intern_Certificate.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/13ePPnc91-Z98BhbLnFqr661C1nvrV_7i/view?usp=sharing"
        }
      ]
    },
     {
      title: "The Sparks Foundation Internship",
      subtitle:
        "Recommendation Letter from The Sparks Foundation",
      image: require("./assets/images/LOR Sparks.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1WxUmEfQ-2Q3vNm2rKq6MxRkz7-qcGDqX/view?usp=sharing"
        }
      ]
    },
    {
      title: "Data Analysis Professional NanoDegree",
      subtitle:
        "Certificate of completion from Udacity",
      image: require("./assets/images/Udacity.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1b5rFzdsD2vYKyVu_G_nk5M2xnKfaL8pS/view?usp=sharing"
        }
      ]
    },
    {
      title: "Machine Learning NanoDegree",
      subtitle:
        "Certificate of completion from Udemy",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/17VjrkHXsSeh77mQfHA9qNqG2GyEiGXQY/view?usp=sharing"
        }
      ]
    },
    {
      title: "Business Language Program",
      subtitle: "Certificate of completion from Sprints",
      image: require("./assets/images/BLP.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1nkvXaZ-LcICVTqi6FK_ygWL_rof_O40E/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  email_address: "nadersalama666@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "LuciferSLuther", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  blogSection,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
