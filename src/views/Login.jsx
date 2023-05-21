import React from 'react'
import { connect, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { login } from '../store/auth';
export const Login = ({login}) => {
  let {user,loggedIn, message}= useSelector(state=> state.auth)
  const submitHandler = e =>{
    e.preventDefault();
    console.log({username: e.target.username.value});
    Promise.all([login({username: e.target.username.value, 
      password: e.target.password.value})])
      .then(()=> console.log('logged in'))
      .catch(()=> console.log('failed'))
    
  }
  return (
    <Container>
      <Row className='align-items-center justify-content-center'>
        <Col xs={12}>
          <h2>Login Page</h2>
        </Col>
        <Col xs={4}>

          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" >
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter Username" id='username'/>
              
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" id='password'/>
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            <strong style={{color: 'red'}}>{message}</strong>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {login}

export default connect(mapStateToProps, mapDispatchToProps)(Login)