import React from "react";
import PropTypes from "prop-types";



function ReusableForm(props){
  return (
    <React.Fragment>
      <h2>New Coffee Bean Form</h2>
      <form onSubmit={props.formSubmissionHandler}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>Name:</label>
          <input type='text' className='form-control' name='name' />
        </div>
        <div className='mb-3'>
          <label htmlFor='origin' className='form-label'>Origin:</label>
          <input type='string' className='form-control' name='origin' />
        </div>
        <div className='mb-3'> 
        <label htmlFor='roast' className='form-label'>Select Roast</label>
          <select id="dropdown">
            <option value="Light">Light</option>
            <option value="Medium">Medium</option>
            <option value="Dark">Dark</option>
          </select> 
          </div>
          <div className='mb-3'>  
          <label htmlFor='price' className='form-label'>Price: </label>
          <input type='string' className='form-control' name='price' />
        </div>  
        <div className='mb-3'>  
          <label htmlFor='description' className='form-label'>Description: </label>
          <textarea type='text' className='form-control' name='description' />
        </div>  
        <div className='mb-3'>  
          <label htmlFor='Weight' className='form-label'>Weight: </label>
          <input type='number' className='form-control' name='weight' />
        </div>  
        <button type='submit' className='btn btn-success'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}


// function ReusableForm(props){
//   return (
//     <React.Fragment>
//       <form onSubmit={props.formSubmissionHandler}>
//         <input 
//           type='text'
//           name='name'
//           placeholder='Name' />
//         <input 
//           type='text'
//           name='origin'
//           placeholder='Origin' />
// 					<input 
//           name='roast' placeholder='Select Roast'>
//           <select id="dropdown">
//             <option value="Light">Light</option>
//             <option value="Medium">Medium</option>
//             <option value="Dark">Dark</option>
//           </select>
//           </input> 
// 				  <input 
//           type='text'
//           name='price'
//           placeholder='Price (per bag)' />
//         <textarea 
//           name='description'
//           placeholder='Flavor Description' />
       
//         <input type='number' name='weight' placeholder="130"/>
//       <button type='submit'>{props.buttonText}</button>
//       </form>
//     </React.Fragment>
//   );
// }

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;