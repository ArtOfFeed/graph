import React, {useState} from "react";
import Tooltip from "../Tooltip/Tooltip";
import {
  DeleteImageItem,
  ImageDescription,
  ImageTitle,
  InnerImageItem,
  Picture,
  ShadowOverlay,
  WrapperImageItem
} from "./styles";
import ImageForm from "../ImageForm/ImageForm";

import withHoc from './index';

const ImageItem = ({id, name, description, image, text, color, position, deleteImage}) => {
  const [showedForm, setShowedForm] = useState(false);
  return (
    <WrapperImageItem>
      <InnerImageItem onClick={() => !showedForm && setShowedForm(true)}>
        <ShadowOverlay>
          <ImageTitle>{name}</ImageTitle>
          <ImageDescription>{description}</ImageDescription>
        </ShadowOverlay>
        <DeleteImageItem onClick={(e) => {
          e.stopPropagation();
          deleteImage(id)
        }}>&#10539;</DeleteImageItem>
        <Picture src={image || 'https://via.placeholder.com/400'} alt=""/>
        <Tooltip text={text} color={color} position={position} />
        {showedForm && <ImageForm
          id={id}
          closeForm={setShowedForm}
          name={name}
          description={description}
          text={text}
          color={color}
          position={position}
          image={image}
        />}
      </InnerImageItem>
    </WrapperImageItem>
  )
};

export default withHoc(ImageItem);
