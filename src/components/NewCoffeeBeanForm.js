import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewCoffeeBeanForm(props) {

	function handleNewCoffeeBeanFormSubmission(event) {
		event.preventDefault();
		props.onNewCoffeeBeanCreation({
			names: event.target.name.value,
			origin: event.target.origin.value,
			price: event.target.price.value,
			roast: event.target.roast,
			description: event.target.description.value,
			id: v4(),
			weight: parseInt(event.target.weight.value) * 130,
			//  quantity: parseInt(event.target.quantity.value),
			//  totalPounds: parseInt(event.target.quantity.value) * 130, 
	});
}
	return (
	<React.Fragment>
		<ReusableForm
			formSubmissionHandler= {handleNewCoffeeBeanFormSubmission} buttonText="Add Coffee" 
			/>
</React.Fragment>

)
}
NewCoffeeBeanForm.propTypes = {
	onNewCoffeeBeanCreation: PropTypes.func
};


export default NewCoffeeBeanForm;