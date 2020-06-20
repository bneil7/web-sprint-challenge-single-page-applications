import React from 'react';

const ConfirmOrder = (props) => {
    const {order} = props
    
    if(!order){
        return <p>Please wait...</p>
    }

    return (
        <>
        <p>{order.name}</p>
        <p>{order.size}</p>
        {
        !!order.pizza && !!order.pizza.length &&
        <div> Toppings:
            <ul>
            {order.pizza.map((topping, idx) => <li key={idx}>{topping}</li>)}
            </ul>
        </div>
        }
        <p>{order.instructions}</p>
        </>
    )
}
export default ConfirmOrder