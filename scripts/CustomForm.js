import React, { Component } from 'react'
import { Form, Col, Checkbox, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
export default class CustomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: ""
    }
  }

  handleChangeEvent = (e, type) => {
    this.setState({[type]: e.target.value})
  }

  createEntry = () => {
    this.props.createNewEntry({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email, 
      address: this.state.address
    })
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            First Name
          </Col>
          <Col sm={10}>
            <FormControl type="text"
                         required
                         onChange={(e) => { this.handleChangeEvent(e, 'firstName') }}
                         value={this.state.firstName}
                         placeholder="First Name" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Last Name
          </Col>
          <Col sm={10}>
            <FormControl type="text"
                         required
                         onChange={(e) => { this.handleChangeEvent(e, 'lastName') }}
                         value={this.state.lastName}
                         placeholder="Last Name" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email"
                         required
                         onChange={(e) => { this.handleChangeEvent(e, 'email') }}
                         value={this.state.email}
                         placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Address
          </Col>
          <Col sm={10}>
            <FormControl componentClass="textarea"
                         required
                         value={this.state.address}
                         onChange={(e) => { this.handleChangeEvent(e, 'address') }}
                         placeholder="textarea" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={() => { this.createEntry() }}>
              Create
            </Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}