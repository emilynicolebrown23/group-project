import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <h2>Apply To Volunteer</h2>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="fullName">Full Name</Label>
              <Input type="email" name="email" id="fullName" placeholder="Full Name" />
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleCheckbox"><span class="form-heading">Area Of Interest</span> <br/> Check all that apply:</Label>
          <div>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="LINKLine Advocate" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="General Office" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Fundraising" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Events"/>
            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Interns" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Mentors" />
            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Guest Speakers" />
          </div>
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}