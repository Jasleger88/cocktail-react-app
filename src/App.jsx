import React from "react"
import './App.css'
import DisplayDrinks from "./components/Drinks";


//www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail


const App = () => {

  const [drink, setDrink] = React.useState([]);
  const [searchEngine, setSearchEngine] = React.useState('');
  const [isInterested, setIsInterested] = React.useState(true);

  React.useEffect(() => {


    async function fetchDrinks() {
      const resp = await fetch('/proxy/api/json/v1/1/filter.php?c=Cocktail')
      const drinks = await resp.json()
      setDrink(drinks.drinks)
      // console.log(drinks.drinks)
    }
    if(isInterested)
    fetchDrinks()
  }, [isInterested, searchEngine])

  
  const handleSearchEngine = (event) => {
    setSearchEngine(event.target.value);
  }

  const filteredDrinks = drink.filter((drink) =>
    drink.strDrink.includes(searchEngine)
  );

  const handleClick = () => {
    fetchDrinks()
    drink.strDrink.includes(searchEngine);
    drink.strDrinkThumb.includes(isInterested);
    console.log("Search button was clicked");
  }

  const goBackToMainPage = () => {
    window.location.href= '/';
  }

  const handleYes = (event) => {
    const selectedDrink = event.target.value;
    setIsInterested(true);
    if(isInterested) {
     console.log("Lets have a drink tonight" + selectedDrink);
        }  else {
      goBackToMainPage();
    }
  }

  const handleNo = (event) => {
    setIsInterested(false);
    goBackToMainPage();

  }



  return <>
    <div>
      <h1>React To This Cocktail</h1>
      <input
        type="text"
        placeholder="Search for a great Drink..."
        onChange={handleSearchEngine}
        value={searchEngine}
      />
      <div>
      <button onClick={handleClick} className="search"> Search Here </button>
      </div>
      <div>
      <button onClick={handleYes} className="interest-button" style={{ backgroundColor: isInterested ? 'orange' : 'lightgray' }}>
        Is Interested 🧡
      </button>
      <button onClick={handleNo} className="interest-button" style={{ backgroundColor: !isInterested ? 'blue' : 'lightgray' }}>
        Not Interested 🙊
      </button>
    </div>
  </div>
    <DisplayDrinks drinks={filteredDrinks} />
  </>
}

export default App;
