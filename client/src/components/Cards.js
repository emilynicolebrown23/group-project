import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body className="big-link-prevent">
          <CardTitle></CardTitle>
          <CardText></CardText>
          <Button>Prevention</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="big-link-involved">
          <CardTitle></CardTitle>
          <CardText></CardText>
          <Button>Get Involved</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body className="big-link-resources">
          <CardTitle></CardTitle>
          <CardText></CardText>
          <Button>Resources</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;