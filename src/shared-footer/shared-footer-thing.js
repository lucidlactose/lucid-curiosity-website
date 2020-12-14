// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {HeaderBackgroundColor} from '../styles';
import {assetUrl} from 'fusion-core';

/*
 this wrapper will result in a grid that is something like
         |-----------------|-----------------|-----------------|
         |                 |                 |                 |
         |                 |                 |                 |
         |        A        |        B        |        C        |
         |                 |                 |                 |
         |                 |                 |                 |
         |-----------------|-----------------|-----------------|
  Where those that do not fit in A will go to B and so on.
  If one fits in another is dependent on screen size or whatnot, so account for that later
 */

const Wrapper = styled('div', {
  color: 'blue',
  backgroundColor: HeaderBackgroundColor,
  margin: '-8px',
  columnCount: '3',
});

const ImageWrapper = styled('img', {
  padding: '8vh 16vw',
  width: '100px',
});

const TextWrapper = styled('div', {
  padding: '8vh',
  color: 'black',
});

const SharedFooterThing = () => (
  <Wrapper>
    <ImageWrapper src={assetUrl('../assets/jolly_roger.png')} />
    <TextWrapper>Something</TextWrapper>
    <TextWrapper>Something</TextWrapper>
  </Wrapper>
);

export default SharedFooterThing;
