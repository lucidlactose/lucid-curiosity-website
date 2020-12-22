// @flow
import React from 'react';
import HomeDropzone from './home-page-dropzone';
import {styled} from 'fusion-plugin-styletron-react';
import {BackgroundDarkWhite} from '../styles';

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const FullHeightDiv = styled('div', {
  backgroundColor: BackgroundDarkWhite,
  maxWidth: '1420px',
  height: '100%',
  margin: '0 auto',
});

const HomePage = () => (
  <FullHeightDiv>
    <Center>
      <HomeDropzone />
    </Center>
  </FullHeightDiv>
);

export default HomePage;
