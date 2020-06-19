import React, {useEffect, useState} from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Form from './components/Form';
import ConfirmOrder from './components/ConfirmOrder';
import axios from 'axios';
import * as Yup from 'yup';
import formSchema from './validation/formSchema';

const initialFormValues = {
  name: '',
  pizza: {
    pepperoni: false,
    cheese: false,
    combo: false,
    veggie: false
  },
  size: '', //dropdown
  instructions: ''
}
const initialFormErrors = {
  name: '',
  size: ''
}
const initialOrder = []
const initialDisabled = true

const App = () => {
  // const history = useHistory()

  const [orders, setOrders] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/pizza', newPizza)
      .then(response => {
        console.log(response)
        setOrders([response.data])
      })
      .catch(err => {
        console.log('ERROR HERE', err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
        // history.push('/confirmation')
      })
  }

  const onInputChange = evt => {
    const {name, value} = evt.target

    Yup
    .reach(formSchema, name)
    .validate(value)
    .then((valid) => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const {name, checked} = evt.target
    setFormValues({
      ...formValues,
      pizza:{
        ...formValues.pizza,
        [name]:checked
      }
    })
  }
  
  const onSubmit = evt => {
    evt.preventDefault()
    const newOrder = {
      name: formValues.name.trim(),
      pizza: Object.keys(formValues.pizza).filter(topping => formValues.pizza[topping]),
      size: formValues.size.trim(),
      instructions: formValues.instructions.trim()
    }
    postNewPizza(newOrder)
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div>
      <h1>Lambda Eats</h1>
      <h2>Pizza Time</h2>
      <Link to={'/'}>HOME</Link>

      <Switch>
        <Route path='/pizza'>
          <Form 
              values={formValues}
              onInputChange={onInputChange}
              onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit}
              disabled={disabled}
              errors={formErrors}
            />
        </Route>

        <Route path='/confirmation'>
          <ConfirmOrder newOrder={orders} />
        </Route>

        <Route path='/'>
          <h3>Click Below for Pizza Party</h3>
          <Link to={'/pizza'}>Party Time</Link>
        </Route>
        </Switch>
    </div>
  );
};
export default App;
