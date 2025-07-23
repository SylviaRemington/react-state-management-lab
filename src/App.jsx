// importing the useState() hook from React at top of App.jsx
import { useState } from 'react';
import './App.css';

//Adding array of fighters of the zombies:
const fighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]


const App = () => {
  // Setting up state
  //1. Creating a new state variable named team & setting initial state to an empty array.
  const [team, setTeam] = useState();
  console.log('My team state variable/value is:', team);

  //2. Creating new state variable named money & setting initial state to 100
  const [money, setMoney] = useState(100);

  //3. Creating new state variable named zombieFighters & setting initial state to the array of objects - different fighters against zombies.
  const [zombieFighters, setZombieFighters] = useState(fighters);


  return (
    <h1>Hello world!</h1>
  );
}

//4. Map through zombieFighters to show image, name, price, strength, agility & ADD BUTTON FOR EACH
// Show all zombie fighters on screen by looping through the list 
// Display the list of zombie fighters by looping through the array and rendering them in the user interface of App.jsx.


export default App



/*
React Components I Could Create:
(If Not Restricted to App.jsx)

ZombieFighterCard
Displays: Image, name, price, strength, agility.
Includes: "Add" button (for available fighters).

TeamMemberCard
Displays: Image, name, price, strength, agility.
Includes: "Remove" button (for team members).

TeamStats
Displays: Total cost, total strength, total agility of the team.

MoneyDisplay
Shows: Remaining money.

EmptyTeamMessage
Conditionally renders: "Pick some team members!" when team is empty.

Why Separate These?
ZombieFighterCard and TeamMemberCard share similar UI but different actions (Add vs. Remove).
TeamStats and MoneyDisplay are pure calculations/display.
EmptyTeamMessage is a conditional UI element.

Boundary Clarification
State (like team, money, zombieFighters) would stay in App.jsx and pass down via props.

Logic (like handleAddFighter, handleRemoveFighter) would stay in App.jsx.

*/