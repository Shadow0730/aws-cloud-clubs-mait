import type { SVGProps } from "react";

const facultyImage = (fileName: string) => `/faculty/${fileName}`;
const teamImage = (department: string, fileName: string) =>
  `/team/${department}/${fileName}`;

export type FacultyMember = {
  id: number;
  name: string;
  roleLabel?: string; // e.g. "FACULTY"
  desc: string;
  imageSrc?: string;
  socials?: {
    linkedin?: string;
  };
};

export const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Bhaskar Kapoor",
    roleLabel: "FACULTY",
    desc: "Empowering students with mentorship that blends wisdom",
    imageSrc: facultyImage("drBhaskar.jpeg"),
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-bhaskar-kapoor-6b4b7819/",
    },
  },
  {
    id: 2,
    name: "Dr. Bhoomi Gupta",
    roleLabel: "FACULTY",
    desc: "A communications lead who connects people and ideas",
    imageSrc: facultyImage("drBhoomi.jpeg"),
    socials: {
      linkedin: "https://www.linkedin.com/in/dr-bhoomi-gupta-3278a734/",
    },
  },
  {
    id: 3,
    name: "Dr. Monika Bhardwaj",
    roleLabel: "FACULTY",
    desc: "Organizes memorable experiences and events that leave a lasting impact",
    imageSrc: facultyImage("drMonika.jpeg"),
    socials: {
      linkedin: "https://www.linkedin.com/in/monika-bhardwaj-7709a3a9/",
    },
  },
  {
    id: 4,
    name: "Vikas Mani Tripathi",
    roleLabel: "FACULTY",
    desc: "Guiding students with expertise and dedication",
    imageSrc: facultyImage("vikasMani.jpg"),
    socials: { linkedin: "https://www.linkedin.com/in/vikas-mani-tripathi/" },
  },
  {
    id: 5,
    name: "Sanjana Deswal",
    roleLabel: "FACULTY",
    desc: "Inspiring excellence through innovative teaching and mentorship",
    imageSrc: facultyImage("sanjanaDeswal.jpg"),
    socials: {
      linkedin: "https://www.linkedin.com/in/sanjana-deswal-4b390616a/",
    },
  },
];

export type Socials = {
  linkedin?: string;
  instagram?: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  group?: string; // for grid filters
  imageSrc?: string; // for cards view / grid placeholder
  socials?: Socials;
};

export function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0h4.6v1.9h.1c.6-1.1 2.2-2.2 4.5-2.2 4.8 0 5.7 3.1 5.7 7.1V22H17v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V22H8V8z" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" {...props}>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.8-.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}
export const teamMembers: TeamMember[] = [
  // CORE TEAM
  {
    id: 1,
    name: "Khushneet",
    role: "SBG Leader",
    group: "Core Team",
    imageSrc: teamImage("content", "Khushneet.jpg"),
  },
  {
    id: 2,
    name: "Ridhi",
    role: "President",
    group: "Core Team",
    imageSrc: teamImage("event-management", "Ridhi.jpeg"),
  },
  {
    id: 3,
    name: "Sharvi",
    role: "Vice President",
    group: "Core Team",
    imageSrc: teamImage("social-media-photography", "Sharvi.jpeg"),
  },
  {
    id: 4,
    name: "Yatin",
    role: "Vice President",
    group: "Core Team",
    imageSrc: teamImage("core", "YatinKumar.jpeg"),
  },
  {
    id: 5,
    name: "Krish",
    role: "Secretary / Social Media Head",
    group: "Core Team",
    imageSrc: teamImage("social-media-photography", "Krish.jpeg"),
  },

  // EVENT MANAGEMENT
  {
    id: 6,
    name: "Vasudev Shukla",
    role: "Event Management Head",
    group: "Event Management",
    imageSrc: teamImage("event-management", "Vasudev.jpg"),
  },
  {
    id: 7,
    name: "Rishu Singh",
    role: "Event Management Head",
    group: "Event Management",
    imageSrc: teamImage("event-management", "RishuSingh.jpg"),
  },

  // CONTENT
  {
    id: 8,
    name: "Manav Garg",
    role: "Content Head",
    group: "Content",
    imageSrc: teamImage("content", "Manav.png"),
  },
  {
    id: 9,
    name: "Roshan Kumar",
    role: "Content Head",
    group: "Content",
    imageSrc: teamImage("content", "RoshanKumar.png.jpeg"),
  },

  // PUBLIC RELATIONS
  {
    id: 10,
    name: "Rehan Satija",
    role: "Public Relation Head",
    group: "Public Relations",
    imageSrc: teamImage("public-relations", "Rehan.jpg"),
  },

  // TECHNICAL
  {
    id: 11,
    name: "Aryan Gupta",
    role: "Technical Head",
    group: "Technical",
    imageSrc: teamImage("event-management", "Aryan.jpeg"),
  },
  {
    id: 12,
    name: "Abhishek Gupta",
    role: "Technical Head",
    group: "Technical",
    imageSrc: teamImage("technical", "AbhishekGupta.jpg"),
  },

  // SOCIETY COORDINATORS
  {
    id: 13,
    name: "Arpit Neewaliya",
    role: "Society Coordinator",
    group: "Society Coordinators",
    imageSrc: teamImage("technical", "Arpit.jpeg"),
  },
  {
    id: 14,
    name: "Aayush Grover",
    role: "Society Coordinator",
    group: "Society Coordinators",
    imageSrc: teamImage("society-coordinators", "AayushGrover.png.jpeg"),
  },
];

export const teamCategories = [
  "All",
  "Core Team",
  "Event Management",
  "Content",
  "Public Relations",
  "Technical",
  "Society Coordinators",
] as const;