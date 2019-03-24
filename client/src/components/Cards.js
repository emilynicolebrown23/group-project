import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body className="big-link-prevent">
          <CardTitle></CardTitle>
          <CardText></CardText>
          <Button href="/prevention">Prevention</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="big-link-involved">
          <CardTitle></CardTitle>
          <CardText></CardText>
          <Button href="/involved">Get Involved</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="big-link-resources">
          <CardTitle></CardTitle>
          <CardText></CardText>
          <Button href="/resources">Resources</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;