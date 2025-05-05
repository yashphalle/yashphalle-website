const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Yash's Portfolio",
  description: "--------",
  og: {
    title: "Yash Phalle Portfolio",
    type: "website",
    url: "http://yashphalle.com/",
  },
};

//Home Page
const greeting = {
  title: "Yash Phalle",
  logo_name: "Yash Phalle",
  nickname: "",
  subTitle:
    "🎓MS AI @NEU | AI+Robotics🤖 | Research Assistant @Dependable Autonomy Lab (DAL) | Research Intern @IISc Bangalore",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yashphalle/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yash-phalle-3b596b192/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:yashphallem@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/phalleyash",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      // #title sections
      title: "Interests & Skills",
      skills: [
        "🔍 Areas: Computer Vision, Reinforcement Learning, Robotics, Edge Computing, IoT",
        "💻 Programming Languages: Python, C++",
        "🛠️ Framework and Tools: ROS2, ROS, Gazebo, PyTorch, TensorFlow, Nvidia CUDA, Docker, CI/CD, Bash, CMake, Git",
        "🔧 Hardware Experience: Nvidia Jetson Nano, Raspberry Pi, Drone - Pixhawk Px4",
        "🌐 Software Development: Web Development [MongoDb, Express.Js, React.js, Node Js] (MERN) Stack",
      ],
      //logo images here
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "ROS",
          imageSrc: "ros.webp",
        },
      ],
    },
    // {
    //   title: "Competition & Co-curricular Activities",
    //   fileName: "DesignImg",
    //   skills: [

    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Gallery",
    //   fileName: "DesignImg",
    //   skills: [

    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Blogs",
    //   fileName: "DesignImg",
    //   skills: [

    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    // ],
    // },
    ,
  ],
};

