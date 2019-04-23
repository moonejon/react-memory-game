import React from "react";
import "./style.css";

function MemoryCardFront(props) {
  return (
      <div className="card">
          <div
              className="img-container"
              onClick={() => props.selectCard(props.id)}
          >
              <img alt={props.name} src={props.image} />
          </div>
          {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div> */}
          {/* <span
              onClick={() => props.removeFriend(props.id)}
              className="remove"
          >
              𝘅
          </span> */}
      </div>
  );
}

export default MemoryCardFront;
