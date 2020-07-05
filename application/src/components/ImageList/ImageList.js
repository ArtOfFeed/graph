import React, {useState} from "react";
import { FakeData } from "./FakeData";
import ImageItem from "../ImageItem/ImageItem";
import {AddImage, MainInner, MainTitle, MainWrapper, NoImages} from "./styles";
import ImageForm from "../ImageForm/ImageForm";

import withHoc from './index';
import Preloader from "../Preloader/Preloader";

const ImageList = ({data: {images, loading}}) => {
  console.log('data', images, loading);
  const [showedForm, setShowedForm] = useState(false);
  return (
    <MainWrapper>
      <MainTitle>Admin Tool</MainTitle>
      {loading ? <Preloader /> : <MainInner>
        {images && images.length ? images.map((img) => (<ImageItem
          id={img.id}
          key={img.id}
          name={img.name}
          description={img.description}
          text={img.text}
          color={img.color}
          position={img.position}
          image={img.image}
        />)) : <NoImages>No images</NoImages>}
        <AddImage onClick={() => setShowedForm(true)}>&#10011;</AddImage>
        {showedForm && <ImageForm
          closeForm={setShowedForm}
          name={''}
          image={''}
          description={''}
          text={''}
          color={''}
          position={''}
          adding={true}
        />}
        </MainInner>}
    </MainWrapper>
  );
};

export default withHoc(ImageList);
