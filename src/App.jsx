// Hi Luke! I have a lot of notes on this lab, since I'm trying to keep track of where I'm at &
// understand it as I do the lesson (So I can come back later and understand what I did. Just fyi!)

//importing the useState() hook from React at top of App.jsx so that can initialize & use state
import { useState } from "react";
import "./App.css";

//Adding array of fighters of the zombies:
const fighters = [
  {
    id: 1,
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
  },
  {
    id: 2,
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
  },
  {
    id: 3,
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
  },
  {
    id: 4,
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
  },
  {
    id: 5,
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
  },
  {
    id: 6,
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
  },
  {
    id: 7,
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
  },
  {
    id: 8,
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
  },
  {
    id: 9,
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
  },
  {
    id: 10,
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
  },
];

const App = () => {
  // Setting up state - state can be a boolean, a string, a number, an array of objects, a piece of data that you are using to control keeping some data on the screen & that data can be updated.
  //Step 1 of Lesson - Creating a new state variable named team & setting initial state to an empty array.
  const [team, setTeam] = useState([]);
  console.log("My team state variable/value is:", team);

  //Step 2 of Lesson - Creating new state variable named money & setting initial state to 100
  const [money, setMoney] = useState(100);

  //Step 3 of Lesson - Creating new state variable named zombieFighters & setting initial state to the array of objects - different fighters against zombies.
  const [zombieFighters, setZombieFighters] = useState(fighters);


  // ----------------------------------------------------------------------------------------------

  // handleAddFighter Function

  //Step 6 of Lesson - Create a function named handleAddFighter().
  const handleAddFighter = (fighter) => {
    console.log('Add Fighter is working! 🎉🎉🎉');

    if (money < fighter.price) {
      console.log('Not enough money');
      return; //finish & exit function if not enough money
    }

    // Adding fighter to the end of the array (of the team I have - starts as an empty array) & save new version of the team via spread.
    // Setting the new state of team via setTeam
    setTeam([...team, fighter]);

    // Removing original fighter from zombieFighters array
    const updatedFighters = zombieFighters.filter((originalFighter) => {
      return originalFighter.id !== fighter.id;
    });

    //Addtl version
    //filter zombieFighters - another way but this seems more complex to me
    //const updatedFighters = zombieFighters.filter((f) => f.id !== fighter.id);

    // Addtl function but longer:
    // const updatedFighters = [];
    // for (let i = 0; i < zombieFighters.length; i++) {
    //   const currentFighter = zombieFighters[i];
    //   if (currentFighter.id !== fighter.id) {
    //     updatedFighters.push(currentFighter);
    //   }
    // }

    // Setting the updated state of the zombieFighters through setZombieFighters - Lesson: Once you have the new array, use it to set the zombieFighters state.
    setZombieFighters(updatedFighters);

    // Changing the updated state of money through setMoney - Lesson: Subtract the character’s price from your current money value.
    setMoney(money - fighter.price);
  };

  // ----------------------------------------------------------------------------------------------

  // handleRemoveFighter function

  const handleRemoveFighter = (fighter) => {
    console.log('Remove Fighter is working! Bye Bye!');
    // Remove the fighter from the team - changing state with setTeam and updatedTeam filter function
    const updatedTeam = team.filter((member) => member.id !== fighter.id);
    setTeam(updatedTeam);

    // Add the fighter back to the zombieFighters list with changing state to setZombieFighters
    setZombieFighters([...zombieFighters, fighter]);

    // Refund the fighter’s price with changing state with setMoney
    setMoney(money + fighter.price);
  };

  



  // ----------------------------------------------------------------------------------------------

  // Step 8 of Lesson - part 1 of 2
  // .reduce is 
  const totalStrength = team.reduce((total, fighter) => total + fighter.strength, 0);

  // Step 9 of Lesson - part 1 of 2
  const totalAgility = team.reduce((total, fighter) => total + fighter.agility, 0);


  return (
    <>
      <h1>Zombie Apocalypse Fighters</h1>

      <h2>All Available Fighters</h2>
      {/* Step 4 of Lesson - Map through zombieFighters to show image, name, price, strength, agility & ADD BUTTON FOR EACH */}
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            {/* Putting this part in order of the screenshot of how fighter is supposed to look on UI.*/}
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button className='button' onClick={() => handleAddFighter(fighter)}>ADD</button>
          </li>
        ))}
      </ul>

      {/* Step #7 */}
      <h4>My Ninja Superstar Fighter Team: </h4>
      {team.length === 0 ? (
        <p className="pick-some-team-members">Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter) => (
            <li key={fighter.id}>
              <img src={fighter.img} alt={fighter.name} />
              <h3>{fighter.name}</h3>
              <p>Price: {fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Step 8 of Lesson - part 2 of 2 */}
      <h4>Team Strength: {totalStrength}</h4>

      {/* Step 9 of Lesson - part 2 of 2 */}
      <h4>Team Agility: {totalAgility}</h4>

      {/* Step 5 of Lesson - Display the current value of money in the UI. */}
      <h4>The Current Value of Money: {money}</h4>
    </>
  );
};

export default App;

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
