import { useState } from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {
    const [animals, setAnimals] = useState([]);

    //Add event handler that will run reference the entire handleClick function and call/invoke the function "in the future" anytime the user clicks the button below
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };
    
    return <div>
        {/*pass the handleClick function as a prop to button*/}
        <button onClick={handleClick}>Add Animal</button>
        <div>{animals}</div>
        
    </div>
}

export default App;