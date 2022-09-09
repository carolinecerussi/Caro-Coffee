//Parent component for NewCoffeeBeanForm.js and CoffeeBeanList.js

import React from "react";
import NewCoffeeBeanForm from './NewCoffeeBeanForm';
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

	handleAddingNewCoffeeBeanToList = (newCoffeeBean) => {
		const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newCoffeeBean);
		this.setState({mainCoffeeBeanList: newMainCoffeeBeanList,
		formVisibleOnPage: false });
	} 

	handleDeletingCoffeeBean = (id) => {
		const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean.id !== id);
		this.setState({
			mainCoffeeBeanList: newMainCoffeeBeanList,
			selectedCoffeeBean: null
		})
		}

	handleEditingCoffeeBeanInList = (coffeeBeanToEdit) => {
		const editedMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !==this.state.selectedCoffeeBean.id).concat(coffeeBeanToEdit);
		this.setState({
			mainCoffeeBeanList: editedMainCoffeeBeanList,
			editing: false,
			selectedCoffeeBean: null
		})
	}
	handleEditClick= (id) => {
		console.log("edit click complete");
		this.setState({editing: true});
	}
	handleClick = () => {
		if (this.state.selectedText !=null) {
			this.setState ({
				formVisibleOnPage: false,
				selectedCoffeeBean: null,
				editing: false
		});
		} else {
			this.setState(prevState => ({
				formVisibleOnPage: !prevState.formVisibleOnPage
			}));
		}
	}

handleChangingCoffeeBeanWeight = (CoffeeBeanWeightToEdit) => {
	const selectedCoffeeBean = this.state.mainCoffeeBeanList.filter(coffeeBean => coffee)
}


setWeight({
	...weight,
	pounds: weight.pounds + parseInt(130)
})