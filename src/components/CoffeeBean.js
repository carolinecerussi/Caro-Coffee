import React from 'react';
import PropTypes from 'prop-types';
import coffeebag from '../components/coffeebag.jpg';

function CoffeeBean (props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeBeanClicked (props.id)}>
        <h1>
          {props.name} <img src={coffeebag} alt="bag of coffee" />
        </h1>
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
  whenCoffeeBeanClicked: PropTypes.func,
};

export default CoffeeBean;
