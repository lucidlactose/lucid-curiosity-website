// @flow
import React from 'react';
import HomeDropzone from './home-page-dropzone';
import {styled} from 'fusion-plugin-styletron-react';
import {BackgroundDarkWhite} from '../styles';
import {TitleText, TemporaryText} from '../values';

const FullHeightDiv = styled('div', {
  backgroundColor: BackgroundDarkWhite,
  maxWidth: '1420px',
  height: '100%',
  margin: '0 auto',
});

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  padding: '32px',
});

const Parent = styled('div', {
  display: 'block',
  marginRight: '16px',
});

const Title = styled('h2', {
  display: 'block',
});

const Text = styled('section', {
  display: 'block',
  fontSize: '16px',
});

const HomePage = () => (
  <FullHeightDiv>
    <Center>
      <Parent>
        <Title> {TitleText} </Title>
        <Text> {TemporaryText} </Text>
      </Parent>
      <HomeDropzone />
    </Center>
  </FullHeightDiv>
);

export default HomePage;
