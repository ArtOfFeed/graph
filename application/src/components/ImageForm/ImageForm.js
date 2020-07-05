import React, {useCallback, useState, useEffect} from "react";
import {Cross, FileLabel, FormTitle, ImageFormInner, ImageFormWrapper, Overlay} from "./styles";
import { Formik, Form, Field } from 'formik';

import withHoc from './index';

const ImageForm = ({closeForm, id, name, description, color, text, position, image, adding, addImage, updateImage}) => {
  const [imageValue, setImageValue] = useState('');
  const [labelName, setLabelName] = useState('No Image');
  const handleClick = useCallback(() => {
    closeForm(false)
  }, [closeForm]);
  const positionOption = [
    'left',
    'right',
    'bottom',
    'top'
  ];

  useEffect(() => {
    setImageValue(image);
  }, [image]);

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();

    data.append('file', file);
    data.append('upload_preset', 'yallery');

    const res = await fetch(
      `${process.env.REACT_APP_CLOUDINARY_URL}/image/upload`,
      {
        method: 'POST',
        body: data,
      }
    );

    const uploadedImg = await res.json();

    setImageValue(uploadedImg.secure_url);
    setLabelName(file.name);
  };

  return (
    <ImageFormWrapper>
      <Overlay>
        <ImageFormInner>
          <Cross onClick={() => handleClick()}>&#10539;</Cross>
          <FormTitle>{adding ? 'Add image' : 'Update image'}</FormTitle>
          <Formik
            initialValues={{
              name: name,
              description: description,
              image: image,
              text: text,
              color: color,
              position: position,
            }}
            onSubmit={(values, { setSubmitting }) => {
              values.image = imageValue;
              const result = adding ? {...values} : {...values, ...id};
              if (adding) {
                addImage(result);
              } else {
                updateImage(result);
              }
              handleClick();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FileLabel>
                  {labelName}
                  <Field type="file" name="file" onChange={(e) => uploadImage(e)} />
                </FileLabel>
                <Field type="text" name="name" placeholder="name" />
                <Field type="text" name="description" placeholder="description" />
                <Field type="text" name="text" placeholder="text" />
                <Field type="text" name="color" placeholder="color" />
                <Field as="select" name="position" placeholder="position">
                  {positionOption.map((pos) => <option key={pos} value={pos}>{pos.toUpperCase()}</option>)}
                </Field>
                <button type="submit" disabled={isSubmitting || !imageValue}>
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </ImageFormInner>
      </Overlay>
    </ImageFormWrapper>
  )
};

export default withHoc(ImageForm);
