import React from "react"


function DisplayDrinks({ drinks }) {
    return (
        <ul>
            {drinks.map((drink) => (
                <li key={drink.idDrink}>
                    <div>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                        <p> {drink.strDrink} - {drink.idDrink}</p>
                        </div>
                </li>
            ))}  
        </ul>
    ); 
}

 

export default DisplayDrinks;