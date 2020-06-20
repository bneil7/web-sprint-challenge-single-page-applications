import React from 'react';

export default function Form(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        errors
    } = props
  
    const submit = evt => {
        evt.preventDefault()
        onSubmit(values)
    }

    return (

    <form className='form-container' onSubmit={submit}>
        <div>
            <h2>Build Your Pizza</h2>
            
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.pizza}</div>
                <div>{errors.size}</div>
            </div>

            <div className='dropdown-inputs'>
                <h4>Select Pizza</h4>
                <label>Size: &nbsp;
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                        >
                            <option value=''> - SELECT OPTIONS - </option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                            <option value='xl'>X-Large</option>
                        </select>
                </label>
            </div>
            <div className='checkbox-inputs'>
                <h4>Toppings</h4>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.pizza.pepperoni}
                        name='pepperoni'
                    />
                </label>
                <br/>
                <label>Cheese
                    <input 
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.pizza.cheese}
                        name='cheese'
                    />
                </label>
                <br/>
                <label>Combo
                    <input 
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.pizza.combo}
                        name='combo'
                    />
                </label>
                <br/>
                <label>Veggie
                    <input 
                        type='checkbox'
                        onChange={onCheckboxChange}
                        checked={values.pizza.veggie}
                        name='veggie'
                    />
                </label>
            </div>
            <div className='text-inputs'>
                <h3>Special Instructions</h3>
                <label>Type here: &nbsp;
                    <input 
                        type='text'
                        value={values.instructions}
                        onChange={onInputChange}
                        name='instructions'
                    />
                </label>
                <br/>
                <label>Your Name: &nbsp;
                    <input 
                        value={values.name}
                        type='text'
                        name='name'
                        onChange={onInputChange}
                    />
                </label>
            </div>
            <br/>
            <div className='form-group submit'>
                <button id='submitBtn' to='/confirmation' type='submit'>Add to Order</button>
            </div>
        </div>
     </form>
    )
}