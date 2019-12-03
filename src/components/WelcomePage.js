import React from 'react';

const WelcomePage = () => (
  <div>
    <h4>Welcome!</h4>
    <ol>
      <li>
        Place the robot on table(5x5) with the command: PLACE X,Y,F (position X,Y and facing NORTH, SOUTH, EAST or WEST.)
      </li>
      <li>
        When the robot is placed, use the following commands:
        <div>
          REPORT – Shows the current status of the robot.<br />
          LEFT   – Turns the robot 90 degrees left.<br />
          RIGHT  – Turns the robot 90 degrees right.<br />
          MOVE   – Moves the robot 1 unit in the direction facing.<br />
        </div>
      </li>
    </ol>
  </div>
);

export default WelcomePage;