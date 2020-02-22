import React from 'react';
// import * as Form from 'react-bootstrap';
import {Form, Button, FormGroup, ControlLabel, FormControl ,Checkbox,Col} from 'react-bootstrap';


import Menu from '../Menu';
import Data from '../../data/test.json'


class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      menuList: Data.menuList,
      cakes: Data.bakery
    }
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    if (length > 5) return 'warning';
    if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {
    return (
      <React.Fragment>
        <Menu listArarry={this.state.menuList} ></Menu>
        <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Sign in</Button>
    </Col>
  </FormGroup>
</Form>;
      </React.Fragment>
    )
  }

}

export default Contact