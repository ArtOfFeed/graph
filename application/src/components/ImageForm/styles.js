import styled from "styled-components";
import {getRemsFromPixels, rgba} from "../../globalStyledConst";

export const ImageFormWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
`;

export const Overlay = styled.div`
  position: absolute;
  background: ${rgba('#000', 0.8)};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageFormInner = styled.div`
  background: #fff;
  padding: 30px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 30px auto;
    @media (max-width: 568px){
      width: 90%;
    }
    input,
    select,
    button {
      background: transparent;
      border: 2px solid cornflowerblue;
      border-radius: 3px;
      height: 40px;
      margin-bottom: ${getRemsFromPixels(15)};
      padding: 0 10px;
      outline: none;
      &:focus {
        border-color: cadetblue;
      }
    }
    button {
      cursor: pointer;
      width: 200px;
      margin: 0 auto;
      color: #fff;
      background: cornflowerblue;
      transition: all 0.3s ease;
      border-color: transparent;
      &:hover {
        background: cadetblue;
      }
    }
  }
`;

export const FileLabel = styled.label`
  width: 100%;
  padding: 0 ${getRemsFromPixels(10)};
  background: cornflowerblue;
  height: 40px;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 3px;
  margin-bottom: ${getRemsFromPixels(15)};
  box-sizing: border-box;
  &:hover {
    background: cadetblue;
  }
  input {
    display: none;
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
`;

export const Cross = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 5;
  cursor: pointer;
  color: #fff;
`;
