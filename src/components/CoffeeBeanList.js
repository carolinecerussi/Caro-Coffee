import React from "react";
import CoffeeBean from "./CoffeeBean";
import PropTypes from "prop-types";

function CoffeeBeanList(props) {
	// const coffeeBeanListStyles = {
	// 	color: '#B2A479',
	// 	backgroundColor: '#B06001',
	// 	fontFamily: 'verdana',
	// 	textAlign: 'center',
	// 	padding: '15px',
	// 	margin: 'auto',
	// 	marginRight: '800'		
	// }
	return (
<React.Fragment>
		{props.coffeeBeanList.map(coffeeBean => (
			<CoffeeBean 
			whenCoffeeBeanClicked = {props.onCoffeeBeanSelection}
			names = {coffeeBean.names}
			origin = {coffeeBean.origin}
			roast = {coffeeBean.Roast}
			price = {coffeeBean.price}
			description = {coffeeBean.description}
			weight = {coffeeBean.weight}
			id = {coffeeBean.id}
			key = {coffeeBean.id}/>
		))}
</React.Fragment>
	);
}

CoffeeBeanList.propTypes = {
	coffeeBeanList : PropTypes.array,
	onCoffeeBeanSelection: PropTypes.func
};

export default CoffeeBeanList;








