import React from 'react';
import { Media } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Media className="mt-1">
        <div className="date">
          <h2>18</h2>
          <p>April</p>
        </div>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <div className="date">
          <h2>22</h2>
          <p>April</p>
        </div>
        <Media body>
          <Media heading>
            Middle aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
      <Media className="mt-1">
        <div className="date">
          <h2>2</h2>
          <p>May</p>
        </div>
        <Media body>
          <Media heading>
            Bottom aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </div>
  );
};

export default Example;