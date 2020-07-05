import styled from 'styled-components';
import {getRemsFromPixels, rgba} from "../../globalStyledConst";
import {StyledTooltip} from "../Tooltip/styles";

export const WrapperImageItem = styled.div`
  margin: 0 0 1.5em;
  width: 100%;
  transition: 1s ease all;
  box-sizing: border-box;
`;

export const InnerImageItem = styled.div`
  position: relative;
  &:hover ${StyledTooltip} {
    opacity: 1;
  }
`;

export const ShadowOverlay = styled.div`
  background: linear-gradient(to bottom, transparent, #000);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: ${getRemsFromPixels(20)};
`;

export const Picture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ImageTitle = styled.h2`
  margin: ${getRemsFromPixels(10)} 0;
  font-size: ${getRemsFromPixels(24)};
  color: #fff;
`;

export const ImageDescription = styled.h2`
  font-size: ${getRemsFromPixels(16)};
  margin: 0 0 ${getRemsFromPixels(10)};
  color: #fff;
`;

export const DeleteImageItem = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${getRemsFromPixels(10)};
  color: #fff;
  z-index: 1;
  background: ${rgba('#000', 0.7)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
