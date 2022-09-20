import React from "react";
import PropTypes from "prop-types";


function CoffeeBeanDetail(props) {
	const{ coffeeBean, onClickingDelete } = props;
	const styledSubmit = {
		backgroundColor: 'white',
    color: 'pink',
    fontSize: '16pt',
    padding: '10px',
    cursor: 'pointer',
    margin: 'auto'
	}
	return(
		
		<React.Fragment
		 key={coffeeBean.id}>
			<h1>{coffeeBean.name} Details: </h1>
			<br></br>
			<h2>Origin: {coffeeBean.origin}</h2>
			<br></br>
			<h2>Roast: {coffeeBean.roast}</h2>
			<br></br>
			<h2>Price: {coffeeBean.price}</h2>
			<br></br>
			<h2>Description: {coffeeBean.description }</h2>
			<br></br>
			<h2>Quantity: {coffeeBean.quantity}</h2>
			<button style={styledSubmit} onClick={ props.onClickingEdit } >Edit Coffee Information</button>
			<br></br>
			<button style={styledSubmit} onClick={()=> onClickingDelete(coffeeBean.id)}>Delete Coffee Bag</button>
			<br></br>
			<button style={styledSubmit} onClick={ props.onClickingSell }>Sell Some Coffee </button>
			<br></br>
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

 