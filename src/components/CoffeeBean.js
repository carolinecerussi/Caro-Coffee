import React from "react";
import PropTypes from 'prop-types';


  function CoffeeBean(props) {

  return (
<React.Fragment>
  <div onClick={() => props.whenCoffeeBeanClicked(props.id)} >
    <h1>Name: {props.name}</h1>
    <h3>Origin: {props.origin}</h3>
    <h3>Roast: {props.roast}</h3>
    <h3>Price: ${props.price}</h3>
    <h3>Description{props.description}</h3>
    <h3>Weight: {props.weight}</h3>
    </div>
</React.Fragment>
);
}
CoffeeBean.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  weight: PropTypes.number,
  whenCoffeeBeanClicked: PropTypes.func
};

export default CoffeeBean;