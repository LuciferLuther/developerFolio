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
    "I'm a Mechatronics Engineer & an enthusiastic Data Scientist 👨‍🔬" +
    'Who is passionate about exploring the wonders of Data Science, Machine Learning & AI with the aim of making the world a better place one day 🌟'
  ,
  resumeLink:
    "https://drive.google.com/file/d/155p8DOS2GHG1iigxav96lmOOze3rXm52/view?usp=share_link", // Set to empty to hide the button
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
  title: emoji("What I do 👨‍💻"), 
  subTitle: "I'm always seeking to learing new things & solve problem & projects that can increase my knowldge & experience , I'm currently aiming to become a Certified Data Engineer",
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
      skillName: "Pyspark",
      fontAwesomeClassname: "fas fa-Pyspark"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-presentation"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-tasks-alt"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fab fa-powerbi"
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
      " A collaborative project between Ain Shams University and Lincoln University, The project aims to design and develop a four-wheeled modular autonomous fruit harvesting robot",
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
      Stack: "Exploratory Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
     {
      Stack: "Machine Learning Concepts and Implementation", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Structures",
      progressPercentage: "85%"
    },
    {
      Stack: "SQL",
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
      role: "Data Scientist",
      company: "DARI - Home Services",
      companylogo: require("./assets/images/dari_logo.png"),
      date: "Sep 2022",
      desc: "Dari is a home services platform that aims to leverage the power of technology and automation to make the daily home \
             routine easy and fast by providing many different services from cleaning to car wash, My mission is to provide suggestions \
             that can heavily affect the business decisions based on statistical evidance and historical patterns"
    },
        {
      role: "Software Engineer Training",
      company: "Manara",
      companylogo: require("./assets/images/Manara.png"),
      date: "May 2022",
      desc: "An intensive boot camp that prepares top computer scientists in the Middle East for jobs at global tech \
             companies. Includes industry best practices for communication & writing efficient code"
    },
        {
      role: "Data Scientist Intern",
      company: "The Sparks Foundation",
      companylogo: require("./assets/images/Sparks.jpg"),
      date: "April 2022 – June 2022",
      desc: "Data Analysis · Machine Learning · Python - Power BI"
    },
    {
      role: "Testing and Reliability Engineer",
      company: "Aerospace Aviation Research Centre",
      companylogo: require("./assets/images/arc.png"),
      date: "Mar 2021 – Mar 2022",
      desc: "Worked as a Research And Development Engineer in the Aviation Research Center. \
      My mission was to validate the reliability and functionality of avionics lab devices."
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
      url: "https://github.com/LuciferLuther/SuperStore_Analysis",
      image: require("./assets/images/Superstore Analysis Dashboard (1).JPG"),
      title: "Retail Store - Sales Performance",
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

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications",
  achievementsCards: [
    {
      title: "AWS Machine Learning Engineer Nanodegree",
      subtitle:
        "Certificate of completion from Udacity",
      image: require("./assets/images/AWS Machine Learning.png"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1XCxPWXDmX1vsykOceCISvu1sSwEBThaN/view?usp=share_link"
        }
      ]
    },
    {
      title: "The Sparks Foundation",
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
      title: "The Sparks Foundation",
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
      title: "Supervised & Unsupervised Machine Learning Nano-Degree",
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
      title: "Advanced Data Analysis Nano-Degree",
      subtitle:
        "Certificate of completion from Udacity",
      image: require("./assets/images/Advanced Data.jpeg"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1vKrpmyH-eceiHhRao6bsh7vf0EbRK0Sf/view?usp=sharing"
        },
      ]
    },
    {
      title: "Data Analysis Professional Nano-Degree",
      subtitle:
        "Certificate of completion from Udacity",
      image: require("./assets/images/Professional Data.jpeg"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1b5rFzdsD2vYKyVu_G_nk5M2xnKfaL8pS/view?usp=sharing"
        }
      ]
    },
    {
      title: "Machine Learning Nano-Degree",
      subtitle:
        "Certificate of completion from Udemy",
      image: require("./assets/images/ML Nanodegree.jpeg"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/17VjrkHXsSeh77mQfHA9qNqG2GyEiGXQY/view?usp=sharing"
        }
      ]
    },
    {
      title: "Data Science Visualization",
      subtitle:
        "Certificate of completion from Udemy",
      image: require("./assets/images/Data Analysis.jpg"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/1IDiF4MRIomPLQIkjLN7axVTexpvccjiq/view?usp=sharing"
        }
      ]
    },
    {
      title: "Database Fundamentals",
      subtitle:
        "Certificate of completion from ITI - Mahara Tech",
      image: require("./assets/images/Data Base.jpeg"),
      footerLink: [
        {
          name: "Show Me",
          url: "https://drive.google.com/file/d/10a3Y9M0FdwHNbHCZYccuVtz1s0phG-48/view?usp=sharing"
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


// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "Different Projects that I have done",
  projects: [
    {
      image: require("./assets/images/Dashboard White.JPG"),
      projectName: "Retail Store - Sales Performance",
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
