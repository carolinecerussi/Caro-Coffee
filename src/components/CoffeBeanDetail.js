import React from "react";
import PropTypes from "prop-types";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function CoffeeBeanDetail(props) {
	const{coffeeBean, onClickingDelete} = props;

	return(
		<React.Fragment>
			<h1>{coffeeBean.name} details: </h1>
			<h2>Origin: {coffeeBean.origin}</h2>
			<h2>Price: {coffeeBean.price}</h2>
			<h2>Roast:</h2>
		</React.Fragment>
	)



	<div class="dropdown roast selection">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="actions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </a>
  <div class="dropdown-menu" aria-labelledby="actions">
    <a class="dropdown-item" href="#">Light</a>
    <a class="dropdown-item" href="#">Medium</a>
    <a class="dropdown-item" href="#">Dark</a>
  </div>
</div>
name
origin
price
roast
description