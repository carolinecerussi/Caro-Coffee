import React from "react";
import PropTypes from "prop-types";


function EditCoffeeBeanForm(props) {
	const {coffeeBean} = props;

	function handleEditedCoffeeBeanForm(event) {
		event.preventDefault();
		props.onEditCoffeeBean({
			name: event.target.name.value, 
			origin : event.target.origin.value,
			roast: event.target.origin.value,
			price: event.target.price.value,
			description : event.target.description.value
		})
		return (
			<React.Fragment>
			<ReusableForm formSubmissionHandler={handleEditedCoffeeBeanForm} button="Update Coffee Details" />
</React.Fragment>
		);
		}
	}

		EditCoffeeBeanForm.propTypes = {
			coffeeBean : PropTypes.object,
			onEditCoffeeBean: PropTypes.func
		};

		export default EditCoffeeBeanForm;