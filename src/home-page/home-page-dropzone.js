// @flow
import React, {useEffect, useState} from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {useDropzone} from 'react-dropzone';
import {BackgroundGrey} from '../styles';
import HomePageImgThumbnail from './home-page-img-thumbnail';
import {DropboxText} from '../values';

const DropzoneContainer = styled('section', {
  width: '1024px',
  padding: '32px',
});

const Dropzone = styled('div', {
  border: `3px dashed ${BackgroundGrey}`,
  minWidth: '128px',
  minHeight: '64px',
  maxWidth: '1024px',
  maxHeight: '512px',
});

const InsideBox = styled('div', {
  color: BackgroundGrey,
  width: '256px',
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
      {file.path} : files {file.size} bytes
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
    <DropzoneContainer>
      <Dropzone {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <InsideBox> {DropboxText} </InsideBox>
      </Dropzone>

      <aside>
        {files.length ? <h4> Files </h4> : null}
        <ul>{fileStuff}</ul>
      </aside>
    </DropzoneContainer>
  );
};

export default HomePageDropzone;
