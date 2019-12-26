// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {HeaderBackgroundColor} from '../styles';
import {assetUrl} from 'fusion-core';

const Wrapper = styled('div', {
  backgroundColor: HeaderBackgroundColor,
  padding: '10px',
  margin: '-8px -8px 0px -8px',
});

const ImageWrapper = styled('img', {
  margin: '8px 0px 0px 16px',
  width: '40px',
  border: '1px solid black',
});

const ProfileWrapper = styled('div', {
  color: 'green',
});

const SharedHeaderThing = () => (
  <Wrapper>
    <ImageWrapper src={assetUrl('../assets/jolly_roger.png')} />
    <ProfileWrapper />
  </Wrapper>
);

export default SharedHeaderThing;
