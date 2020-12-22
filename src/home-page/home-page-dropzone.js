// @flow
import React, {useEffect, useState} from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {useDropzone} from 'react-dropzone';
import {BackgroundGrey} from '../styles';
import HomePageImgThumbnail from './home-page-img-thumbnail';

const Dropzone = styled('div', {
  borderStyle: 'dashed',
  borderColor: BackgroundGrey,
  borderRadius: '1',
  minWidth: '128px',
  minHeight: '64px',
  maxWidth: '1024px',
  maxHeight: '512px',
});

const InsideBox = styled('div', {
  color: BackgroundGrey,
  margin: '64px 128px',
});

const HomePageDropzone = () => {
  const [files, setFiles] = useState([]);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const fileStuff = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <HomePageImgThumbnail {...file} />
    </li>
  ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section>
      <Dropzone {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <InsideBox>Click here or drag-drop files here</InsideBox>
      </Dropzone>

      <aside>
        {files.length ? <h4> Files </h4> : null}
        <ul>{fileStuff}</ul>
      </aside>
    </section>
  );
};

export default HomePageDropzone;
