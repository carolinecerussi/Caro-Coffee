import React from "react";
import PropTypes from "prop-types";
import CoffeeBean from "./CoffeeBean";

const EditCoffeeBeanForm = (props) => {
	const {coffeeBean} = props;
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input required='true'
          type='text'
          name='name'
          placeholder='Name' />
        <input required='true'
          type='text'
          name='origin'
          placeholder='Origin' />
					<input required='true'
          name='roast' placeholder="Select Roast">
          <select requred='true' id="dropdown">
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Dark">Dark</option>
          </select>
          </input> 
				  <input required='true'
          type='text'
          name='price'
          placeholder='Price (per bag)' />
        <textarea required='true'
          name='description'
          placeholder='Flavor Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

EditCoffeeBeanForm.propTypes = {
coffeeBean: PropTypes.object,
onEditCoffeeBean: PropTypes.func
};

export default EditCoffeeBeanForm;





function EditCoffeeBeanForm(props) {
	const {coffeeBean} = props;

	function handleEditCoffeeBeanFormSubmission(event) {
		event.preventDefault();
		props.onEditCoffeeBean({
			name: event.target.name.value, 
			origin : event.target.origin.value,
			roast: event.target.origin.value,
			price: event.target.price.value,
			description : event.target.description.value,
			id: coffeeBean.id});
		}
		return (
			<React.Fragment>
			<ReusableForm 
			formSubmissionHandler= {handleEditCoffeeBeanFormSubmission}
				buttonText="Update Coffee Details" />
