import {React, useState } from 'react'
 
export default function App() {

	const roast = [
		{value: "Light" },
		{value: "Medium"},
		{value: "Dark"}
	]; 

  return (
    <div>
      {coffeeBeans.map(({id, name, origin, roast, price, description}) => {
        return (
          <div key={id}>
            <h2>name: {name}</h2>
            <h2>origin: {origin}</h2>
						<h2>Roast: {roast}</h2>
						<h2>price: {price}</h2>
						<h2>description: {description}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
