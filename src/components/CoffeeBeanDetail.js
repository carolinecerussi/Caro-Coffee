import React from "react";
import PropTypes from "prop-types";


function CoffeeBeanDetail(props) {
	const{ coffeeBean } = props;
	return[
		<React.Fragment
		 key={coffeeBean.id}>
			<h1>{coffeeBean.name} Details: </h1>
			<h2>Origin: {coffeeBean.origin}</h2>
			<h2>Roast: {coffeeBean.roast}</h2>
			<h2>Price: {coffeeBean.price}</h2>
			<h2>Description: {coffeeBean.description }</h2>
			<button onClick={() => props.onClickingSell(coffeeBean.weight)}>Sell</button>
			<button onClick={()=> props.onClickingDelete(coffeeBean.id)}>Delete Coffee Bag</button>
			<button onClick={props.onClickingEdit} > Edit Coffee Details</button>
		</React.Fragment>
	]
}
CoffeeBeanDetail.propTypes = {
	coffeeBean: PropTypes.object,
	onClickingDelete:PropTypes.func,
	onClickingEdit : PropTypes.func,
	onClickingSell: PropTypes.func
};

export default CoffeeBeanDetail;

