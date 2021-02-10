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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et quam 
          ultrices, porttitor eros in, bibendum arcu. Sed accumsan malesuada congue. 
          In porttitor ante sapien, a scelerisque dui condimentum ac. Nunc in cursus nisl,
          et efficitur dolor. Donec et risus aliquam odio lobortis vestibulum. Fusce et 
          tellus quis nibh venenatis auctor. Nullam vehicula sapien urna, eget volutpat 
          nunc finibus laoreet. Etiam nec feugiat ex. Phasellus sodales, justo id luctus
          semper, dui elit molestie ipsum, ac consequat nunc neque facilisis nisl. Fusce
          finibus quam eget est commodo, ac malesuada ipsum vehicula. Aenean sagittis
          sit amet dui viverra laoreet.Maecenas ut fermentum purus. Maecenas eleifend dictum
          ipsum, vel mattis magna. Maecenas in ante eu ex mattis pellentesque molestie sed nisl.
          Cras sodales porttitor efficitur. Nullam ornare, justo sed suscipit feugiat,


        </div> 
      </div>
  );
}