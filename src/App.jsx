import React from "react"
import './App.css'
import DisplayDrinks from "./components/Drinks";

//www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail


const App = () => {

const [drink, setDrink] = React.useState([]);
const [searchEngine, setSearchEngine]= React.useState('');

React.useEffect (()=> {


  async function fetchDrinks() {
    const resp = await fetch('/proxy/api/json/v1/1/filter.php?c=Cocktail')
    const drinks = await resp.json()
    setDrink(drinks.drinks)
    // console.log(drinks.drinks)
  }
  fetchDrinks()

}, [])

const handleSearchEngine = (event)=> {
  setSearchEngine(event.target.value);
}

const filteredDrinks =drink.filter((drink)=>
  drink.strDrink.includes(searchEngine)
);
const handleClick =() => {
  console.log("Search button was clicked");
}


  return <>
  <div>
    <h1>React To This Cocktail</h1>
    <input
    type= "text"
    placeholder= "Search for a great Drink..."
    onChange={handleSearchEngine}
    value={searchEngine}
    />
    <div>
    <button onClick= {handleClick}> Search Here </button>
    <DisplayDrinks drinks={filteredDrinks}/>
</div>
</div>
  </>
}

export default App;
