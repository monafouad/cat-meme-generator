import React from "react";
import "./MemeComponent.scss";

function MemeComponent(props) {
  return (
    <div className="catImageDisplay">
      <img
        src={props.data.allImages}
        alt={props.data.text}
        className="catImageDisplay_img"
      />
      <h2 className="catImageDisplay_text">{props.data.text}</h2>
    </div>
  );
}

export default MemeComponent;
