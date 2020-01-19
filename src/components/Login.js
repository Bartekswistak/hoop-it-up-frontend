import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'
import {resetLoginForm} from "../actions/loginForm"
import {login} from '../actions/currentUser.js'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

 const Login = ({loginFormData, updateLoginForm, login,resetLoginForm, history}) => {

    const handleChange = event => {
        const {name, value} = event.target
        const updateFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updateFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
        resetLoginForm()
    }

    return (
      <Container className="loginForm">
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
          <Form.Control type="text" 
                  value={loginFormData.username} 
                  name="username" 
                  placeholder="username"
                  onChange={handleChange}/> <br/>
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" 
                  value={loginFormData.password} 
                  name="password" 
                  placeholder="password"
                  onChange={handleChange}/> <br/>
          <Form.Control className="loginButton"type="submit" value="Login"/>
         </Form.Group>
       </Form>
      </Container>
  )
}

const mapStateToProps = (state) => {
  return {
      loginFormData: state.loginForm
  }
}


export default connect(mapStateToProps, {updateLoginForm, login, resetLoginForm})(Login)