import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

// Import Components
import Form from './components/Form'
import User from './components/User'

// Styling
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

// Initial State Values
const initialFormValues = {
  // Text Inputs
  username: '',
  email: '',
  password: '',
  // Check Box
  tos: '',
}
const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: '',
}
const initialUsers = []
const initialDisabled = true

function App() {
  // States
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  // Helpers
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }


  // Event Handlers
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      // if the validation is successful clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      // If unsuccessful set error message
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
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({
      ...formValues,
      [name]: checked
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos.trim(),
    }
    // Post new user
    postNewUser(newUser)
  }

  // Side Effects

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <AppContainer>
      <header><h1>User Onboarding App</h1></header>

      <Form
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
      />
      <div className="users">
        {
          users.map(user => {
            return (
              <User key={user.id} details={user} />
            )
          })
        }
      </div>
    </AppContainer>
  );
}

export default App;
