// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {TemporaryHomePageValues as values} from '../values';

/*
Personally, I want to stylistically display this in  an artistic way.
Maybe the boxes, instead of a table, will be around in a circle.

There could be a little icon in the middle that says "yo", then when you
click the little icon moving spinning clockwise and counter clockwise by 12
degrees at slow intervals. The icon flips over and exposes the website
options that are all organized in circles.
*/

const Wrapper = styled('div', {
  margin: '0 auto',
  padding: '32px 0',
});

const TitleWrapper = styled('th', {
  fontSize: '32px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
});

const FlexWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '365px',
  margin: '0 auto',
});

const BoxWrapper = styled('td', {
  flex: '1 1 44%',
  border: '1px black solid',
  boxSizing: 'border-box',
  height: '150px',
  margin: '3%',
});

const HomePage = () => (
  <Wrapper>
    <TitleWrapper> {values.TitleText} </TitleWrapper>
    <FlexWrapper>
      {values.BoxText.map((text, key) => (
        <BoxWrapper key={key}> {text} </BoxWrapper>
      ))}
    </FlexWrapper>
  </Wrapper>
);

export default HomePage;
