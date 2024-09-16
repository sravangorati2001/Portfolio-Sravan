/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sravan Kumar's Portfolio",
  description:
    "I'm a dedicated problem solver, eager to develop solutions that foster scalable and sustainable change in technology and society.",
  og: {
    title: "Sravan Kumar Portfolio",
    type: "website",
    url: "https://sravankumargorati.com/",
  },
};

//Home Page
const greeting = {
  title: "Sravan Kumar",
  logo_name: "SravanKumar",
  nickname: "Throny",
  subTitle:
    "Building What Matters: Design • Architect • Develop • Test • Deploy • Scale Creating solutions people truly want.",
  resumeLink:
    "https://drive.google.com/file/d/1crIBGIh-l-BjVzw_T_0ujG4nN-SyTIGR/view?usp=drive_link",
  portfolio_repository: "https://github.com/sravangorati2001",
  githubProfile: "https://github.com/sravangorati2001",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/sravangorati2001",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sravangorati2001/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCRE5Ocod6PNg9bpvfGUdEBw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:sravankumar.gorati@sjsu.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Sravanthrony",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_sravan_.kumar/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Programming Languages",
      fileName: "DataScienceImg",
      skills: [
        "⚡Accomplished problem solver with a track record of tackling over 1300+ complex coding challenges, demonstrating a deep understanding of language-specific nuances and best practices.",
        "⚡Developed custom functions in C++ to streamline debugging processes and enhance code readability. Skilled at translating concepts and functions from other languages into C++, bridging language gaps.",
        "⚡Proficient in building custom solutions and solving intricate problems across languages, showcasing versatility in software development.",
      ],
      softwareSkills: [
        {
          skillName: "GO",
          fontAwesomeClassname: "skill-icons:golang",
          style: {
            backgroundColor: "transparent",
            width: "60px",
            height: "60px",
          },
        },

        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            backgroundColor: "transparent",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "vscode-icons:file-type-cpp3",
          style: {
            backgroundColor: "white",
            color: "#D00000",
            width: "60px",
            height: "60px",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built ReactJs applications using Data Structures and Algorithms",
        "⚡ Designing highly attractive user interface for web applications",
        "⚡ Creating application backend in Node, Express & PHP",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs",
          style: {
            color: "#E34F26",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos:spring-icon",
          style: {
            color: "#1572B6",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "devicon:nextjs",
          style: {
            color: "#61DAFB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "skill-icons:materialui-light",
          style: {
            color: "#61DAFB",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "ExpressJs",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#2C8EBB",
            width: "60px",
            height: "60px",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Cloud & Databses",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-dark",
          style: {
            color: "#FF9900",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure-wordmark",
          style: {
            color: "#FF9900",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#336791",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#47A248",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "devicon:redis-wordmark",
          style: {
            color: "#0089D6",
            width: "60px",
            height: "50px",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql-wordmark",
          style: {
            color: "#4285F4",
            width: "60px",
            height: "60px",
          },
        },

      ],
    },
    {
      title: "DevOps & System Administration",
      fileName: "DesignImg",
      skills: [
        "⚡ Profficient in various operating systems",
        "⚡ Testing of REST API's using postman",
      ],
      softwareSkills: [
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "skill-icons:kubernetes",
          style: {
            color: "#FF2BC2",
            width: "80px",
            height: "70px",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker",
          style: {
            color: "#FF2BC2",
            width: "80px",
            height: "70px",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "devicon:terraform-wordmark",
          style: {
            color: "#FF2BC2",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "logos:jenkins",
          style: {
            color: "#FF2BC2",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "devicon:nginx",
          style: {
            color: "#FF2BC2",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            color: "#FF2BC2",
            width: "60px",
            height: "60px",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git",
          style: {
            color: "#F24E1E",
            width: "70px",
            height: "50px",
          },
        },
        {
          skillName: "Power Shell",
          fontAwesomeClassname: "skill-icons:powershell-dark",
          style: {
            color: "#F24E1E",
            width: "80px",
            height: "100px",
          },
        },

      ],
    },
    {
      title: "Logging & Monitoring",
      fileName: "DesignImg",
      skills: [
        "⚡ Profficient in various operating systems",
        "⚡ Testing of REST API's using postman",
      ],
      softwareSkills: [
        {
          skillName: "Elasticsearch",
          fontAwesomeClassname: "skill-icons:elasticsearch-dark",
          style: {
            color: "#FF2BC2",
            width: "80px",
            height: "70px",
          },
        },
        {
          skillName: "Prometheus",
          fontAwesomeClassname: "skill-icons:prometheus",
          style: {
            color: "#FF2BC2",
            width: "80px",
            height: "70px",
          },
        },
        {
          skillName: "Grafana",
          fontAwesomeClassname: "skill-icons:grafana-dark",
          style: {
            color: "#FF2BC2",
            width: "80px",
            height: "70px",
          },
        },
        {
          skillName: "Splunk",
          fontAwesomeClassname: "logos:splunk",
          style: {
            color: "#FF2BC2",
            width: "80px",
            height: "70px",
          },
        },




      ],
    }
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
      profileLink: "https://leetcode.com/sravangorati2001/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/sravangorati2001",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/sravan_114",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/sravangorati2001",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@sravangorati2001",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/sravankumar07",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "San José State University",
      subtitle: "M.S. in Computer Software Engineering",
      logo_path: "sjsu2.webp",
      alt_name: "San José State University",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Coursework: Enterprise Distributed Systems, Cloud Computing, Enterprise Software Platforms, Data Mining, Software Testing & Quality Assurance, System Software",
      ],
      website_link: "https://www.sjsu.edu/",
    },
    {
      title: "JNTUH University College of Engineering Hyderabad",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "JNTU_Hyderabad_logo.png",
      alt_name: "JNTUH",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Led 'Bits and Bytes' coding club at JNTUH, boosting programming culture through Coding Competitions, webinars, technical fests, and events.",
        "⚡ Quest-2022(JNTUH Biggest Technical Fest) Co-Ordinator",
        "⚡ Coursework: Cloud Computing, Data Structures & Algorithms, Computer Networks, Object Oriented Design, algorithm design, Operating System, Artificial Intelligence, Machine Learning.",
      ],
      website_link: "https://jntuhceh.ac.in/",
    },

  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: "- AWS",
      logo_path: "aws-certified-solutions-architect-associate.png",
      certificate_link: "https://www.credly.com/badges/d6100fb7-3eef-4c03-ad91-083ec298951a/linked_in_profile",
      alt_name: "AWS Certified Solutions Architect",
      color_code: "#8C151599",
    },
    {
      title: "Terraform Associate",
      subtitle: "- HarshiCorp",
      logo_path: "terraform.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Google Hashcode",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Hackathons and Volunteership",
  description:
    "I am passionate about using my technical skills to help others, from supporting students' learning to contributing to startup growth. My adaptability and eagerness to learn new skills allow me to effectively solve problems and innovate. This drive, combined with a commitment to personal growth, helps me positively impact educational and professional environments, promoting continuous learning and success.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      work: true,
      experiences: [
        {
          title: "Research Assistant",
          company: "San Jose State University",
          company_url: "https://www.sjsu.edu/",
          logo_path: "sjsu2.webp",
          duration: "August 2024 - Present",
          location: "San Jose, California",
          description:
            [
              " ⚡ Architected and implemented a robust hybrid Kubernetes infrastructure, seamlessly integrating on-premises and cloud resources, resulting in 40 % improved resource utilization and 30 % reduced operational costs",
              " ⚡ Engineered an advanced dynamic resource allocation system with horizontal pod autoscaling, achieving 99.99 % uptime and 50% faster response times during peak loads in a multi - environment setup"
            ],
          color: "#0879bf",
        },
        {
          title: "MLOps/DevOps Engineer Intern",
          company: "Darwinbox",
          company_url: "https://darwinbox.com/",
          logo_path: "Darwinbox Horizontal Logo_Colour.jpg",
          duration: "June 2024 - August 2024",
          location: "Hyderabad, Telangana",
          description:
            [
              " ⚡ Reduced AWS Infrastructure costs by 80 % by migrating from AWS - managed Elasticsearch to a self - managed cluster on multi - AZ EC2 Instance, improving resilience and performance.",
              " ⚡ Architected and maintained highly scalable architectures using Kubernetes, and Docker, ensuring 99.99 % uptime and seamless scaling for distributed cloud computing environments. ",
              " ⚡ Automated systems administration and infrastructure deployment using Ansible and Infrastructure as Code (Terraform), cutting setup times by 50 % and improving real - time monitoring. ",
              " ⚡ Engineered a high - performance data preprocessing framework in Go using goroutines and channels, enabling efficient transfer and indexing of 100GB + files to Elasticsearch, reducing upload times by 70 %."
            ],
          color: "#0879bf",
        },
        {
          title: "Software Development Engineer",
          company: "Darwinbox",
          company_url: "https://darwinbox.com/",
          logo_path: "Darwinbox Horizontal Logo_Colour.jpg",
          duration: "May 2022 - July 2023",
          location: "Hyderabad, Telangana",
          description:
            [
              " ⚡ Engineered ETL Migration service, seamlessly migrated data from MongoDB to AWS Redshift, accelerated reports and analytics generation from an hour to seconds, and reduced infrastructure cost by $150,000 / month.",
              " ⚡ Administered Linux systems: managed users and groups, configured UFW firewall, mounted persistent volumes, and implemented security best practices to ensure robust and secure infrastructure.",
              " ⚡ Engineered a TypeScript - based email parsing framework, deployed on Kubernetes, this system automated ticket creation and categorization, handling large email volumes and reducing processing time by over 75 %.",
              " ⚡ Designed and managed AWS VPCs, private subnets, security groups, NAT gateways, and established mutual TLS across microservices, ensuring end - to - end encryption and achieving 100 % compliance with security protocols. ",
              " ⚡ Built a high - performance PHP YII server, improving system performance by 40 % and delivering scalable REST APIs for faster mobile integration.",
              " ⚡ Directed and mentored a cross - functional team of 6, enhanced hands - on experience in Cloud Services, seamless integration of on - premises infrastructure with AWS, and refined code quality through rigorous PR reviews "
            ],
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "Darwinbox",
          company_url: "https://darwinbox.com/",
          logo_path: "Darwinbox Horizontal Logo_Colour.jpg",
          duration: "Jan 2022 - May 2022",
          location: "Hyderabad, Telangana",
          description:
            [
              " ⚡ Developed microservices using Node.js, PHP & Python, successfully containerized with Docker, & deployed using Kubernetes. ",
              " ⚡ Created an internal QA / blogging application, implementing features such as employee ratings, messaging, and friend requests "
            ],
          color: "#000000",
        },
        {
          title: "Software Engineer Virtual Intern",
          company: "JPMorgan Chase & Co",
          company_url: "https://www.jpmorganchase.com/",
          logo_path: "JP-Morgan-Chase-Logo.png",
          duration: "July 2020 - Aug 2020",
          location: "Hyderabad, Telangana",
          description:
            "⚡ Pioneered development of a financial data analysis using Python and React, delivered instantaneous stock valuation insights.Revolutionized development workflows and data feed precision by diagnosing and optimizing stock price algorithms.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Hackathons",
      experiences: [
        {
          title: "Stanford University - Treehacks 2024",
          company: "NutriVista",
          company_url: "https://www.stanford.edu/",
          logo_path: "stanford_logo.png",
          duration: "February 2024",
          location: "Stanford University, CA",
          description:
            "'NutriVista' is a cutting-edge app designed at Treehacks, transforming how users approach grocery shopping and dining. It leverages receipt analysis to provide in-depth nutritional content, environmental impact scores, and personalized recipe recommendations, aiming to foster healthier and more eco-conscious living. The app intelligently adapts to individual purchase patterns, offering tailored recipes that align with users' dietary objectives, making informed eating choices simpler and more accessible.",
          color: "#4285F4",
        },
        {
          title: "UC Berkley - CalHacks 2023",
          company: "BookShare",
          company_url: "https://www.berkeley.edu/",
          logo_path: "Seal_of_University_of_California,_Berkeley.svg",
          duration: "October 2023",
          location: "University of California, Berkeley, CA",
          description:
            "'BookShare' is an innovative application developed during CalHacks at UC Berkeley, designed to redefine the way students access literature. This platform bridges the gap between students with spare books and those in need, facilitating book rentals and donations within the academic community. BookShare aims to promote a culture of sharing and sustainability, making education more accessible and environmentally friendly by extending the life cycle of books and reducing waste. Its intuitive interface ensures a seamless exchange process, empowering students to save on resources while fostering a collaborative learning environment.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Head of Bits and Bytes",
          company: "Bits and Bytes - JNTUH Coding Club",
          company_url: "https://jntuhceh.ac.in/",
          logo_path: "JNTU_Hyderabad_logo.png",
          duration: "August 2021 - July 2022",
          location: "Hyderabad, Telangana",
          description:
            "As the Head of a coding club, my mission was to nurture the next generation of tech talent. I worked tirelessly to create an environment where students could flourish, facilitating webinars, hosting events, and encouraging a culture of continuous learning. My role extended beyond leadership; I provided guidance to members, helping them build their confidence and technical prowess.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure.",
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
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "sravan1.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Cloud, DevOps and Full Stack.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://sravangorati2001.hashnode.dev/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "754 The Alameda, San Jose, California",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95126",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/5ofxhuWpVYqPjEph8",
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
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
