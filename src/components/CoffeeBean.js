export default function App() {
  
	
	
	const coffeeBeans = [
  //   {id: 1, name: 'Alice', origin: 'Austria', description: 'Hints of chocolate, honey, and molasses'},

	];
	const roast = [
		{label: "Light" , value:1},
		{label: "Medium", value:2},
		{label: "Dark", value:3}
	]; 

  return (
    <div>
      {coffeeBeans.map(({id, name, origin, roast price, description}) => {
        return (
          <div key={id}>
            <h2>name: {name}</h2>
            <h2>origin: {origin}</h2>
						<h2>Roast: <Select options={ roast }/></h2>
						<h2>price: {price}</h2>
						<h2>description: {description}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
