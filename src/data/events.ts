import digibytesImg from '../assets/events/digibytes.png';
import adzapImg from '../assets/events/adzap.png';
import techQuestImg from '../assets/events/tech-quest.png';
import doodleImg from '../assets/events/doodle.png';
import brainBattleImg from '../assets/events/brain-battle.png';
import ideaConnectImg from '../assets/events/idea-connect.png';

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
    image: digibytesImg,
    description: "DIGI BYTES is a thrilling 2-member team event that challenges your memory, technical skills, logical thinking, communication, and creativity across multiple fun-filled rounds.",
    fullDescription: "Department of Computer Science (Aided)\n\n“Think Fast. Code Smart. Create Bold.”\n\nDIGI BYTES is a thrilling 2-member team event that challenges your memory, technical skills, logical thinking, communication, and creativity across multiple fun-filled rounds.\n\nEvent Highlights:\n🔹 Round 1 – Memory Game: Memorize and recall technical terms\n🔹 Round 2 – Skill Round: Guess technical words using clues\n🔹 Round 3 – Coding Round: Fill missing code and crack logic.\n\nEvent Structure:\nDIGI BYTES consists of three main rounds, and the event flow may vary depending on the number of participants:\n\nIn this event, the teams progress through Round 1 and the selected teams will be progress through Round 2 and same for Round 3, and the winners will be decided based on overall performance.\n\n✨ Perfect for students who love tech with a twist of fun!",
    rules: [
      "Team Size: 2 members",
      "Team changes not allowed",
      "Winners are selected based on overall performance",
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
    image: adzapImg,
    description: "AdZap is the software marketing event where ideas spark, creativity zaps, and marketing meets imagination.",
    fullDescription: "AdZap is the software marketing event where ideas spark, creativity zaps, and marketing meets imagination. Step into the future and transform bold concepts into powerful stories that sell. Think fast, act smart, and craft an ad that captures attention in seconds. With innovation as your weapon and teamwork as your strength, the stage is yours. Convince the judges that your vision is the future worth buying.",
    rules: [
      "Each team must consist of exactly 4 participants",
      "The competition includes Prelims and Finals. Only the top 8 teams qualify for the final round",
      "In the final round, teams will randomly pick one futuristic product from the provided lot",
      "Preparation time: 30 minutes and Advertisement duration: strictly 3 minutes",
      "Participants must bring and use their own props. Strictly no digital ads or pre-recorded content allowed",
      "Content must be original, appropriate, and relevant to the product",
      "Judge's decision will be final and binding, based on creativity, marketing strategy, teamwork and presentation",
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
    image: techQuestImg,
    description: "Tech Quest is a technical quiz event that tests participants’ knowledge, thinking, and problem-solving skills through three rounds.",
    fullDescription: "Tech Quest is a technical quiz event that tests participants’ knowledge, thinking, and problem-solving skills through three rounds:\n\nRound 1: Technical objective questions.\nRound 2: Scenario-based questions.\nRound 3: Problem-solving, coding, and logical reasoning.",
    rules: [
      "Open to all participants of the Technical Fest",
      "Team participation with 2 members only",
      "The quiz consists of 3 rounds",
      "Participants should carry their own pen (one or two)",
      "Each round has a fixed time limit",
      "Mobile phones are strictly prohibited during the event",
      "Answers cannot be changed after submission",
      "Any form of cheating will lead to disqualification",
      "The judges’ decision will be final",
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
    image: doodleImg,
    description: "This is a fun two-round doodle event where each team has two participants. In Round 1, teams are given half of a doodle image and must complete it using their creativity.",
    fullDescription: "This is a fun two-round doodle event where each team has two participants. In Round 1, teams are given half of a doodle image and must complete it using their creativity.\n\nThe 8 selected teams move to Round 2, where each team is provided with a theme and must create a doodle based on it, swapping turns every minute. The event tests creativity and teamwork.\n\nRules Round 1:\n1. Each team has 2 participants.\n2. Each team receives half of a doodle image to complete.\n3. Time: 10 minutes.\n4. Participants can discuss ideas and develop the doodle creatively.\n5. Only pencil is allowed; no eraser.\n\nRound 2 (Final):\n1. 8 teams selected from Round 1\n2. Each team receives the same theme.\n3. Time: 10 minutes; participants swap drawing every 1 minute.\n4. No talking or discussion allowed.\n5. Participants must continue their partner’s drawing and stick to the theme.\n\nWinner Selection:\nWinners will be chosen based on:\nCreativity and interesting doodle art\nTeam coordination\nDoodle artwork should clearly represent the theme",
    rules: [
      "Team Size: 2 participants",
      "Round 1: Complete half doodle (10 mins, pencil only, no eraser)",
      "Round 2: Theme based, swap every 1 min (10 mins, no talking)",
      "Criteria: Creativity, Team Coordination, Theme Representation",
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
    image: brainBattleImg,
    description: "Brain Battle is the event in which the participants has to spend the last brain cells to win the game of 3 rounds that tests the ability of the team.",
    fullDescription: "Brain Battle is the event in which the participants has to spend the last brain cells to win the game of 3 rounds that tests the ability of the team.\n\nThree distinct rounds that ends with two teams as ultimate winners in the final round.\n\nDon't assume that it'll be too formal, we'll surely have fun within the designated rounds.\n\nHave fun!",
    rules: [
      "A team should contain only 2 members",
      "Round 1 will test the IQ levels of the team",
      "Round 2 will test the vision, memory and observation skills of the candidates",
      "Round 3 will test the rapid fire question that's being raised with the context of images",
      "The ultimate winner and runner up will be decided among the final 6 teams",
      "Every team has to be very conscious while attending the rounds",
      "Further Round specific rules will be announced as the event happens",
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
    image: ideaConnectImg,
    description: "IDEA CONNECT is a fun 2-member team event with three exciting rounds that test your memory, creativity, acting skills, and quick thinking.",
    fullDescription: "IDEA CONNECT is a fun 2-member team event with three exciting rounds that test your memory, creativity, acting skills, and quick thinking.\n\nRound 1 includes finding the movie using image clues followed by identifying the song through image connections.\nRound 2 is Dumb Charades, where one player acts using only gestures while the other guesses.\nRound 3 challenges participants to find the Tamil song from its English-translated lyrics.\n\nTeam Size: 2 members.\n\nWinner Selection: In the final round, there will be 5 members, and out of those, 3 will be selected as the winners.",
    rules: [
      "Time limit per question: 20–30 seconds",
      "Once the answer is given, no changes allowed",
      "Team discussion allowed where applicable",
      "Dumb Charades: only actions, no talking or pointing at people/objects",
      "Team Size: 2 members",
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
