import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assests/pizza.jpg';


const pizzaImage = (props) => (
    <div className={classes.pizzaImage}>
      <img src={PizzaImage} className={classes.PizzaImg}/>
    </div>
);

export default pizzaImage;