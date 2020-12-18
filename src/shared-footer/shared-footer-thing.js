// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {HeaderBackgroundColor} from '../styles';
import {assetUrl} from 'fusion-core';

const Wrapper = styled('div', {
  backgroundColor: HeaderBackgroundColor,
  margin: '-8px',
});

const AlignmentWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  lineHeight: '2',
  margin: '0 auto',
  maxWidth: '1420px',
  minHeight: '256px',
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
