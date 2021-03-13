// @flow
import React from 'react';
import {Link} from 'fusion-plugin-react-router';
import {styled} from 'fusion-plugin-styletron-react';
import {TemporaryHomePageValues as values} from '../values';

/*
Personally, I want to stylistically display this in  an artistic way.
Maybe the boxes, instead of a table, will be around in a circle.

There could be a little icon in the middle that says "yo", then when you
click the little icon moving spinning clockwise and counter clockwise by 12
degrees at slow intervals. The icon flips over and exposes the website
options that are all organized in circles.

Having a bunch of boxes to make a tetris like structure would be really cool.
In order to make this happen, I would have to make an rng length or fixed length
in this div in order to know how long or tall it will be and how it will fit next
to all other options
*/

type ValuesType = {
  text: string,
  link?: string,
};

const Wrapper = styled('div', {
  margin: '0 auto',
  padding: '32px 0',
});

const TitleWrapper = styled('div', {
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

// 150 box height/width
// 16 font size
// (150 -16)/2 = 67px
// when I was testing making the box round, I started thinking, "what if all these options were floating planets/ bouncing balls on a web page"
const BoxWrapper = styled('div', {
  fontSize: '16px',
  display: 'flex',
  justifyContent: 'center',
  flex: '1 1 44%',
  border: '1px black solid',
  boxSizing: 'border-box',
  height: '150px',
  margin: '3%',
  padding: '67px 0',
});

const LinkedWrapper = styled(Link, {
  textDecoration: 'none',
});

const HomePage = () => (
  <Wrapper>
    <TitleWrapper> {values.TitleText} </TitleWrapper>
    <FlexWrapper>
      {values.BoxText.map((val: ValuesType, key) => (
        <BoxWrapper key={key}>
          <LinkedWrapper to={val.link}> {val.text} </LinkedWrapper>
        </BoxWrapper>
      ))}
    </FlexWrapper>
  </Wrapper>
);

export default HomePage;