const projects = {
  data: [
    {
      title:
        "Deep Reinforcement Learning Algorithms for Autonomous Driving in Simulation",
      description: `
        ● Conducted a comparative analysis of DDPG, TD3, and PPO reinforcement learning algorithms within the Donkey Car simulator.
        ● Enhanced algorithm performance by Reward Engineering and developing image encoder-decoder architecture for better feature extraction.
        ● PPO outperformed DDPG and TD3, demonstrating superior sample stability, training efficiency, and less sensitivity to hyperparameter tuning.
      `,
      thumbnail: require("./assests/images/donkeycar.png"),
      githubLink: "https://github.com/yashphalle/donkey-car-RL",
    },
    {
      title: "MapNGo",
      description: `
      ● Developed an ROS package in C++ for A*, Dijkstra, and RRT based path planning algorithms for autonomous navigation
        using SLAM-generated occupancy grid maps.
      ● Integrated path planning with a path following controller for autonomous mobile robot operation (tested on TurtleBot3).
      ● Containerized the entire ROS system using Docker, enabling simplified deployment process across different environments.
      `,
      thumbnail: require("./assests/images/proj2.png"),
      githubLink:
        "https://github.com/yashphalle/MapNGo-Simultaneous-Localization-Mapping-and-Optimized-Path-Planning",
    },
    {
      title: "LingoROS",
      description: `
      ● Developing an open-source ROS package in Python for providing natural language control interface connecting LLMs to
          existing robots without modifying existing robot codebases
      ● Implemented a hybrid system with automatic ROS topic discovery and Ollama/phi3 integration, converting natural
          language commands into structured JSON for robotic execution
      ● Optimized LLM inference for low-latency onboard computation, enabling real-time processing of user commands on
        resource-constrained robotic platform.
      `,
      thumbnail: require("./assests/images/lingo.png"),
      githubLink: "https://github.com/yashphalle/LingoROS",
    },
    {
      title: "Enhancing Robotic Locomotion in Half Cheetah Using RL",
      description: `
      ● Implemented and compared PPO (on-policy) and DDPG (off-policy) reinforcement learning algorithms in the OpenAI Half-Cheetah mujoco environment, demonstrating that DDPG achieved 5x higher rewards despite requiring more computational resources.
      ● Developed custom biomechanically-inspired reward functions that significantly improved locomotion efficiency and prevented undesirable behaviors (e.g., inverted movement), leading to greater forward distance traveled during training episodes.
      ● Conducted systematic hyperparameter optimization using Optuna across 40+ trials, experimenting with varying neural network architectures (1-3 hidden layers) to identify optimal configurations for both algorithms.
      `,
      thumbnail: require("./assests/images/cheetah-rl.png"),
      githubLink: "https://github.com/yashphalle/Half-Cheetah-RL-Project",
    },

    {
      title:
        "Safe Landing Spot Detection For UAVs Using Deep Learning Algorithms Suitable for Energy-Constrained Computing",
      description: `
        ● Developed a real-time system for detecting safe landing spots for UAVs using deep learning models such as MobileNetV2, U-Net, SegNet, and DeepLabv3, and conducted a comparative analysis to identify the most efficient model.
        ● Optimized the system for edge computing, reducing model size while maintaining high accuracy.
        ● Achieved a tradeoff with 87% segmentation accuracy and 50% reduction in model size.
      `,
      thumbnail: require("./assests/images/proj4.png"),
      githubLink: "https://yashphalle.github.io/yashphalle-website/#/",
    },
    {
      title: "Sentinel Drone",
      description: `
        ● Developed a drone capable of hovering over the entire city detecting suspicious objects and geolocating in Qgis map to assist police in surveillance tasks.
        ● Implemented Image processing, feature matching, and path planning algorithms in ROS.
        ● Tech Stack- Python- ROS, Pytorch, OpenCV, QGIS
      `,
      thumbnail: require("./assests/images/proj3.jpg"),
      githubLink:
        "https://github.com/yashphalle/2D-Lidar-based-SLAM-and-Autonomous-Path-Planning-for-TurtleBot",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

//   title: "Experience",
//   subtitle: "Work, Internship and Volunteership",
//   description:
//     "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
//   header_image_path: "experience.svg",
//   sections: [
//     {
//       title: "Work",
//       work: true,
//       experiences: [
//         {
//           title: "Research Assistant",
//           company: "Dependable Autonomy Laboratory, Northeastern University",
//           company_url: "https://www.northeastern.edu/",
//           logo_path: "northeastern_logo.png",
//           duration: "Nov 2024 - Present",
//           location: "Boston, MA",
//           description:
//             "Conducting research on Real-Time Hybrid Control for Obstacle Avoidance in Autonomous Robots/Drones Using Visual Language Models (VLMs) and Reinforcement Learning. Integrated state-of-the-art reinforcement learning algorithms for robots with ROS and Gazebo simulations.",
//           color: "#000000",
//         },
//         {
//           title: "Teaching Assistant- AI Lead",
//           company: "Northeastern University",
//           company_url: "https://www.northeastern.edu/",
//           logo_path: "northeastern_logo.png",
//           duration: "Dec 2024 - Present",
//           location: "Boston, MA",
//           description:
//             "Course: JRNL 6460 - Artificial Intelligence in Media Industry (AI-MI), Instructor: Prof. John Wihbey. Conducted sessions on Prompt engineering, Generative AI models, LLMs Integration, Diffusion models, Custom GPT and fine-tuning demonstrating their applications in the media industry. Designed hands-on AI sandboxing activities to enhance student engagement and applied learning. Developed custom pipelines for extracting, cleaning, and structuring news and social media data, ensuring high-quality datasets for various media-related studies. Mentored students and media professionals in integrating AI solutions into content creation, newsroom automation, and audience engagement strategies.",
//           color: "#000000",
//         },
//       ],
//     },
//     {
//       title: "Internships",
//       experiences: [
//         {
//           title: "Research Intern",
//           company: "Computational Intelligence Lab, Indian Institute of Science (IISc)",
//           company_url: "https://www.iisc.ac.in/",
//           logo_path: "iisc_logo.png",
//           duration: "Jun 2023 - Dec 2023",
//           location: "Bangalore, India",
//           description:
//             "Worked on the development of semi-autonomous drone for precision pesticide spraying on tall trees and challenging agricultural environments. Developed an algorithm to dynamically adjust drone height based on real-time depth estimation from the canopy and terrain below the drone, using Intel RealSense cameras, lidar, radar. Tested and deployed computer vision algorithms for image segmentation and object detection suitable for edge computation to detect the plants and efficiently align drones with plants for spraying. Performed extensive simulation of algorithms created using ROS(Python, C++) on Gazebo Simulator.",
//           color: "#000000",
//         },
//         {
//           title: "Artificial Intelligence Intern",
//           company: "UMA - Universidad María Auxiliadora",
//           company_url: "https://www.uma.edu.pe/",
//           logo_path: "uma_logo.png",
//           duration: "Mar 2024 - May 2024",
//           location: "Lima, Peru",
//           description:
//             "Worked on the project “Chatbot Queries in the Integrated University Management System at Universidad María Auxiliadora (UMA), Lima” as part of a capstone project collaboration. Developed Conversational AI agent workflow capable of generating responses using queries from university database. Implemented intent and entity recognition, enabling the AI agent to deliver context-aware, personalized responses. Built a student-facing chatbot, providing access to personalized university data (fees, results, library dues, etc.), reducing administrative workload by 40% through automated, real-time responses. Managed end-to-end project coordination, collaborating with a cross-functional team of six students and UMA staff.",
//           color: "#000000",
//         },
//   ],
// },
//     {
//       title: "Leadership",
//        experiences: [
//       {
//         title: "Research Intern",
//         company: "Computational Intelligence Lab, Indian Institute of Science (IISc)",
//         company_url: "https://www.iisc.ac.in/",
//         logo_path: "iisc_logo.png",
//         duration: "Jun 2023 - Dec 2023",
//         location: "Bangalore, India",
//         description:
//           "Worked on the development of semi-autonomous drone for precision pesticide spraying on tall trees and challenging agricultural environments. Developed an algorithm to dynamically adjust drone height based on real-time depth estimation from the canopy and terrain below the drone, using Intel RealSense cameras, lidar, radar. Tested and deployed computer vision algorithms for image segmentation and object detection suitable for edge computation to detect the plants and efficiently align drones with plants for spraying. Performed extensive simulation of algorithms created using ROS(Python, C++) on Gazebo Simulator.",
//         color: "#000000",
//       },
//     ],
//     },

//   ],
// };

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      work: true,
      title: "Work",

      experiences: [
        {
          title: "Research Assistant",
          company: "Dependable Autonomy Laboratory, Northeastern University",
          company_url: "https://www.northeastern.edu/",
          logo_path: require("./assests/images/neu-logo.png"),
          duration: "Nov 2024 - Present",
          location: "Boston, MA",
          description: [
            "Conducting research on Real-Time Hybrid Control for Obstacle Avoidance in Autonomous Robots/Drones Using Visual Language Models (VLMs) and exploring Safe Reinforcement Learning.",
            "Integrated state-of-the-art reinforcement learning algorithms for robots with ROS and Gazebo simulations.",
          ],
          color: "#000000",
        },
        {
          title: "Teaching Assistant- AI Lead",
          company:
            "College of Arts, Media and Design (CAMD) at Northeastern University",
          company_url:
            "https://camd.northeastern.edu/research/initiatives/aims/",
          logo_path: require("./assests/images/camd.png"),
          duration: "Dec 2024 - Present",
          location: "Boston, MA",
          description: [
            "Course: JRNL 6460 - Artificial Intelligence in Media Industry (AI-MI), Instructor: Prof. John Wihbey.",
            "Conducted sessions on Prompt engineering, Generative AI models, LLMs Integration, Diffusion models, Custom GPT and fine-tuning demonstrating their applications in the media industry.",
            "Designed hands-on AI sandboxing activities to enhance student engagement and applied learning.",
            "Developed custom pipelines for extracting, cleaning, and structuring news and social media data, ensuring high-quality datasets for various media-related studies.",
            "Mentored students and media professionals in integrating AI solutions into content creation, newsroom automation, and audience engagement strategies.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      internships: true,
      experiences: [
        {
          title: "Research Intern",
          company:
            "Computational Intelligence Lab, Indian Institute of Science (IISc)",
          company_url: "https://www.iisc.ac.in/",
          logo_path: require("./assests/images/iisc.png"),
          duration: "Jun 2023 - Dec 2023",
          location: "Bangalore, India",
          description: [
            "Worked on the development of semi-autonomous drone for precision pesticide spraying on tall trees and challenging agricultural environments.",
            "Developed an algorithm to dynamically adjust drone height based on real-time depth estimation from the canopy and terrain below the drone, using Intel RealSense cameras, lidar, radar.",
            "Tested and deployed computer vision algorithms for image segmentation and object detection suitable for edge computation to detect the plants and efficiently align drones with plants for spraying.",
            "Performed extensive simulation of algorithms created using ROS(Python, C++) on Gazebo Simulator.",
          ],
          color: "#000000",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "UMA - Universidad María Auxiliadora",
          company_url: "https://www.uma.edu.pe/",
          logo_path: require("./assests/images/uma.jpeg"),
          duration: "Mar 2024 - May 2024",
          location: "Lima, Peru",
          description: [
            "Worked on the project “Chatbot Queries in the Integrated University Management System at Universidad María Auxiliadora (UMA), Lima” as part of a capstone project collaboration.",
            "Developed Conversational AI agent workflow capable of generating responses using queries from university database.",
            "Implemented intent and entity recognition, enabling the AI agent to deliver context-aware, personalized responses.",
            "Built a student-facing chatbot, providing access to personalized university data (fees, results, library dues, etc.), reducing administrative workload by 40% through automated, real-time responses.",
            "Managed end-to-end project coordination, collaborating with a cross-functional team of six students and UMA staff.",
          ],
          color: "#000000",
        },
      ],
    },
    {
      title: "Leadership",
      leadership: true,
      experiences: [
        {
          title: "Programming Domain Head",
          company: "VIIT Robotics",
          company_url:
            "https://www.linkedin.com/company/viitrobotics/posts/?feedView=all",
          logo_path: require("./assests/images/vrc.jpeg"),
          duration: "Jun 2021 - Nov 2023",
          location: "Pune, Maharashtra, India",
          description: [
            "Managed daily activities of the Programming team (size over 30 students) for various competitions like Robocon, Eyantra, World Robotics Championship and some regional-level competitions.",
            "Conducted various robotics workshops.",
            "Achievements: AIR -21 ABU Robocon, IIT Delhi, AIR-15 World Robotics Championship, New Delhi, TOP 50 Eyantra Robotics Competition, IIT Bombay.",
          ],
          color: "#000000",
        },
        {
          title: "Technical Head",
          company: "IoT Forum VIIT",
          company_url:
            "https://www.linkedin.com/company/iotforumviit/posts/?feedView=all",
          logo_path: require("./assests/images/iot.jpeg"),
          duration: "May 2022 - Nov 2023",
          location: "Pune, Maharashtra, India",
          description: [
            "Given a session on 'Automation of Physics Experiments using Advanced Technologies' to Physics teachers from all over Maharashtra under the guidance of Dr.Rohini Panajkar.",
            "Conducted tech workshop 'Exploring the world of IoT' for students in domains of IoT, Robotics, AI, and ML with the participation of over 200 students.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projects,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
