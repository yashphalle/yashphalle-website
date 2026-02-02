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
    "🎓 MS AI Student at Northeastern University | 🤖 AI+Robotics Researcher | 🚗 Machine Vision Intern at Tesla | � Research Assistant at Dependable Autonomy Lab | 🌟 Research Intern at IISc Bangalore",
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
      title: "Skills & Research Interests",
      skills: [
        {
          title: "🔍 Areas:",
          content:
            "Computer Vision, Robotics, Reinforcement Learning, Edge Computing",
        },
        {
          title: "💻 Programming Languages:",
          content: "C++, Python",
        },
        {
          title: "🛠️ Framework and Tools:",
          content:
            "ROS2, ROS, Gazebo, PyTorch, TensorFlow, Halcon, Nvidia CUDA, Docker, CI/CD, Bash, CMake, Git",
        },
        {
          title: "🔧 Hardware Experience:",
          subGroups: [
            {
              label: "Boards",
              items: ["Nvidia Jetson Nano", "Raspberry Pi", "Microcontrollers"],
            },
            {
              label: "Robots",
              items: [
                "Autonomous Industrial Forklift",
                "Quadruped",
                "TurtleBot",
                "AMR",
                "Drone - Pixhawk PX4",
              ],
            },
            {
              label: "Sensors",
              items: [
                "Cameras (Stereo Depth, ToF, High-FPS Machine Vision)",
                "Profilers",
                "GPS",
                "Lidar",
                "Radar",
              ],
            },
          ],
        },
        {
          title: "🌐 Software Development:",
          content: "Web Development (MERN Stack), Gen AI (LLM Agents)",
        },
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
          duration: "Oct 2024 - Jun 2025",
          location: "Boston, MA",
          description: [
            'Contributed to "Temporal Logic Motion Planning of a UAV-UGV Team in Semantically Unknown Environments" (AIAA Scitech 2026) — https://arc.aiaa.org/doi/abs/10.2514/6.2026-0566',
            "Conducted research on Safe Reinforcement Learning in Autonomous Robots/Drones using Visual Language Models (VLMs).",
            "Integrated state-of-the-art reinforcement learning algorithms for robots with ROS (Python, C++) and Gazebo simulations.",
          ],
          color: "#000000",
        },
        {
          title: "Lead Teaching Assistant",
          company:
            "Khoury College of Computer Sciences, Northeastern University",
          company_url: "https://www.khoury.northeastern.edu/",
          logo_path: require("./assests/images/neu-logo.png"),
          duration: "Jan 2026 - Present",
          location: "Boston, MA",
          description: [
            "Collaborating with Dr. Daniel Feinberg to support students and professionals in CS 5047 — Exploring AI Trends and Tools.",
            "Leading and coordinating daily activities of the teaching assistant team, ensuring smooth course operations.",
            "Hosting live office hours, providing real-time support and guidance to students on AI concepts and tools.",
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
          duration: "Dec 2024 - Jun 2025",
          location: "Boston, MA",
          description: [
            "Course: JRNL 6460 - Artificial Intelligence in Media Industry (AI-MI), Instructor: Prof. John Wihbey.",
            "Created learning resources for prompt engineering, generative AI models, LLM integration, diffusion models, Custom GPT and fine-tuning demonstrating their applications in the media industry.",
            "Designed hands-on AI sandboxing activities to enhance student engagement and applied learning.",
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
          title: "Machine Vision Software Development Intern",
          company: "Tesla",
          company_url: "https://www.tesla.com/",
          logo_path: require("./assests/images/tesla.png"),
          duration: "Sep 2025 - Jan 2026",
          location: "Austin, Texas, United States",
          description: [
            "Designed and deployed deep learning and rule-based computer vision algorithms for anomaly detection, automating quality inspection across high-volume production lines and providing live tracking insights via dashboards.",
            "Developed Halcon-based high-speed pattern-matching algorithms for industrial robotic PLC systems, achieving sub-millimeter positional accuracy and robust performance under varying scenarios.",
            "Developed a high-precision defect analysis system for microscopic inspection using profilometer, achieving accuracy within <100 microns.",
            "Worked with diverse vision sensors including 3D ToF, stereo and RGB cameras, monochrome cameras, and profilometers for applications spanning object detection to high-precision microscopic inspection.",
          ],
          color: "#CC0000",
        },
        {
          title: "Robotics Intern",
          company: "Warp",
          company_url: "https://www.wearewarp.com/",
          logo_path: require("./assests/images/warp.jpg"),
          duration: "Jun 2025 - Sep 2025",
          location: "Los Angeles, California, United States",
          color: "#6366F1",
          description: [
            "Built an end-to-end digital twin platform integrating a computer vision pipeline for automated inventory tracking and shipment identification to support autonomous robotic forklift operations.",
            "Trained custom models on large-scale warehouse camera feeds using Vision-Language Models (VLMs) for annotation, achieving 96.4% accuracy in shipment detection from overhead cameras.",
            "Optimized multi-camera streaming and processing pipelines, reducing latency by 60–70% for real-time tracking.",
            "Developed a ROS2-based quadruped warehouse assistant to locate shipments, update inventory, and share real-time mapping data with autonomous forklifts through the digital twin platform.",
          ],
        },
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
  data: [],
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "My thoughts and experiences in AI, Robotics, and Technology",
  blogs: [
    {
      url: "https://medium.com/@yashphalle/ai-in-robotics",
      image: require("./assests/images/proj2.png"),
      title: "The Future of AI in Robotics",
      description:
        "Exploring how artificial intelligence is revolutionizing the field of robotics and autonomous systems.",
    },
    {
      url: "https://medium.com/@yashphalle/computer-vision-drones",
      image: require("./assests/images/proj3.jpg"),
      title: "Computer Vision for Autonomous Drones",
      description:
        "Deep dive into computer vision algorithms that enable drones to navigate and perform tasks autonomously.",
    },
    {
      url: "https://medium.com/@yashphalle/reinforcement-learning",
      image: require("./assests/images/proj4.png"),
      title: "Reinforcement Learning in Real-World Applications",
      description:
        "How reinforcement learning is being applied to solve complex real-world problems in robotics and automation.",
    },
  ],
};

// Contact Page
const contactPageData = {};

// Events & Activities (ethereal carousel)
const events = {
  title: "Events & Activities",
  subtitle: "Hackathons, competitions, and technical events",
  items: [
    {
      title: "Winner — International Datathon by CDS, IISc",
      description: "AI-generated content detection",
      image: require("./assests/images/events/iisc-win.jpg"),
      link: null,
    },
    {
      title: "Top 15 — Yale University Hackathon",
      description: "Memora : Solving dementia among lonely seniors!",
      image: require("./assests/images/events/yale.jpeg"),
      link: null,
    },
    {
      title: "Best Product Design — Harvard University",
      description: "InsureMe Inclusive Insurance, Smarter Investments",
      image: require("./assests/images/events/harvard.jpeg"),
      link: null,
    },
    {
      title: "Top 15 — Eyantra Competition, IIT Bombay",
      description: "Sentinel Drone",
      image: require("./assests/images/eyantra.jpeg"),
      link: null,
    },
    {
      title: "Robotics Summit & Expo, Boston",
      description: "volunteered in conference",
      image: require("./assests/images/events/summit.jpg"),
      link: null,
    },
    {
      title: "YC Hackathon — PerceptAI",
      description: "Built PerceptAI - Brand Intelligence Platform",
      image: require("./assests/images/events/YC.jpg"),
      link: "https://yc-hack-woad.vercel.app/",
    },
  ],
};

// Featured News (news ticker banner)
const featuredNews = {
  items: [
    {
      title: "Summer Internship got Featured in Northeastern Global News",
      url:
        "https://news.northeastern.edu/2025/11/18/autonomous-forklift-warehousing/",
    },
    {
      title: "Research Study got accepted in AIAA Scitech",
      url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-0566",
    },
    {
      title: "Started project blog series on Medium",
      url:
        "https://medium.com/@yashphalle/building-an-autonomous-vehicle-block-by-block-d7128d564094",
    },
  ],
};

const certifications = {
  certifications: [],
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
  blogSection,
  contactPageData,
  events,
  featuredNews,
};
