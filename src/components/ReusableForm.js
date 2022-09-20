import React from "react";
import PropTypes from "prop-types";
// import { NonceProvider } from "react-select";
// import CurrencyInput  from 'react-currency-input-field';


function ReusableForm(props){
  const buttonStyle ={
    backgroundColor: 'white',
    color: 'pink',
    fontSize: '18pt',

  };


  
  return (
    <React.Fragment>
      <h2>New Coffee Bean Form</h2>
      <form onSubmit={props.formSubmissionHandler}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'> Name:</label>
          <input type='text' className='form-control' name='name' required={true} />
          <br></br>
        </div>
        <br></br>

        <div className='mb-3'>
          <label htmlFor='origin' className='form-label'>Origin:</label>
          <input type='string' className='form-control' name='origin' required={true} />
        </div>
        <br></br>

        <div className='mb-3'> 
        <label htmlFor='roast' className='form-label'>Roast</label>
          <select name="roast"  required={true} id='dropdown'>
            <option value='Light'>Light</option>
            <option value='Medium'>Medium</option>
            <option value='Dark'>Dark</option>
          </select> 
         </div>
         <br></br>

           <div className='mb-3'>  
          <label htmlFor='price' className='form-label'>Price per lb:  </label>
          <input prefix="$" name="price" data-number-to-fixed="2" data-number-stepfactor="100" placeholder="$" allowDecimals decimalsLimit="2" />
        </div> 
        <br></br>

        <div className='mb-3'> 
        <label htmlFor='description' className='form-label'>Flavor Profiles: 
        <textarea required={true} name="description">
        </textarea>  
        </label>
        </div>
        <br></br>

        <div className='mb-3'>  
          <label htmlFor='quantity' className='form-label'>Quantity: </label>
          <input type="number" className='form-control' name='quantity'required={true} />
        </div> 

        <br></br>

        <button style={buttonStyle}  type='submit' className='btn btn-success' >{props.buttonText}</button>       
        <br></br>
      </form>
      <br></br>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;