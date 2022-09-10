import React from "react";
import PropTypes from "prop-types";

// var roastSelector = React.createClass({
//   handleRoastChange: function(roast) {
//         this.setState({selectValue:roast.target.value});
//       }});
  
  
const ReusableForm = (props) => {
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
          name='roast' placeholder='Select Roast'>
          <select required='true' id="dropdown">
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
  )};

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;