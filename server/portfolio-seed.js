/**
 * portfolio-seed.js
 *
 * Plain-JS snapshot of the portfolio content, without webpack require() calls.
 * Image fields use either:
 *   - A relative path string (filename or subpath within src/assests/images/)
 *   - A full https:// URL for externally hosted images
 *
 * Run `npm run seed` to push this data into MongoDB.
 */

const settings = {
  isSplash: false,
};

const seo = {
  title: "Yash's Portfolio",
  description: "--------",
  og: {
    title: "Yash Phalle Portfolio",
    type: "website",
    url: "http://yashphalle.com/",
  },
};

const greeting = {
  title: "Yash Phalle",
  logo_name: "Yash Phalle",
  nickname: "",
  subTitle:
    "🎓 MS AI Student at Northeastern University | 🤖 AI+Robotics Researcher | 🚗 Ex-Machine Vision Intern at Tesla | 🔬 Research Assistant at Dependable Autonomy Lab | 🌟 Ex-Research Intern at IISc Bangalore",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  githubProfile: "https://github.com/yashphalle",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yashphalle/",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yash-phalle-3b596b192/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:yashphallem@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/phalleyash",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
];

const skills = {
  data: [
    {
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
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { backgroundColor: "transparent", color: "#00599C" },
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
      slug: "donkey-car-rl",
      title:
        "Deep Reinforcement Learning Algorithms for Autonomous Driving in Simulation",
      description:
        "Comparative analysis of DDPG, TD3, and PPO algorithms in Donkey Car simulator. Enhanced performance through Reward Engineering and image encoder-decoder architecture.",
      bulletPoints: [
        "Conducted a comparative analysis of DDPG, TD3, and PPO reinforcement learning algorithms within the Donkey Car simulator.",
        "Enhanced algorithm performance by Reward Engineering and developing image encoder-decoder architecture for better feature extraction.",
        "PPO outperformed DDPG and TD3, demonstrating superior sample stability, training efficiency, and less sensitivity to hyperparameter tuning.",
      ],
      tags: [
        "Reinforcement Learning",
        "Python",
        "PyTorch",
        "Autonomous Driving",
      ],
      thumbnail: "donkeycar.png",
      githubLink: "https://github.com/yashphalle/donkey-car-RL",
    },
    {
      slug: "mapngo",
      title: "MapNGo",
      description:
        "ROS package in C++ for A*, Dijkstra, and RRT path planning algorithms using SLAM-generated occupancy grid maps. Containerized with Docker.",
      bulletPoints: [
        "Developed an ROS package in C++ for A*, Dijkstra, and RRT based path planning algorithms for autonomous navigation using SLAM-generated occupancy grid maps.",
        "Integrated path planning with a path following controller for autonomous mobile robot operation (tested on TurtleBot3).",
        "Containerized the entire ROS system using Docker, enabling simplified deployment process across different environments.",
      ],
      tags: ["ROS", "C++", "Path Planning", "SLAM", "Docker"],
      thumbnail: "proj2.png",
      githubLink:
        "https://github.com/yashphalle/MapNGo-Simultaneous-Localization-Mapping-and-Optimized-Path-Planning",
    },
    {
      slug: "lingoros",
      title: "LingoROS",
      description:
        "Open-source ROS package providing natural language control interface connecting LLMs to robots. Optimized for low-latency onboard computation.",
      bulletPoints: [
        "Developing an open-source ROS package in Python for providing natural language control interface connecting LLMs to existing robots without modifying existing robot codebases.",
        "Implemented a hybrid system with automatic ROS topic discovery and Ollama/phi3 integration, converting natural language commands into structured JSON for robotic execution.",
        "Optimized LLM inference for low-latency onboard computation, enabling real-time processing of user commands on resource-constrained robotic platform.",
      ],
      tags: ["ROS", "Python", "LLM", "NLP", "Robotics"],
      thumbnail: "lingo.png",
      githubLink: "https://github.com/yashphalle/LingoROS",
    },
    {
      slug: "half-cheetah-rl",
      title: "Enhancing Robotic Locomotion in Half Cheetah Using RL",
      description:
        "Compared PPO and DDPG algorithms in OpenAI Half-Cheetah environment - DDPG achieved 5x higher rewards with custom reward functions.",
      bulletPoints: [
        "Implemented and compared PPO (on-policy) and DDPG (off-policy) reinforcement learning algorithms in the OpenAI Half-Cheetah mujoco environment.",
        "Developed custom biomechanically-inspired reward functions that significantly improved locomotion efficiency.",
        "Conducted systematic hyperparameter optimization using Optuna across 40+ trials.",
      ],
      tags: ["Reinforcement Learning", "MuJoCo", "Python", "Optuna"],
      thumbnail: "cheetah-rl.png",
      githubLink: "https://github.com/yashphalle/Half-Cheetah-RL-Project",
    },
    {
      slug: "sentinel-drone",
      title: "Sentinel Drone",
      description:
        "Drone system for city surveillance detecting suspicious objects and geolocating on QGIS maps using ROS and computer vision.",
      bulletPoints: [
        "Developed a drone capable of hovering over the entire city detecting suspicious objects and geolocating in QGIS map.",
        "Implemented Image processing, feature matching, and path planning algorithms in ROS.",
        "Tech Stack: Python, ROS, PyTorch, OpenCV, QGIS",
      ],
      tags: ["ROS", "Python", "Computer Vision", "PyTorch", "OpenCV"],
      thumbnail: "proj3.jpg",
      githubLink:
        "https://github.com/yashphalle/2D-Lidar-based-SLAM-and-Autonomous-Path-Planning-for-TurtleBot",
    },
    {
      slug: "uav-landing-detection",
      title: "Safe Landing Spot Detection For UAVs Using Deep Learning",
      description:
        "Real-time system for detecting safe UAV landing spots using deep learning models optimized for edge computing.",
      bulletPoints: [
        "Developed a real-time system for detecting safe landing spots using MobileNetV2, U-Net, SegNet, and DeepLabv3.",
        "Optimized the system for edge computing, reducing model size while maintaining high accuracy.",
        "Achieved a tradeoff with 87% segmentation accuracy and 50% reduction in model size.",
      ],
      tags: ["Deep Learning", "Computer Vision", "UAV", "Edge Computing"],
      thumbnail: "proj4.png",
      githubLink: "https://github.com/yashphalle",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Northeastern University",
      subtitle: "Master of Science in Artificial Intelligence | GPA: 3.93/4.00",
      logo_path: "neu-logo.png",
      alt_name: "Northeastern University",
      duration: "Sep 2024 - Present",
      descriptions: [
        "📍 Boston, MA",
        "⚡ Key Coursework: Algorithms, Foundations of AI, Machine Learning, Reinforcement Learning, Robotics Sensing and Navigation",
      ],
      website_link: "https://www.northeastern.edu/",
    },
    {
      title: "Vishwakarma Institute of Information Technology",
      subtitle:
        "Bachelor of Technology in Computer Engineering | CGPA: 9.6/10",
      logo_path: "",
      alt_name: "VIIT Pune",
      duration: "Aug 2020 - May 2024",
      descriptions: [
        "📍 Pune, India",
        "⚡ Key Coursework: Artificial Intelligence, Computer Vision, Machine Learning, Deep Learning, Edge AI, Robotics",
      ],
      website_link: "https://www.viit.ac.in/",
    },
  ],
};

