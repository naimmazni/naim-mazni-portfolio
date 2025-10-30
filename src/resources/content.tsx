import { About, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhammad",
  lastName: "Naim",
  name: `Muhammad Naim Mazni`,
  role: "Software Engineering Student & Full-Stack Developer",
  avatar: "/images/avatar.png",
  email: "naimmazni@gmail.com",
  location: "Asia/Kuala_Lumpur",
  languages: ["English", "Malay"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Get updates on my latest projects, achievements, and insights into software engineering and full-stack development.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/naimmazni",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhammad-naim-mazni/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building innovative solutions through code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ChiliCare</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Project
        </Text>
      </Row>
    ),
    href: "/projects/chilicare",
  },
  subline: (
    <>
      Hi, I'm Naim, a third-year Software Engineering (Hons.) student at Universiti Putra Malaysia (UPM).
      I'm passionate about exploring AI tools and emerging technologies, always eager to learn and apply new innovations.
      I'm currently seeking internship opportunities to gain real-world experience and strengthen my technical and problem-solving skills.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About - ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Muhammad Naim Mazni is a dedicated Software Engineering student at Universiti Putra Malaysia (UPM), currently in his 4th semester with an outstanding CGPA of 4.00. 
        He is a two-time Vice Chancellor's Award recipient (2023, 2025) and three-time Dean's List honoree, demonstrating consistent academic excellence.
        <br /><br />
        With expertise in Java, Flutter, Laravel, React, and Node.js, Naim specializes in building innovative solutions across web, mobile, and IoT platforms. 
        His passion for technology is reflected in his impressive portfolio of 25+ achievements, including hackathon wins, academic honors, and international competition medals. 
        From AI-powered agriculture apps to fintech solutions, Naim transforms complex problems into elegant, practical software that makes a real-world impact.
      </>
    ),
  },
  work: {
    display: true,
    title: "Achievements & Recognition",
    experiences: [
      {
        company: "Academic Excellence",
        timeframe: "2023 - 2025",
        role: "Dean's List & Vice Chancellor's Award",
        achievements: [
          "🏆 Vice Chancellor's Award - B.Sc. Software Engineering Semester 4 (2025) - 4.00 GPA",
          "🏆 Vice Chancellor's Award - Foundation in Engineering (2023) - 4.00 GPA",
          "📚 Dean's List Award - B.Sc. Software Engineering Semester 3 (2025) - 3.75+ GPA",
          "📚 Dean's List Award - B.Sc. Software Engineering Semester 2 (2024) - 3.75+ GPA",
          "📚 Dean's List Award - B.Sc. Software Engineering Semester 1 (2024) - 3.75+ GPA",
        ],
        images: [
          {
            src: "/images/achievements/transcripts/semester-4.jpg",
            alt: "Semester 4",
            width: 3,
            height: 4,
          },
          {
            src: "/images/achievements/transcripts/semester-3.jpg",
            alt: "Semester 3",
            width: 3,
            height: 4,
          },
          {
            src: "/images/achievements/transcripts/semester-2.jpg",
            alt: "Semester 2",
            width: 3,
            height: 4,
          },
          {
            src: "/images/achievements/transcripts/semester-1.jpg",
            alt: "Semester 1",
            width: 3,
            height: 4,
          },
        ],
      },
      {
        company: "FoSEAL Hackathon 2025",
        timeframe: "June 2025",
        role: "Smart Agriculture App Development",
        achievements: [
          "🥉 2nd Runner Up - Smart Agriculture App with Soil Monitoring & AI Pest Detection|/images/achievements/hackathons/foseal-2025/foseal-hackathon-certificate.pdf",
        ],
        images: [
          {
            src: "/images/achievements/hackathons/foseal-2025/foseal-1.jpg",
            alt: "FoSEAL Hackathon 2025 - Team presentation",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/hackathons/foseal-2025/foseal-2.jpg",
            alt: "FoSEAL Hackathon 2025 - Development session",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/hackathons/foseal-2025/foseal-win.jpg",
            alt: "FoSEAL Hackathon 2025 - 2nd Runner Up award ceremony",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CIC Asia Competition 2025",
        timeframe: "December 2025",
        role: "Agricultural Innovation Solution",
        achievements: [
          "🏆 Final - Solution for Beginner Chili Farmers at Renaissance Hotel KL",
        ],
        images: [],
      },
      {
        company: "FCSIT Hackathon 2025",
        timeframe: "July 2025",
        role: "Agricultural Mobile App Development",
        achievements: [
          "🏅 Top 5 - Mobile App for Chili Farmers to Improve Farming Efficiency",
        ],
        images: [
          {
            src: "/images/achievements/hackathons/fcsit-2025/fcsit-1.png",
            alt: "FCSIT Hackathon 2025 - Top 5 Achievement",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PayNet Hackathon 2025",
        timeframe: "June 2025",
        role: "Fintech Payment Solution",
        achievements: [
          "🚀 Semi-Final - Fintech Payment Solution Prototype",
        ],
        images: [
          {
            src: "/images/achievements/hackathons/paynet-2025/paynet-1.png",
            alt: "PayNet Hackathon 2025 - Team presentation",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/hackathons/paynet-2025/paynet-2.png",
            alt: "PayNet Hackathon 2025 - Semi-Final achievement",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Great AI Hackathon 2025",
        timeframe: "September 2025",
        role: "AI Legal Assistant Development",
        achievements: [
          "💡 Participant - AI Legal Assistant at ASEAN's Biggest AI Hackathon|/images/achievements/hackathons/great-ai-2025/aws-great-ai-hackathon-certificate.png",
        ],
        images: [
          {
            src: "/images/achievements/hackathons/great-ai-2025/great-ai-1.jpg",
            alt: "Great AI Hackathon 2025 - Team at event",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/hackathons/great-ai-2025/great-ai-2.jpg",
            alt: "Great AI Hackathon 2025 - AI Legal Assistant demo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "CodeNection Hackathon MMU 2025",
        timeframe: "August 2025",
        role: "Mental Health App Development",
        achievements: [
          "🧠 Participant - Mental Health App for Student Track",
        ],
        images: [
          {
            src: "/images/achievements/hackathons/codenection-2025/codenection-1.png",
            alt: "CodeNection Hackathon 2025 - Mental Health App project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "International Competitions",
        timeframe: "2019 - 2021",
        role: "Mathematics & Innovation Excellence",
        achievements: [
          "🥉 Bronze Medal - Singapore International Math Olympiad Challenge (SIMOC) 2021 - Individual Math Olympiad|/images/achievements/certificates/international/simoc-2021/simoc-math-olympiad-certificate.pdf",
          "🥈 Silver Medal - SIMOC 2021 - Team Mind Sports|/images/achievements/certificates/international/simoc-2021/simoc-mind-sports-certificate.pdf",
          "📜 Certificate - SIMOC 2021 - Team Math Master Mind|/images/achievements/certificates/international/simoc-2021/simoc-math-master-mind-certificate.pdf",
          "🥉 Bronze Medal - Singapore and Asian Schools Math Olympiad (SASMO) 2021|/images/achievements/certificates/international/sasmo-2021/sasmo-certificate.pdf",
          "📜 Exemplary Certificate - Singapore Math Global Finals 2021|/images/achievements/certificates/international/singa-2021/singa-certificate.jpg",
          "📜 Certificate - DELF A1 French Language Test 2019",
        ],
        images: [
          {
            src: "/images/achievements/certificates/international/simoc-2021/simoc-math-olympiad-picture.jpg",
            alt: "SIMOC 2021 - Math Olympiad Team Photo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Pre-University Matriculation Innovation Competition (PIITRAM) 2023",
        timeframe: "2023",
        role: "Innovation Project",
        achievements: [
          "🥇 Gold Medal - Pre-University Matriculation Innovation Competition (PIITRAM) 2023|/images/achievements/certificates/national/piitram-2023/piitram-2023-certificate.pdf",
        ],
        images: [
          {
            src: "/images/achievements/certificates/national/piitram-2023/piitram-2023-picture-1.jpg",
            alt: "PIITRAM 2023 - Gold Medal Achievement",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/certificates/national/piitram-2023/piitram-2023-picture-2.jpg",
            alt: "PIITRAM 2023 - Innovation Project Showcase",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creations de UiTM International Mega Innovation Carnival 2023",
        timeframe: "2023",
        role: "Innovation Competition",
        achievements: [
          "🥇 Gold Medal - Creations de UiTM International Mega Innovation Carnival 2023|/images/achievements/certificates/national/creations-de-uitm-2023/creations-de-uitm-certificate.pdf",
        ],
        images: [],
      },
      {
        company: "Arduino Showcase UiTM",
        timeframe: "2023",
        role: "IoT Project Competition",
        achievements: [
          "🥉 3rd Place - Arduino Showcase UiTM|/images/achievements/certificates/national/arduino-showcase/arduino-showcase-certificate.pdf",
        ],
        images: [
          {
            src: "/images/achievements/certificates/national/arduino-showcase/arduino-showcase-picture-1.jpg",
            alt: "Arduino Showcase UiTM - Project Display",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/certificates/national/arduino-showcase/arduino-showcase-picture-2.jpg",
            alt: "Arduino Showcase UiTM - Team Presentation",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/certificates/national/arduino-showcase/arduino-showcase-picture-3.jpg",
            alt: "Arduino Showcase UiTM - Technical Demo",
            width: 16,
            height: 9,
          },
          {
            src: "/images/achievements/certificates/national/arduino-showcase/arduino-showcase-picture-4.jpg",
            alt: "Arduino Showcase UiTM - Award Ceremony",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Mathematics & STEM Competitions",
        timeframe: "2020 - 2021",
        role: "National Competitions",
        achievements: [
          "🥈 Silver Medal - IoT Poster Competition 2020|/images/achievements/certificates/national/iot-poster-2020/iot-poster-certificate.jpg",
          "🏅 Honorable Mention - Kangaroo Math Competition 2021|/images/achievements/certificates/national/kmc-2021/kmc-2021-certificate.pdf",
          "🏅 Honorable Mention - Beaver Computational Competition 2020|/images/achievements/certificates/national/beaver-2020/beaver-2020-certificate.pdf",
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universiti Putra Malaysia (UPM)",
        description: <>Bachelor of Software Engineering • Semester 4 • CGPA: 4.00 (Vice Chancellor's Award)</>,
        logo: "/images/schools/upm-logo.png",
        timeframe: "2023 - Present",
      },
      {
        name: "UiTM Dengkil (ASiD)",
        description: <>Foundation in Engineering • CGPA: 4.0 (Perfect Score) • MUET Band 3.5</>,
        logo: "/images/schools/uitm-logo.png",
        timeframe: "2022",
      },
      {
        name: "Kolej PERMATA Insan (KPI)",
        description: <>SPM (Malaysian High School) • 10A 1B</>,
        logo: "/images/schools/kpi-logo.png",
        timeframe: "2021",
      },
      {
        name: "SBPI Sabak Bernam (Intesaber)",
        description: <>PT3 (Lower Secondary Assessment) • 9A 1B 1C</>,
        logo: "/images/schools/sbpi-logo.png",
        timeframe: "2019",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Full-Stack Development",
        description: (
          <>
            Proficient in building complete web applications from frontend to backend. 
            Experienced with React, Next.js for modern web interfaces, and Laravel, Node.js for robust backend APIs.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Laravel", icon: "laravel" },
          { name: "Node.js", icon: "nodejs" },
        ],
        images: [],
      },
      {
        title: "Mobile Development",
        description: (
          <>
            Experienced in building cross-platform mobile applications using Flutter framework.
            Capable of creating responsive, native-feeling apps for both Android and iOS.
          </>
        ),
        tags: [
          { name: "Flutter", icon: "flutter" },
          { name: "Java", icon: "java" },
        ],
        images: [],
      },
      {
        title: "Database & Backend",
        description: (
          <>
            Skilled in designing and managing databases with MySQL. 
            Experienced in building RESTful APIs and server-side logic with PHP (Laravel) and JavaScript (Node.js).
          </>
        ),
        tags: [
          { name: "MySQL", icon: "mysql" },
          { name: "PHP", icon: "php" },
          { name: "Node.js", icon: "nodejs" },
        ],
        images: [],
      },
      {
        title: "Core Programming",
        description: (
          <>
            Strong foundation in core programming languages. Java as primary language for enterprise applications,
            and JavaScript for web development. Proficient in HTML/CSS for frontend structure and styling.
          </>
        ),
        tags: [
          { name: "Java", icon: "java" },
          { name: "JavaScript", icon: "javascript" },
          { name: "HTML/CSS", icon: "html" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: "Featured Projects",
  description: `A collection of web and mobile projects.`,
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}. Open to internship opportunities and software engineering roles.`,
};

export { person, social, newsletter, home, about, work, contact };
