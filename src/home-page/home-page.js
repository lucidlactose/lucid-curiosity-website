// @flow
import React from 'react';
import HomeDropzone from './home-page-dropzone';
import {styled} from 'fusion-plugin-styletron-react';

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#eeeeee',
  maxWidth: '1420px',
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
