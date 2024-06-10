import React from "react"


function DisplayDrinks({ drinks }) {
    return (
        <div className ="grid-container">
            {drinks.map((drink) => (
                <div key={drink.idDrink} className="drink-item">
                    <div>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                        <p>{drink.strDrink} - {drink.idDrink}</p>
                    </div>
                </div>
                
            ))}
        </div>
    );
}

 
export default DisplayDrinks;

