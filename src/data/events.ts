export interface Event {
  id: string;
  title: string;
  category: "technical" | "non-technical";
  timing: string;
  image: string;
  description: string;
  fullDescription: string;
  rules: string[];
  prizes: {
    first: string;
    second: string;
    third: string;
  };
  coordinators: {
    name: string;
    phone: string;
  }[];
}

export const events: Event[] = [
  {
    id: "digi-bytes",
    title: "DIGI BYTES",
    category: "technical",
    timing: "10.00am to 03.00pm",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rules: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    prizes: {
      first: "TBD",
      second: "TBD",
      third: "TBD",
    },
    coordinators: [
      { name: "RESHMI ANANTHY S", phone: "+91 9688233521" },
    ],
  },
  {
    id: "adzap",
    title: "ADZAP",
    category: "technical",
    timing: "10.00am to 03.00pm",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rules: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    prizes: {
      first: "TBD",
      second: "TBD",
      third: "TBD",
    },
    coordinators: [
      { name: "HARINI K", phone: "+91 6374281238" },
    ],
  },
  {
    id: "tech-quest",
    title: "TECH QUEST",
    category: "technical",
    timing: "10.00am to 03.00pm",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rules: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    prizes: {
      first: "TBD",
      second: "TBD",
      third: "TBD",
    },
    coordinators: [
      { name: "MADHUJA T", phone: "+91 9344642198" },
    ],
  },
  {
    id: "doodle",
    title: "DOODLE",
    category: "non-technical",
    timing: "10.00am to 03.00pm",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rules: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    prizes: {
      first: "TBD",
      second: "TBD",
      third: "TBD",
    },
    coordinators: [
      { name: "DHANASRI S K", phone: "+91 6374914150" },
    ],
  },
  {
    id: "brain-battle",
    title: "BRAIN BATTLE",
    category: "non-technical",
    timing: "10.00am to 03.00pm",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rules: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    prizes: {
      first: "TBD",
      second: "TBD",
      third: "TBD",
    },
    coordinators: [
      { name: "Sathya Keerthi S", phone: "+91 9047319350" },
    ],
  },
  {
    id: "idea-connect",
    title: "IDEA CONNECT",
    category: "non-technical",
    timing: "10.00am to 03.00pm",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rules: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
    ],
    prizes: {
      first: "TBD",
      second: "TBD",
      third: "TBD",
    },
    coordinators: [
      { name: "SUBASHINI R", phone: "+91 9361162892" },
    ],
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find((event) => event.id === id);
};

export const getTechnicalEvents = (): Event[] => {
  return events.filter((event) => event.category === "technical");
};

export const getNonTechnicalEvents = (): Event[] => {
  return events.filter((event) => event.category === "non-technical");
};
