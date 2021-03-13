// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import ConlangPagePoemCarousel from './conlang-page-poem-carousel';
import {TemporaryConlangPageValues as values} from '../values';

// this src might work but I need to install xcode updates
const Wrapper = styled('div', {
  margin: '0 auto',
  padding: '32px',
  fontFamily: {
    src: 'url("/assets/fonts/mabopefu_1_11.otf") format(otf)',
    // fontWeight: 'normal',
    // fontStyle: 'normal'
  }
});

const TitleWrapper = styled('h1', {
  fontSize: '32px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
});

const StickyWrapper = styled('h2', {
  backgroundColor: 'white',
  display: 'flex',
  border: '1px solid black',
  height: '30px',
  padding: '10px 30px',
  // position: 'sticky',
  top: '50px',
  zIndex: '999',
});

const ConlangPage = () => (
  <Wrapper>
    <TitleWrapper>{values.title}</TitleWrapper>
    <StickyWrapper>{values.section1}</StickyWrapper>
    <p>{values.p}</p>
    <StickyWrapper>{values.section2}</StickyWrapper>
    <ConlangPagePoemCarousel />
  </Wrapper>
);

export default ConlangPage;
