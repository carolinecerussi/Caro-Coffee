//Parent component for NewCoffeeBeanForm.js and CoffeeBeanList.js

import { React, useState } from 'react'
import NewCoffeeBean from './NewCoffeeBeanForm';
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';


class CoffeeBeanControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formVisibleOnPage: false, //new coffeebean form
			mainCoffeBeanList: [],
			selectedCoffeeBean: null,
			editing: false // form for editing ticket
		};
	}

	handleAddingNewCoffeeBean = (newCoffeeBean) => {
		const newMainCoffeeBeanList = this.state.mainCoffeBeanList.concat(newCoffeeBean);
		this.setState({mainCoffeBeanList = newMainCoffeeBeanList,
		formVisibleOnPage: false });
	}
	handleCoffeeWeightLeft = () => {
		const [coffeeWeight, setCoffeeWeight] = useState(130);
		const decrease = () => {
			if (coffeeWeight > 0) {
			setCoffeeWeight(pounds => pounds - 1)
		}
		};
		
		return (
			<div className ="coffeeWeight">
				<h1> Beans left: <span>{setCoffeeWeight}</span></h1>
			</div>
		)
	const newCoffeeWeight = this.state.coffeeWeight.push()
};

setWeight({
	...weight,
	pounds: weight.pounds + parseInt(130)
})