import styled from 'styled-components';
import {getRemsFromPixels, rgba} from "../../globalStyledConst";

export const MainTitle = styled.h1`
  font-size: ${getRemsFromPixels(36)};
  text-align: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInner = styled.div`
  column-count: 3;
  margin: 1.5em auto;
  padding: 0;
  column-gap: 1em;
  font-size: .85em;
  width: 1000px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    column-count: 2;
  }
  @media only screen and (max-width: 568px){
    column-count: 1;
  }
`;

export const NoImages = styled.div`
  display: block;
  text-align: center;
  margin: ${getRemsFromPixels(15)};
  font-size: ${getRemsFromPixels(18)};
`;

export const AddImage = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${getRemsFromPixels(20)};
  color: #fff;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${rgba('#000', 0.7)};
  cursor: pointer;
`;
