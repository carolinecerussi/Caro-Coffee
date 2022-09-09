import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCoffeeBean(props) {

	function handleNewCoffeeBean(event) {
		event.preventDefault();
		props.onNewCoffeeBeanCreation({
			name : event.target.name.value,
			origin : event.target.origin.value,
			price : event.target.price.value,
			roast : event.target.roast.value,
			description : event.description.value,
			id: v4()
	});
}

return (
	<React.Fragment>
		<ReusableForm
			formSubmissionHandler= {handleNewCoffeeBean}
			buttonText="Add Coffee"/>
	</React.Fragment>
);
}


NewCoffeeBean.propTypes = {
	onNewCoffeeBeanCreation PropTypes.func
};

export default NewCoffeeBean;