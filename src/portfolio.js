/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "NaderSalama",
  title: "Hello There, I’m NaderSalama",
  subTitle: emoji(
    "Bio-Mechatronics Engineer & an enthusiastic DataScientist - ML Engineer 🤖"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1pMdLfbbw2r8eiN2Z0Z48SPFwjPb-zuGR/view?usp=sharing", // Set to empty to hide the button
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
  subTitle: "I'm always seeking to learing new things & solve problem & projects that can increase my knowldge & experience ,I'm currently aiming for achieving AWS Certified Cloud Practitioner, so that i can increase my fields of knowledge even further",
  skills: [
    emoji(
      "⚡ Mine and analyze data from company databases to drive optimization and improvement of product development, marketing techniques and business strategies."
    ),
    emoji("⚡ Use predictive modeling to increase and optimize customer experiences, revenue generation, ad targeting and other business outcomes."),
    emoji(
      "⚡ Develop processes and tools to monitor and analyze model performance and data accuracy."
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
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "fab fa-Pandas"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-Tableau"
    },
    {
      skillName: "Numpy",
      fontAwesomeClassname: "fab fa-Numpy"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-MySql"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fab fa-TensorFlow"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
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
      desc: "Was a part of a Graduation Project named Autonomous Agricultural Robot & its was a collaboration between Ain shams University and Lincolin University in UK",
     // descBullets: [
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
     //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
     //  ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
     {
      Stack: "Tableau", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
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
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mechatronics Engineer",
      company: "Aerospace Aviation Research Centre",
      //companylogo: require("./assets/images/quoraLogo.png"),
      date: "Mar 2021 – Mar 2022",
      desc: "Working as a mechatronics engineer in the Aviation Research \
            centre, which is inside helwan factory for Developed industries,\
            and my role was working as a Development & Maintenance\
            Engineer mainly for the Avionics labs."
    },
    {
      role: "Mechanical Team Member",
      company: "Racing Team - AUV RoboSub Competition",
      //companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2018 –  2019",
      desc: "Working as mechanical team member in the Robosub\
             competition, Robosub is a competition Where we build Fully\
             Autonomous Underwater Vehicles."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
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


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "nadersalama666@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "LuciferSLuther", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
