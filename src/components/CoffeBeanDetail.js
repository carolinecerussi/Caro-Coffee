import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function CoffeeBeanDetail(props) {
	const{ coffeeBean, onClickingDelete } = props;

	return(
		<React.Fragment>
			<h1>{coffeeBean.name} Details: </h1>
			<h2>Origin: {coffeeBean.origin}</h2>
			<h2>Roast: {coffeeBean.roast}</h2>
			<h2>Price: {coffeeBean.price}</h2>
			<h2>Description: {coffeeBean.description }</h2>
			<Button onClick={()=> onClickingDelete(coffeeBean.id)}>Delete Coffee Bag</Button>
			<Button onClick={ props.onClickingEdit} > Edit Coffee Details</Button>
		</React.Fragment>
	);
}

CoffeeBeanDetail.propTypes = {
	coffeeBean: PropTypes.object,
	onClickingDelete:PropTypes.func,
	onClickingEdit : PropTypes.func
};

export default CoffeeBeanDetail;

