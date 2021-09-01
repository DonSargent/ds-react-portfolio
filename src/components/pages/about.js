import React from 'react'
import profilePicture from "../../../static/assets/images/auth/bio/headshot.jpg";

export default function() {
  return (
      <div className="content-page-wrapper">
        <div className="left-column"
          style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <div className="right-column">
       Hello! Don Sargent here, it's great to meet you! 
       I'm a 40-year-old software developer looking for new projects. 
       If you want to get in touch, feel free. I'm always interested in learning about new technology. 
       Thank you!
        </div> 
      </div>
  );
}