//Parent component for NewCoffeeBeanForm.js and CoffeeBeanList.js

import React from "react";
import NewCoffeeBeanForm from "./NewCoffeeBeanForm";
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';


class CoffeeBeanControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false,
			formVisibleOnPage: false, //new coffeebean form
			mainCoffeBeanList: [],
			selectedCoffeeBean: null,
			editing: false // form for editing ticket
		};
	}
//Create
	handleAddingNewCoffeeBeanToList = (newCoffeeBean) => {
		const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newCoffeeBean);
		this.setState({mainCoffeeBeanList: newMainCoffeeBeanList,
		formVisibleOnPage: false });
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
		const selectedCoffeeBean = this.state.mainCoffeBeanList.filter(coffeeBean => coffeeBean.id === id)[0];
		this.setState({selectedCoffeeBean: selectedCoffeeBean});
	}
	handleEditClick= (id) => {
	this.setState({editing: true});
	}

	handleEditingCoffeeBeanList = (coffeeBeanToEdit) => {
		const editedMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !==this.state.selectedCoffeeBean.id).concat(coffeeBeanToEdit);
		this.setState({
			mainCoffeeBeanList: editedMainCoffeeBeanList,
			editing: false,
			selectedCoffeeBean: null
		})
	}

	handleDeletingCoffeeBean = (id) => {
		const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(coffeeBean => coffeeBean.id !== id);
		this.setState({
			mainCoffeeBeanList: newMainCoffeeBeanList,
			selectedCoffeeBean: null
		})
	}

render(){
  const styledButton = {
    backgroundColor: 'Pink',
    color: 'Pink',
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
    currentlyVisibleState = <EditCoffeeBeanForm coffeeBean = {this.state.selectedCoffeeBean} onEditCoffeeBean = {this.handleEditingCoffeeBeanList} />
    buttonText = "Return to Coffee List";
  } else if (this.state.selectedCoffeeBean != null) {
    currentlyVisibleState = 
    <CoffeeBeanDetail 
      coffeeBean={this.state.selectedCoffeeBean} 
      onClickingDelete = {this.handleDeletingCoffeeBean} 
      onClickingEdit = {this.handleEditClick} />
    buttonText = "Return to Coffee List";
  }
	else if (this.state.formVisibleOnPage) {
		currentlyVisibleState = 
    <NewCoffeeBeanForm 
     onNewCoffeeBeanCreation={this.handleAddingNewCoffeeBeanToList} />
		
    buttonText = "Return to Coffee List"; 
	} else {
		currentlyVisibleState = 
    <CoffeeBeanList
      coffeeBeanList={this.state.mainCoffeeBeanList} 
      onCoffeeBeanSelection ={ this.handleChangingSelectedCoffeeBean } />
    buttonText = "Add Coffee Beans";
	}

	return(
		<React.Fragment>
{currentlyVisibleState}
<button onClick={this.handleClick}>
	{buttonText}</button>
	</React.Fragment>
	)
}
}

export default CoffeeBeanControl;