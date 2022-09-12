import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditCoffeeBeanForm (props) { 
	const {coffeeBean} = props;
	
	function handleEditCoffeeBeanFormSubmission(event) {
		event.preventDefault();
		props.onEditCoffeeBean({
			name: event.target.name.value, 
			origin : event.target.origin.value,
			roast: event.target.origin.value,
			price: event.target.price.value,
			description : event.target.description.value,
			id: coffeeBean.id,
			weight: parseInt(event.target.weight.value)
			
		});
		}
		return (
			<React.Fragment>
			<ReusableForm 
			formSubmissionHandler= {handleEditCoffeeBeanFormSubmission}
				buttonText="Update Coffee Details" />
				</React.Fragment>
		);
}

EditCoffeeBeanForm.propTypes ={
	coffeeBean: PropTypes.object,
	onEditCoffeeBean: PropTypes.func
};

export default EditCoffeeBeanForm;