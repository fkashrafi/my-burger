import React from 'react';
import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientsSummery = Object.keys(props.ingredients)
    .map(igKey=>{
        return(
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>
                {igKey}</span>:{props.ingredients[igKey]}
            </li>
        )
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummery}
            </ul>
            <p><strong>Total Price:{props.totalPrice}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancle}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseCantinue}>Continue</Button>
        </Aux>
    )
}

export default orderSummery;