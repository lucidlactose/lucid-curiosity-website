// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import ConlangPagePoemCarousel from './conlang-page-poem-carousel';

const Wrapper = styled('div', {
  margin: '0 auto',
  padding: '32px 0',
});

const TitleWrapper = styled('h1', {
  fontSize: '32px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
});

const CarouselWrapper = styled('div', {
  position: 'relative',
  left: '30px',
});

// this page makes a second footer appear for some reason
// I have confirmed that it comes drom the ConlangPagePoemCarousel
const ConlangPage = () => (
  <Wrapper>
    <TitleWrapper>Welcome to my Conlang Documentation.</TitleWrapper>
    <CarouselWrapper>
      <ConlangPagePoemCarousel />
    </CarouselWrapper>
  </Wrapper>
);

export default ConlangPage;
