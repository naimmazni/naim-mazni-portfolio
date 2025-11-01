/**
 * Centralized team member data
 * This file contains all team member information used across project pages
 */

export interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  linkedIn: string;
}

export const teamMembers: Record<string, TeamMember> = {
  "muhammad-naim": {
    id: "muhammad-naim",
    name: "Muhammad Naim",
    avatar: "/images/team/muhammad-naim.png",
    linkedIn: "https://www.linkedin.com/in/muhammad-naim-mazni/",
  },
  "muhammad-haizad": {
    id: "muhammad-haizad",
    name: "Muhammad Haizad",
    avatar: "/images/team/muhammad-haizad.png",
    linkedIn: "https://www.linkedin.com/in/muhammad-haizad/",
  },
  "hafiy-azfar": {
    id: "hafiy-azfar",
    name: "Hafiy Azfar",
    avatar: "/images/team/hafiy-azfar.png",
    linkedIn: "https://www.linkedin.com/in/hafiy-azfar-4311982b5/",
  },
  "hazriq-haykal": {
    id: "hazriq-haykal",
    name: "Hazriq Haykal",
    avatar: "/images/team/hazriq-haykal.png",
    linkedIn: "https://www.linkedin.com/in/hazriq-haykal-251a32294/",
  },
  "izzah-mahmud": {
    id: "izzah-mahmud",
    name: "Izzah Mahmud",
    avatar: "/images/team/izzah-mahmud.png",
    linkedIn: "https://www.linkedin.com/in/izzahmahmud/",
  },
  "ammar-firdaus": {
    id: "ammar-firdaus",
    name: "Ammar Firdaus",
    avatar: "/images/team/ammar-firdaus.png",
    linkedIn: "https://www.linkedin.com/in/ammar-firdaus-nurul-hisyam-a4b0241b2/",
  },
  "wan-hafizuddin": {
    id: "wan-hafizuddin",
    name: "Wan Hafizuddin",
    avatar: "/images/team/wan-hafizuddin.png",
    linkedIn: "https://www.linkedin.com/in/wan-hafizuddin-b95b77245/",
  },
  "irsyad-lammert": {
    id: "irsyad-lammert",
    name: "Irsyad Lammert",
    avatar: "/images/team/irsyad-lammert.png",
    linkedIn: "https://www.linkedin.com/in/irsyad-lammert-a48965396/",
  },
  "siti-fatimah": {
    id: "siti-fatimah",
    name: "Siti Fatimah",
    avatar: "/images/team/siti-fatimah.png",
    linkedIn: "https://www.linkedin.com/in/siti-fatimah-ba7442206/",
  },
  "ain-safieya": {
    id: "ain-safieya",
    name: "A'in Safieya",
    avatar: "/images/team/ain-safieya.png",
    linkedIn: "https://www.linkedin.com/in/ainsafieya/",
  },
};

/**
 * Get team member by ID
 */
export const getTeamMember = (id: string): TeamMember | undefined => {
  return teamMembers[id];
};

/**
 * Get multiple team members by IDs
 */
export const getTeamMembers = (ids: string[]): TeamMember[] => {
  return ids
    .map((id) => teamMembers[id])
    .filter((member): member is TeamMember => member !== undefined);
};
