import styled from 'styled-components';
import {getRemsFromPixels, rgba} from "../../globalStyledConst";

const setPosition = (position) => {
  switch (position) {
    case 'top':
      return 'top: -5px; left: 50%; transform: translate3d(-50%, -100%, 0);';
    case 'left':
      return 'left: -5px; top: 50%; transform: translate3d(-100%, -50%, 0);';
    case 'right':
      return 'right: -5px; top: 50%; transform: translate3d(100%, -50%, 0);';
    case 'bottom':
      return 'bottom: -5px; left: 50%; transform: translate3d(-50%, 100%, 0);';
    default:
      return 'left: -5px; top: 50%; transform: translate3d(-100%, -50%, 0);';
  }
};

const setArrow = (position) => {
  switch (position) {
    case 'bottom':
      return 'top: 0; left: 50%; transform: translate3d(-50%, -100%, 0);';
    case 'right':
      return 'left: 3px; top: 50%; transform: translate3d(-100%, -50%, 0) rotate(-90deg);';
    case 'left':
      return 'right: 3px; top: 50%; transform: translate3d(100%, -50%, 0) rotate(90deg);';
    case 'top':
      return 'bottom: 0; left: 50%; transform: translate3d(-50%, 100%, 0) rotate(180deg);';
    default:
      return 'right: 3px; top: 50%; transform: translate3d(100%, -50%, 0) rotate(90deg);';
  }
};

export const StyledTooltip = styled.div`
  display: block;
  position: absolute;
  text-align: center;
  border-radius: 3px;
  ${({position}) => setPosition(position)};
  background: ${({bg}) => rgba(bg ? bg : '#000', 0.8)};
  max-height: 100px;
  max-width: 250px;
  padding: ${getRemsFromPixels(8)};
  color: #fff;
  font-size: ${getRemsFromPixels(12)};
  opacity: 0;
  z-index: 25;
  transition: all 0.3s ease;
  &:before {
    content: '';
    position: absolute;
    ${({position}) => setArrow(position)};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${({bg}) => rgba(bg ? bg : '#000', 0.8)};
  }
`;
