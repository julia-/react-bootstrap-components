import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import {Button, ButtonGroup} from './components/Button'
import Container from './components/Container'
import Row from './components/Row'
import Col from './components/Col'
import Alert from './components/Alert'
import { Nav, NavItem } from './components/Nav'
import { Card, CardHeader, CardBody, CardTitle, CardText } from './components/Card'
import { Form, FormGroup, FormLabel, FormInput } from './components/Form'
import ProgressBar from './components/Progress'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>A</Col>
            <Col>B</Col>
          </Row>
          <Row>
            <Col width={4}>A</Col>
            <Col width={8}>B</Col>
          </Row>
          <Row>
            <Col sm={4}>A</Col>
            <Col sm={8}>B</Col>
          </Row>
          <div className='mt-3'>
            <Button title='Google' href='https://www.google.com/' />
            <Button title='Second' variation='primary' />
            <Button title='Third' variation='success' />
          </div>
          <div className='mt-3'>
            <Nav>
              <NavItem>First</NavItem>
              <NavItem active={ true }>Second</NavItem>
              <NavItem>Third</NavItem>
            </Nav>
          </div>
          <Alert role='alert'>
            This is a primary alert—check it out!
          </Alert>
          <Alert alertType='info'>
            This is a info alert—check it out!
          </Alert>
          <Alert alertType='secondary'>
            This is a secondary alert—check it out!
          </Alert>
          <Card bgColor='info' textColor='white'>
            <CardHeader>
              Card Header
            </CardHeader>
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>Card Text</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              Card Body
            </CardBody>
          </Card>
          <Form action='/sign-up' method='POST'>
            <FormGroup>
              <FormLabel>
                Name
              </FormLabel>
              <FormInput />
            </FormGroup>
            <FormGroup>
              <FormLabel>
                Email
              </FormLabel>
              <FormInput formType='email' sizing='lg' id='email' />
            </FormGroup>
          </Form>
          <ProgressBar currentValue='25' />
          <ProgressBar currentValue='50' bgColor='info' />
          <ProgressBar currentValue='75' bgColor='warning' striped={ true } />
          <ProgressBar currentValue='100' striped={ true } />
          <ButtonGroup>
            <Button title='1' variation='success' />
            <Button title='2' variation='success' />
            <Button title='3' variation='success' />
          </ButtonGroup>
          <ButtonGroup buttonType='toolbar'>
            <Button title='1' variation='success' />
            <Button title='2' variation='success' />
            <Button title='3' variation='success' />
          </ButtonGroup>
          <ButtonGroup inputGroup={true}>
            <Button title='1' variation='success' />
            <Button title='2' variation='success' />
            <Button title='3' variation='success' />
          </ButtonGroup>
        </Container>
      </div>
    );
  }
}

export default App