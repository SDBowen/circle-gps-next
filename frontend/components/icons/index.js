import React from "react";

import Cog from "./Cog";
import Exit from "./Exit";
import Target from "./Target";

const Icon = props => {
  switch (props.name) {
    case "cog":
      return <Cog {...props} />;
    case "exit":
      return <Exit {...props} />;
    case "target":
      return <Target {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
