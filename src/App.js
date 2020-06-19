import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Route, Switch, Link} from 'react-router-dom';
import Form from './components/Form';
import * as Yup from 'yup';
import formSchema from './validation/formSchema'

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

  const [order, setOrder] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const onInputChange = evt => {

  }

  const onCheckboxChange = evt => {

  }

  const onSubmit = evt => {
    evt.preventDefault()
    const order = {
      name: formValues.name,
      pizza: Object.keys(formValues.pizza)
        .filter(topping => formValues.pizza[topping]),
      size: formValues.size
    }
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <h2>Pizza Time</h2>
      <Link to={'/'}>HOME</Link>

      <Switch>
        <Route exact path='/'>
          <Form 
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/pizza'>
        <p>Get your pizza here</p>
        <Link to={'/pizza'}>Order Pizza</Link>
        </Route>
      </Switch>
    </>
  );
};
export default App;
