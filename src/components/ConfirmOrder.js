import React from 'react';

const ConfirmOrder = (props) => {
    const {order} = props
    
    if(!order){
        return <span>Please wait...</span>
    }

    return (
        <>
        <p>{order.name}</p>
        <p>{order.size}</p>
        {
        <ul>
            {order.pizza.map((topping, idx) => <li key={idx}>{topping}</li>)}
        </ul>
        }
        <p>{order.instructions}</p>
        </>
    )
}
export default ConfirmOrder