import React from "react";

export default function Photos(props) {
  if (props.photos) {
    //console.log(props.photos);
    return "hello from Photos";
  } else {
    return null;
  }
}
