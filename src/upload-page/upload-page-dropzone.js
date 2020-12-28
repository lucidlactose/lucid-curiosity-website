// @flow
import React, {useEffect, useState} from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {useDropzone} from 'react-dropzone';
import {BackgroundGrey, SomethingBlue} from '../styles';
import {TemporaryUploadPageValues as values} from '../values';
import UploadPageImgThumbnail from './upload-page-img-thumbnail';

const LeftHandWrapper = styled('div', {
  backgroundColor: 'black',
  display: 'flex',
  flex: '0 0 608px',
  overflow: 'scroll',
  maxWidth: '710px',
});

const DropzoneContainer = styled('section', {
  backgroundColor: BackgroundGrey,
  overflowY: 'scroll',
  width: '512px',
  height: 'calc(100vh - 114px)',
  minWidth: '512px',
  maxWidth: '1024px',
  padding: '82px 32px 32px',
  position: 'fixed',
  top: '0',
  zIndex: '10',
});

const Dropzone = styled('div', {
  border: `3px dashed ${SomethingBlue}`,
});

const InsideBox = styled('div', {
  color: SomethingBlue,
  display: 'flex',
  justifyContent: 'center',
  width: '256px',
  margin: '64px auto',
});

const UploadPageDropzone = () => {
  const [files, setFiles] = useState([]);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    mulitple: true,
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

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <LeftHandWrapper>
      <DropzoneContainer>
        <Dropzone {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <InsideBox> {values.DropboxText} </InsideBox>
        </Dropzone>

        <aside>
          {files.length ? <h4> {values.FilesTitleText} </h4> : null}
          <ul>
            {acceptedFiles.map(file => (
              <li key={file.path}>
                {file.path} : files {file.size} bytes
                <UploadPageImgThumbnail {...file} />
              </li>
            ))}
          </ul>
        </aside>
      </DropzoneContainer>
    </LeftHandWrapper>
  );
};

export default UploadPageDropzone;
