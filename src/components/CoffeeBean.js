import React from "react";
import PropTypes from "prop-types";

function CoffeeBean(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeBeanClicked(props.id)} >
        <h1>{props.name}</h1>
      </div>
    </React.Fragment>
  );
}


CoffeeBean.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  whenCoffeeBeanClicked: PropTypes.func
}


export default CoffeeBean;