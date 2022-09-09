import React from "react";
import PropTypes from "prop-types";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import CoffeeBean from './CoffeeBean';


function CoffeeBeanDetail(props) {
	const{coffeeBean, onClickingDelete} = props;

	return(
		<React.Fragment>
			<h1>{coffeeBean.name} details: </h1>
			<h2>Origin: {coffeeBean.origin}</h2>
			<h2>Roast: <Select options= { roast }/></h2>
			<h2>Price: {coffeeBean.price}</h2>
			<h2>Description: {coffeeBean.description }</h2>
		</React.Fragment>
	);
}

CoffeeBeanDetail.propTypes = {
	coffeeBean: PropTypes.object,
	onClickingDelete:PropTypes.func,
	onClickingEdit : PropTypes.func
};

export default CoffeeBeanDetail;