const experience = {
  title: "",
  subtitle: "",
  description: "",
  header_image_path: "",
  sections: [
    {
      work: true,
      title: "Work",
      experiences: [
        {
          title: "Research Assistant",
          company: "Dependable Autonomy Laboratory, Northeastern University",
          company_url: "https://www.northeastern.edu/",
          logo_path: "neu-logo.png",
          duration: "Oct 2024 - Jun 2025",
          location: "Boston, MA",
          description: [
            "Contributed to \"Temporal Logic Motion Planning of a UAV-UGV Team in Semantically Unknown Environments\" (AIAA Scitech 2026).",
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
          logo_path: "neu-logo.png",
          duration: "Jan 2026 - Present",
          location: "Boston, MA",
          description: [
            "Collaborating with Dr. Daniel Feinberg to support students and professionals in CS 5047 — Exploring AI Trends and Tools.",
            "Leading and coordinating daily activities of the teaching assistant team.",
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
          logo_path: "camd.png",
          duration: "Dec 2024 - Jun 2025",
          location: "Boston, MA",
          description: [
            "Course: JRNL 6460 - Artificial Intelligence in Media Industry (AI-MI), Instructor: Prof. John Wihbey.",
            "Created learning resources for prompt engineering, generative AI models, LLM integration, diffusion models.",
            "Designed hands-on AI sandboxing activities to enhance student engagement and applied learning.",
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
          logo_path: "tesla.png",
          duration: "Sep 2025 - Jan 2026",
          location: "Austin, Texas, United States",
          description: [
            "Developed Deep learning and rule-based CV algorithms for anomaly detection, quality inspection, and mechanical retrofit performance validation across production lines.",
            "Designed Halcon based high-speed pattern matching algorithm for industrial robotic PLC systems calibration, achieving sub-millimeter positional accuracy.",
            "Built a high-precision 3D laser profiler test bench for microscopic defect analysis in collaboration with mechanical engineering team.",
            "Integrated CV models with internal production dashboards to run as daily batch jobs.",
            "Built a proof-of-concept 3D ToF-based alignment system for industrial robotic arm to detect and correct mechanical offsets.",
          ],
          color: "#CC0000",
        },
        {
          title: "Robotics Intern",
          company: "Warp",
          company_url: "https://www.wearewarp.com/",
          logo_path: "warp.jpg",
          duration: "Jun 2025 - Sep 2025",
          location: "Los Angeles, California, United States",
          color: "#6366F1",
          description: [
            "Built an end-to-end digital twin platform integrating a computer vision pipeline for automated inventory tracking.",
            "Trained custom models on large-scale warehouse camera feeds using Vision-Language Models (VLMs), achieving 96.4% accuracy.",
            "Optimized multi-camera streaming and processing pipelines, reducing latency by 60–70% for real-time tracking.",
            "Developed a ROS2-based quadruped warehouse assistant to locate shipments and update inventory.",
          ],
        },
        {
          title: "Research Intern",
          company:
            "Computational Intelligence Lab, Indian Institute of Science (IISc)",
          company_url: "https://www.iisc.ac.in/",
          logo_path: "iisc.png",
          duration: "Jun 2023 - Dec 2023",
          location: "Bangalore, India",
          description: [
            "Worked on the development of semi-autonomous drone for precision pesticide spraying on tall trees.",
            "Developed an algorithm to dynamically adjust drone height based on real-time depth estimation.",
            "Tested and deployed computer vision algorithms for image segmentation and object detection for edge computation.",
          ],
          color: "#000000",
        },
        {
          title: "Artificial Intelligence Intern",
          company: "UMA - Universidad María Auxiliadora",
          company_url: "https://www.uma.edu.pe/",
          logo_path: "uma.jpeg",
          duration: "Mar 2024 - May 2024",
          location: "Lima, Peru",
          description: [
            "Developed Conversational AI agent workflow capable of generating responses using queries from university database.",
            "Implemented intent and entity recognition for context-aware, personalized responses.",
            "Built a student-facing chatbot reducing administrative workload by 40% through automated, real-time responses.",
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
          title: "Technical Head",
          company: "VIIT Robotics",
          company_url:
            "https://www.linkedin.com/company/viitrobotics/posts/?feedView=all",
          logo_path: "vrc.jpeg",
          duration: "Jun 2021 - Nov 2023",
          location: "Pune, Maharashtra, India",
          description: [
            "Led a 30+ member technical team, overseeing robotics software development and competition strategy.",
            "Achieved AIR 21 at ABU Robocon (IIT Delhi), AIR 15 at World Robotics Championship.",
          ],
          color: "#000000",
        },
        {
          title: "Technical Head",
          company: "IoT Forum VIIT",
          company_url:
            "https://www.linkedin.com/company/iotforumviit/posts/?feedView=all",
          logo_path: "iot.jpeg",
          duration: "May 2022 - Nov 2023",
          location: "Pune, Maharashtra, India",
          description: [
            "Given a session on 'Automation of Physics Experiments using Advanced Technologies' to Physics teachers from all over Maharashtra.",
            "Conducted tech workshop 'Exploring the world of IoT' with participation of over 200 students.",
          ],
          color: "#000000",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [],
};

const blogSection = {
  title: "Blogs",
  subtitle: "My thoughts and experiences in AI, Robotics, and Technology",
  comingSoonMessage:
    "More blogs cooking... Currently teaching robots to write for me! 🤖✍️",
  blogs: [
    {
      url: "https://news.northeastern.edu/2025/11/18/autonomous-forklift-warehousing/",
      image: "warp.jpg",
      title: "Featured in Northeastern Global News",
      description:
        "My summer internship work on autonomous forklifts and warehouse robotics got featured in Northeastern Global News.",
    },
    {
      url: "https://medium.com/@yashphalle/building-an-autonomous-vehicle-block-by-block-d7128d564094",
      image: "donkeycar.png",
      title: "Building an Autonomous Vehicle: Block by Block!",
      description:
        "A hands-on journey building a complete autonomous vehicle software stack from the ground up using CARLA.",
    },
  ],
};

const contactPageData = {
  contactSection: {
    title: "Get In Touch",
    profile_image_path: "profile-pic (5).png",
    description:
      "I'm always open to discussing AI, Robotics, Computer Vision, or any exciting opportunities. Feel free to reach out!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write about my experiences in AI, Robotics, and building autonomous systems.",
    link: "https://medium.com/@yashphalle",
  },
  addressSection: {
    title: "Location",
    subtitle: "Boston, Massachusetts, USA",
    location_map_link: "https://maps.google.com/?q=Boston,MA",
  },
  phoneSection: {
    title: "Email",
    subtitle: "yashphallem@gmail.com",
  },
};

const events = {
  title: "Events & Activities",
  subtitle: "Hackathons, competitions, and technical events",
  items: [
    {
      title: "YC Hackathon — PerceptAI",
      description: "Built PerceptAI - Brand Intelligence Platform",
      image: "events/YC.jpg",
      link: "https://yc-hack-woad.vercel.app/",
    },
    {
      title: "Winner - International Datathon by CDS, IISc",
      description: "AI-generated content detection",
      image: "events/iisc-win.jpg",
      link: null,
    },
    {
      title: "Top 15 - Yale University Hackathon",
      description: "Memora : Solving dementia among lonely seniors!",
      image: "events/yale.jpeg",
      link: null,
    },
    {
      title: "Best Product Design — Harvard University",
      description: "InsureMe Inclusive Insurance, Smarter Investments",
      image: "events/harvard.jpeg",
      link: null,
    },
    {
      title: "Top 15 - Eyantra Competition, IIT Bombay",
      description: "Sentinel Drone",
      image: "eyantra.jpeg",
      link: null,
    },
    {
      title: "Robotics Summit & Expo, Boston",
      description: "volunteered in conference",
      image: "events/summit.jpg",
      link: null,
    },
  ],
};

const featuredNews = {
  items: [
    {
      title: "Summer Internship got Featured in Northeastern Global News",
      url: "https://news.northeastern.edu/2025/11/18/autonomous-forklift-warehousing/",
    },
    {
      title: "Research Study got accepted in AIAA Scitech",
      url: "https://arc.aiaa.org/doi/abs/10.2514/6.2026-0566",
    },
    {
      title: "Started project blog series on Medium",
      url: "https://medium.com/@yashphalle/building-an-autonomous-vehicle-block-by-block-d7128d564094",
    },
  ],
};

const certifications = {
  certifications: [],
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Let's connect and discuss opportunities in AI & Robotics",
  number: "",
  email_address: "yashphallem@gmail.com",
};

module.exports = {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projects,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  blogSection,
  contactPageData,
  contactInfo,
  events,
  featuredNews,
};
