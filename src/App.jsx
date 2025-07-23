// src/App.jsx

const App = () => {
  //1. Creating a new state variable named team & setting initial state to an empty array.
  const [team, setTeam] = useState();
  console.log('My team state variable/value is:', team);

  //2. Creating new state variable named money & setting initial state to 100
  const [money, setMoney] = useState(100);

  //3. Creating new state variable named zombieFighters & setting initial state to the array of objects.
  const [zombieFighters, setZombieFighters] = useState(fighters);


  return (
    <h1>Hello world!</h1>
  );
}

export default App
