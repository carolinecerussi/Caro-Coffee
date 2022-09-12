//Parent component for NewCoffeeBeanForm.js and CoffeeBeanList.js

import React from "react";
import NewCoffeeBeanForm from "./NewCoffeeBeanForm";
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';


class CoffeeBeanControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false,
			formVisibleOnPage: false, //new coffeebean form
			mainCoffeeBeanList: [],
			selectedCoffeeBean: null,
			editing: false // form for editing ticket
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
//Create
	handleAddingNewCoffeeBeanToList = (newCoffeeBean) => {
		const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newCoffeeBean);
		this.setState({mainCoffeeBeanList: newMainCoffeeBeanList});
	}
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
		
	handleChangingSelectedCoffeeBean = (id) => {
		const selectedCoffeeBean = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id === id)[0];
		this.setState({selectedCoffeeBean: selectedCoffeeBean});
	}
	handleEditClick= () => {
		console.log('handleEditClick Reached')
	this.setState({editing: true});
	}

	handleEditingCoffeeBeanList = (coffeeBeanToEdit) => {
		const editedMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !==this.state.selectedCoffeeBean.id).concat(coffeeBeanToEdit);
		this.setState({
			mainCoffeeBeanList: editedMainCoffeeBeanList,
			editing: false,
			selectedCoffeeBean: null
		});
	};

	handleDeletingCoffeeBean = (id) => {
		const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !== id);
		this.setState({
			mainCoffeeBeanList: newMainCoffeeBeanList,
			selectedCoffeeBean: null
		})
	};
handleChangingCoffeeBeanWeight = (weight) => {
	console.log(this.state);
	const changedWeight = this.state.selectedCoffeeBean.weight -1;
	console.log(this.state);
	console.log(changedWeight);
	this.setState({changedWeight: changedWeight});
	console.log(this.state);
	console.log(changedWeight);
		
	};
render() {
  const styledButton = {
    backgroundColor: 'Pink',
    color: 'white',
    fontSize: '30px',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    marginRight: '800',
    margin: 'auto'
	}
    
	let currentlyVisibleState = null;
	let buttonText = null; 
  if (this.state.editing) {
    currentlyVisibleState = (
		<EditCoffeeBeanForm 
		coffeeBean={this.state.selectedCoffeeBean} 
		onEditCoffeeBean = {this.handleEditingCoffeeBeanList}
		/>
		);
    buttonText = "Return to Coffee List";
  } else if (this.state.selectedCoffeeBean != null) {
    currentlyVisibleState = (
    <CoffeeBeanDetail 
      coffeeBean={this.state.selectedCoffeeBean} 
      onClickingDelete = {this.handleDeletingCoffeeBean} 
      onClickingEdit = {this.handleEditClick} 
			onClickingSell= {this.handleChangingCoffeeBeanWeight}
			/>
			);
    buttonText = "Return to Coffee List";
  }
	else if (this.state.formVisibleOnPage) {
		currentlyVisibleState = (
    <NewCoffeeBeanForm 
     onNewCoffeeBeanCreation={this.handleAddingNewCoffeeBeanToList} 
		 />
		);
    buttonText = "Return to Coffee List"; 
	} else {
		currentlyVisibleState = (
    <CoffeeBeanList
      coffeeBeanList={this.state.mainCoffeeBeanList} 
      onCoffeeBeanSelection ={ this.handleChangingSelectedCoffeeBean }
			 />
		)
    buttonText = "Add Coffee Beans";
	}


	return(
		<React.Fragment>
{currentlyVisibleState}
<button style={styledButton} onClick={this.handleClick}>
	{buttonText}</button>
	</React.Fragment>
	)
}
}

export default CoffeeBeanControl