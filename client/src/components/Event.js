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
            Simple Ways Journaling Can Improve Your Life
          </Media>
            If you strive to live a good life in all areas, journaling might be the next step to consider. Take a look at simple ways journaling can improve your life.        </Media>
      </Media>
      <Media className="mt-1">
        <div className="date">
          <h2>22</h2>
          <p>April</p>
        </div>
        <Media body>
          <Media heading>
            6 Benefits of Learning Another Language
          </Media>
          
            There's no doubt about it: If you want to live a more knowledgeable, cultural and altruistic lifestyle, then learning another language has big benefits in store...
      </Media>
     </Media>
      <Media className="mt-1">
        <div className="date">
          <h2>2</h2>
          <p>May</p>
        </div>
        <Media body>
          <Media heading>
            Celebrating National Nutrition Month
          </Media>
            Nutrition impacts every area of our lives, including our ability to live altruistically for others. So let's dive into how you can celebrate National Nutrition ...
        </Media>
      </Media>
    </div>
  );
};

export default Example;