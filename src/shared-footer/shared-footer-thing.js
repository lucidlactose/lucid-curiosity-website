// @flow
import React from 'react';
import {assetUrl} from 'fusion-core';
import {styled} from 'fusion-plugin-styletron-react';
import {BackgroundSkyBlue} from '../styles';

const Wrapper = styled('div', {
  backgroundColor: BackgroundSkyBlue,
  margin: '-8px',
});

const AlignmentWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  lineHeight: '2',
  minHeight: '256px',
  maxWidth: '1420px',
  margin: '0 auto',
});

const ImageWrapper = styled('img', {
  width: '100px',
  height: '100%',
});

const TextWrapper = styled('div', {
  color: 'black',
});

const SharedFooterThing = () => (
  <Wrapper>
    <AlignmentWrapper>
      <ImageWrapper src={assetUrl('../assets/jolly_roger.png')} />
      <TextWrapper>Something</TextWrapper>
      <TextWrapper>Something</TextWrapper>
    </AlignmentWrapper>
  </Wrapper>
);

export default SharedFooterThing;
