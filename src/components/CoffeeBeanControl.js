//Parent component for NewCoffeeBeanForm.js and CoffeeBeanList.js

import React from "react";
import NewCoffeeBeanForm from "./NewCoffeeBeanForm";
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';


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
handleSellingCoffeeBean= (id) => {
	const soldCoffeeBeanList = this.state.mainCoffeeBeanList.map((coffeeBean) => {
		if (coffeeBean === id ) {
		if ( coffeeBean.quantity > 0) {
			return {
				...coffeeBean,
				quantity: coffeeBean.quantity -1,
			};
		} else {
				return coffeeBean;
			}
		}
	})

	this.setState({mainCoffeeBeanList: soldCoffeeBeanList})
	}

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

		//below- changing inventory of selected coffee sack//
	handleChangingSelectedCoffeeBean = (id) => {
		const selectedCoffeeBean = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id === id)[0];
		this.setState({selectedCoffeeBean: selectedCoffeeBean});
	}



		
render() {
  const styledButton = {
    backgroundColor: 'Pink',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    marginRight: '800',
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
<button style={styledButton} type="button" onClick={this.handleClick}>
	{buttonText}</button>
	</React.Fragment>
	);
}
}

export default CoffeeBeanControl;