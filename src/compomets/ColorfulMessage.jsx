import React from "react";

export const ColorfulMessage = (props) => {
  // console.log("colorfullMessage");
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "48px"
  };

  return <p style={contentStyle}>{children}</p>;
};
// export default ColorfulMessage;
