import React from "react";
import {StyledTooltip} from "./styles";

const Tooltip = ({position, text, color}) => (
  <StyledTooltip position={position} bg={color}>{text}</StyledTooltip>
);

export default Tooltip;
