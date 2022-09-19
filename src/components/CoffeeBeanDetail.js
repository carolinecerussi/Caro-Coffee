import React from "react";
import PropTypes from "prop-types";


function CoffeeBeanDetail(props) {
	const{ coffeeBean, onClickingDelete } = props;
	return(
		<React.Fragment
		 key={coffeeBean.id}>
			<h1>{coffeeBean.name} Details: </h1>
			<hr />
			<h2>Origin: {coffeeBean.origin}</h2>
			<hr />
			<h2>Roast: {coffeeBean.roast}</h2>
			<hr />
			<h2>Price: {coffeeBean.price}</h2>
			<hr />
			<h2>Description: {coffeeBean.description }</h2>
			<hr />
			<h2>Quantity: {coffeeBean.quantity}</h2>
			<button  onClick={ props.onClickingEdit } >Edit Coffee Information</button>
			<button onClick={()=> onClickingDelete(coffeeBean.id)}>Delete Coffee Bag</button>
			<button onClick={ props.onClickingSell }>Sell Some Coffee </button>
		</React.Fragment>
	);
	}
CoffeeBeanDetail.propTypes = {
	coffeeBean: PropTypes.object,
	onClickingDelete:PropTypes.func,
	onClickingEdit : PropTypes.func,
	onClickingSell: PropTypes.func
};

export default CoffeeBeanDetail;

 