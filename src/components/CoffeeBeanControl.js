//Parent component for NewCoffeeBeanForm.js and CoffeeBeanList.js

import React from "react";
import NewCoffeeBeanForm from "./NewCoffeeBeanForm";
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';
// import { NonceProvider } from "react-select";


class CoffeeBeanControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			formVisibleOnPage: false, //new coffeebean form
			mainCoffeeBeanList: [],
			selectedCoffeeBean: null,
			editing: false,
			quantity: 0// form for editing ticket
		};
		this.handleShowForm = this.handleShowForm.bind(this);
	}
	handleShowForm = () => {
		 if(this.state.selectedCoffeeBean === null) {
			this.setState((prevState) => ({
				formVisibleOnPage : !prevState.formVisibleOnPage,
			}));
		 } else {
			this.setState({
				formVisibleOnPage: false,
				selectedCoffeeBean: null,
				editing: false
			});
		 }
	}
		//Create// add new coffee sack to list
		handleAddingNewCoffeeBeanToList = (newCoffeeBean) => {
			const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newCoffeeBean);
			this.setState({
				mainCoffeeBeanList: newMainCoffeeBeanList,
			formVisibleOnPage: false
			});
		}
//DELETE

handleDeletingCoffeeBean = (id) => {
	const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !== id);
	this.setState({
		mainCoffeeBeanList: newMainCoffeeBeanList,
		selectedCoffeeBean: null
	});
};

//Edit/Sell


		//below- changing inventory of selected coffee sack//
		handleChangingSelectedCoffeeBean = (id) => {
			const selectedCoffeeBean = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id === id)[0];
			this.setState({selectedCoffeeBean: selectedCoffeeBean});
		}
	


handleSellingCoffeeBean= () => {
	console.log(this.state.selectedCoffeeBean.quantity);
		const coffeeBeansSold = this.state.selectedCoffeeBean;
		if ( this.state.selectedCoffeeBean.quantity !== 0) {
			const quantityToSell = { 
				quantity: (coffeeBeansSold.quantity -=1)
			};
			this.handleChangingSelectedCoffeeBean(quantityToSell.id);
		console.log(this.state.selectedCoffeeBean.quantity);
		} else {
			this.handleChangingSelectedCoffeeBean(this.state.selectedCoffeeBean.id);
		}
	};

	
	handleEditingCoffeeBeanList = (coffeeBeanToEdit) => {
		const editedMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !==this.state.selectedCoffeeBean.id).concat(coffeeBeanToEdit);
		this.setState({
			mainCoffeeBeanList: editedMainCoffeeBeanList,
			editing: false,
			selectedCoffeeBean: null
		})
	}

	handleEditClick= () => {
		console.log('handleEditClick Reached');
	this.setState({editing: true});
	};



	//Read
	handleClick = () => {
		if (this.state.selectedCoffeeBean !=null) {
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



		
render() {
  const styledButton = {
    backgroundColor: 'pink',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    cursor: 'pointer',
    margin: 'auto'
	};


    
	let currentlyVisibleState = null;
	let buttonText = null; 


  if (this.state.editing){
		currentlyVisibleState = 
		<EditCoffeeBeanForm coffeeBean={this.state.selectedCoffeeBean} onEditCoffeeBean = {this.handleEditingCoffeeBeanList} />
    buttonText = "Return to List";
  }
	else if (this.state.selectedCoffeeBean !=null)  {
		currentlyVisibleState = 
    <CoffeeBeanDetail 
     coffeeBean={this.state.selectedCoffeeBean}
		 onClickingDelete={this.handleDeletingCoffeeBean}
		 onClickingEdit={this.handleEditClick}
		 onClickingSell={this.handleSellingCoffeeBean} 
		 />

	buttonText= "Return to List"

	} else if (this.state.formVisibleOnPage) {
		currentlyVisibleState = 
    <NewCoffeeBeanForm
onNewCoffeeBeanCreation={this.handleAddingNewCoffeeBeanToList} />;    
    buttonText = "Return to List";
	}
	else {
		currentlyVisibleState = 
		<CoffeeBeanList
		coffeeBeanList={this.state.mainCoffeeBeanList}
		onCoffeeBeanSelection = {this.handleChangingSelectedCoffeeBean} />
		buttonText= "Add New Coffee"
	}
	
	return(
		<React.Fragment>
{currentlyVisibleState}
<br></br>
<button style={styledButton} type="button" onClick={this.handleClick}>
	{buttonText}</button>
	<br></br>
	</React.Fragment>
	);
}
}

export default CoffeeBeanControl;