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
    fullDescription: "AdZap is the software marketing event where ideas spark, creativity zaps, and marketing meets imagination. Step into the future and transform bold concepts into powerful stories that sell. Think fast, act smart, and craft an ad that captures attention in seconds. With innovation as your weapon and teamwork as your strength, the stage is yours. Convince the judge that your vision is the future worth buying.",
    rules: [
      "Team size: 2 members",
      "Event includes Prelims & Finals (Top 8 teams qualify)",
      "Final round product will be picked randomly",
      "30 minutes preparation, 3 minutes presentation",
      "Only live ads – no digital or pre-recorded content",
      "Props must be brought by participants",
      "Content must be original and appropriate",
      "Judge’s decision is final, based on creativity, strategy, teamwork & presentation",
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
      "The judge’s decision will be final",
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
    description: "A fun 2-round doodle challenge where teams of 2 participants test their creativity and teamwork. Complete, connect, and create doodles under exciting constraints.",
    fullDescription: "A fun 2-round doodle challenge where teams of 2 participants test their creativity and teamwork. Complete, connect, and create doodles under exciting constraints.\n\n🎨 Round 1 – Half Doodle\n• Task: Complete the given half doodle creatively.\n• Time: 10 minutes.\n• Constraint: Pencil only, no eraser allowed.\n\n🎨 Round 2 – Theme Doodle (Final)\n• Qualification: Top 8 teams.\n• Task: Create a doodle based on a given theme.\n• Time: 10 minutes.\n• Twist: Swap drawing every 1 minute.\n• Constraint: No talking allowed.\n\n🏆 Winner Selection\nBased on Creativity, Team coordination, and Theme representation.",
    rules: [
      "Team size: 2 members",
      "Participants must bring their own pencil",
      "Round 1: Pencil only, no eraser allowed",
      "Round 2: Swap drawing every 1 minute, no talking",
      "Judged on: Creativity, Team coordination, Theme representation",
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
    description: "Brain Battle is an exciting team-based event where participants must use every last brain cell to conquer three challenging rounds that test the team’s intelligence, observation, and speed.",
    fullDescription: "Brain Battle is an exciting team-based event where participants must use every last brain cell to conquer three challenging rounds that test the team’s intelligence, observation, and speed.\n\nThe event consists of three distinct rounds, and the competition finally concludes with two teams emerging as the ultimate winners.\n\nCommon Rules:\n🔹 Team Composition: 2 members per team.\n🔹 Shortlisting: Top teams from R1 go to R2; Best performing teams go to R3 (Final 6).\n\n🧠 Round 1 – IQ Test\n• Questions: IQ-based, logical, and fun-thinking.\n• Format: Verbal answers with proper explanation.\n• Evaluation: Logic and clarity (not guessing).\n• Warning: 3 wrong explanations = Disqualification.\n\n👁️🧠 Round 2 – Image Memory\n• Task: Recall images in displayed order.\n• Progression: Sets of 5 images added progressively (recall previous + new).\n• Focus: Memory accuracy and sequence.\n\n⚡🖼️ Round 3 – Rapid Image Fire\n• Format: Image displayed for 5-10s, followed by rapid questions.\n• Speed: Answer quickly and accurately.\n• Warning: 1-2 wrong answers = Disqualification.\n• Participants: Final 6 teams only.",
    rules: [
      "Team Size: 2 members only",
      "Round 1 (IQ Test): Verbal answers with logic; 3 wrong explanations = Disqualification",
      "Round 2 (Image Memory): Progressive recall of image sequences",
      "Round 3 (Rapid Image Fire): 5-10s image display; rapid Q&A for final 6 teams",
      "Strict disqualification rules apply for wrong answers/explanations",
      "Mobile phones are expressly prohibited",
      "Judge's decision is final",
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
