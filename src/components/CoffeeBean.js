import React from "react";
import PropTypes from 'prop-types';


  function CoffeeBean(props) {
    const CoffeeBeanStyles = {
      backgroundColor: '#62A4D3',
      marginTop: '20px',
      marginLeft: '20px',
      marginRight: '20px',
      paddingTop: '10px'
    }
  return (
<React.Fragment>
  <div onClick={()=> props.whenCoffeeBeanClicked(props.id)} style= {CoffeeBeanStyles}>
    <h1>{props.name}</h1>
    <h3>{props.origin}</h3>
    <h3>{props.roast}</h3>
    <h3>{props.price}</h3>
    <h3>{props.description}</h3>
    </div>
</React.Fragment>
);
}
CoffeeBean.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string,
  price: PropTypes.string.isRequired,
  whenCoffeeBeanClicked: PropTypes.func
};

export default CoffeeBean;