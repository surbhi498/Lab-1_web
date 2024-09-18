import React from "react";
import PropTypes from "prop-types";
const Event = (props) => {
  return (
    <td className={props.color}>
      <h5>{props.event}</h5>
    </td>
  );
};
Event.propTypes = {
    event:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired
};    
export default Event;
