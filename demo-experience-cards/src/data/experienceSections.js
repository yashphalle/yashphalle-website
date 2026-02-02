// Grouped & ordered like Option A: Internships → Research & Teaching → Leadership
// Each experience has: title, company, company_url, duration, location, description[], initial, color

export const experienceSections = [
  {
    id: "internships",
    title: "Internships",
    subtitle: "Industry & research",
    experiences: [
      {
        title: "Machine Vision Software Development Intern",
        company: "Tesla",
        company_url: "https://www.tesla.com/",
        duration: "Jun 2025 - Sep 2025",
        location: "Austin, Texas, United States",
        description: [
          "Software development for machine vision systems in automotive applications.",
        ],
        initial: "T",
        color: "#CC0000",
      },
      {
        title: "Robotics Intern",
        company: "Warp",
        company_url: "https://www.wearewarp.com/",
        duration: "Jun 2025 - Sep 2025",
        location: "Los Angeles, California, United States",
        description: [],
        initial: "W",
        color: "#6366F1",
      },
      {
        title: "Artificial Intelligence Intern",
        company: "UMA - Universidad María Auxiliadora",
        company_url: "https://www.uma.edu.pe/",
        duration: "Mar 2024 - May 2024",
        location: "Lima, Peru",
        description: [
          "Worked on Chatbot Queries in the Integrated University Management System. Developed Conversational AI agent workflow.",
          "Implemented intent and entity recognition. Built student-facing chatbot, reducing administrative workload by 40%.",
        ],
        initial: "UMA",
        color: "#000000",
      },
      {
        title: "Research Intern",
        company:
          "Computational Intelligence Lab, Indian Institute of Science (IISc)",
        company_url: "https://www.iisc.ac.in/",
        duration: "Jun 2023 - Dec 2023",
        location: "Bangalore, India",
        description: [
          "Semi-autonomous drone for precision pesticide spraying. Dynamic height adjustment using Intel RealSense, lidar, radar.",
          "Computer vision for edge computation. Extensive simulation using ROS and Gazebo.",
        ],
        initial: "IISc",
        color: "#000000",
      },
    ],
  },
  {
    id: "research-teaching",
    title: "Research & Teaching",
    subtitle: "Lab & teaching",
    experiences: [
      {
        title: "Research Assistant",
        company: "Dependable Autonomy Laboratory, Northeastern University",
        company_url: "https://www.northeastern.edu/",
        duration: "Nov 2024 - Present",
        location: "Boston, MA",
        description: [
          "Research on Real-Time Hybrid Control for Obstacle Avoidance using VLMs and Safe Reinforcement Learning.",
          "Integrated reinforcement learning algorithms for robots with ROS and Gazebo simulations.",
        ],
        initial: "NU",
        color: "#0E6BA8",
      },
      {
        title: "Teaching Assistant – AI Lead",
        company:
          "College of Arts, Media and Design (CAMD), Northeastern University",
        company_url: "https://camd.northeastern.edu/research/initiatives/aims/",
        duration: "Dec 2024 - Present",
        location: "Boston, MA",
        description: [
          "Course: JRNL 6460 - Artificial Intelligence in Media Industry. Sessions on Prompt engineering, LLMs, Diffusion models, Custom GPT.",
          "Designed hands-on AI sandboxing activities. Developed pipelines for news and social media data.",
        ],
        initial: "CAMD",
        color: "#000000",
      },
    ],
  },
  {
    id: "leadership",
    title: "Leadership",
    subtitle: "Student organizations",
    experiences: [
      {
        title: "Programming Domain Head",
        company: "VIIT Robotics",
        company_url:
          "https://www.linkedin.com/company/viitrobotics/posts/?feedView=all",
        duration: "Jun 2021 - Nov 2023",
        location: "Pune, Maharashtra, India",
        description: [
          "Managed Programming team (30+ students) for Robocon, Eyantra, World Robotics Championship.",
          "Achievements: AIR-21 ABU Robocon, AIR-15 World Robotics Championship, TOP 50 Eyantra.",
        ],
        initial: "VRC",
        color: "#000000",
      },
      {
        title: "Technical Head",
        company: "IoT Forum VIIT",
        company_url:
          "https://www.linkedin.com/company/iotforumviit/posts/?feedView=all",
        duration: "May 2022 - Nov 2023",
        location: "Pune, Maharashtra, India",
        description: [
          "Session on 'Automation of Physics Experiments using Advanced Technologies' for teachers across Maharashtra.",
          "Tech workshop 'Exploring the world of IoT' (IoT, Robotics, AI, ML) with 200+ students.",
        ],
        initial: "IoT",
        color: "#000000",
      },
    ],
  },
];
