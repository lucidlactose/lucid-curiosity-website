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
  marginTop: '64px',
  padding: '64px',
});

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#eeeeee',
});

const HomePage = () => (
  <FullHeightDiv>
    <Center>
      <HomeDropzone />
    </Center>
  </FullHeightDiv>
);

export default HomePage;
