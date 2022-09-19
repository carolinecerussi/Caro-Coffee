import React from "react";
import PropTypes from "prop-types";



function ReusableForm(props){
  return (
    <React.Fragment>
      <h2>New Coffee Bean Form</h2>
      <form onSubmit={props.formSubmissionHandler}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'> Name:</label>
          <input type='text' className='form-control' name='name' required={true} />
        </div>
      <h /> 
        <div className='mb-3'>
          <label htmlFor='origin' className='form-label'>Origin:</label>
          <input type='string' className='form-control' name='origin' required={true} />
        </div>
      <h />
        <div className='mb-3'> 
        <label htmlFor='roast' className='form-label'>Roast</label>
          <select name="roast"  required={true} id='dropdown'>
            <option value='Light'>Light</option>
            <option value='Medium'>Medium</option>
            <option value='Dark'>Dark</option>
          </select> 
         </div>
         <h /> 
           <div className='mb-3'>  
          <label htmlFor='price' className='form-label'>Price per lb:  </label>
          <input prefix="$"
  name="price"
  placeholder="$"
  // decimalsLimit={2}
  // onValueChange={(value, name) => console.log(value, name)}
/>
        </div> 
        <h /> 
        <div className='mb-3'> 
        <label htmlFor='description' className='form-label'>Flavor Profiles: </label>
        <textarea required={true} name="description">
        </textarea>  
        </div>
        <h />
        <div className='mb-3'>  
          <label htmlFor='quantity' className='form-label'>Quantity: </label>
          <input  className='form-control' name='quantity'required={true} />
        </div> 
        <h /> 
        <button  type='submit' className='btn btn-success' >{props.buttonText}</button>       
     <h />
      </form>

    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;