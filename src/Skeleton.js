import "./Skeleton.css";
import React from "react";

const Skeleton = () => {
  return (
    <template id="card-template">
      <div className="card">
        <div className="header">
          <img
            alt="#"
            className="header-img skeleton"
            data-img
            src="https://source.unsplash.com/100x100/?electronics"
          />
          <div className="title" data-title>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
        <div data-body>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
      </div>
    </template>
  );
};

export default Skeleton;
