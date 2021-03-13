// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {TemporaryUploadPageValues as values} from '../values';
import UploadPageDropzone from './upload-page-dropzone';
import UploadPageFileSim from './upload-page-file-sim';

const FullHeightDiv = styled('div', {
  display: 'flex',
});

const Center = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  padding: '32px',
});

const Parent = styled('div', {
  maxWidth: '710px',
  marginRight: '16px',
});

const UploadPage = () => (
  <FullHeightDiv>
    <UploadPageDropzone />
    <Center>
      <Parent>
        <h2> {values.TitleText} </h2>
        <UploadPageFileSim> {values.DiffText} </UploadPageFileSim>
      </Parent>
    </Center>
  </FullHeightDiv>
);

export default UploadPage;
