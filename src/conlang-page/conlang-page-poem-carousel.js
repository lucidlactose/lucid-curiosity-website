// @flow
import React from 'react';
import {styled, withStyle} from 'fusion-plugin-styletron-react';
import {
  CarouselProvider,
  Slide,
  Slider,
  DotGroup,
  ButtonFirst,
  ButtonLast,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import {TemporaryConlangPagePoemCarouselValues as values} from '../values';

const MySlider = styled(Slider, {
  overflow: 'hidden',
  maxWidth: '1200px',
});

const MySlide = styled(Slide, {
  float: 'left',
  display: 'block',
  boxSizing: 'border-box',
  height: '700px',
  margin: '0',
  listStyleType: 'none',
});

const ArabicSlide = withStyle(MySlide, {
  textAlign: 'right',
});

/*
    In terms of the example poems, I want to make something like a sonnet.
    And then I want 2-3 examples of the Shi Shi Shi poems or the 子子子子 poem or the had had had had/ buffalo buffalo buffal o poems
*/

// for whatever reason, ImgWithZoom doesn't work atm
const ConlangPagePoemCarousel = () => (
  <CarouselProvider
    visibleSlides={3}
    totalSlides={6}
    step={3}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    hasMasterSpinner
  >
    <h2> Example Poems </h2>
    <p>
      These are example poems with their original versions on top and
      translations at the bottom. Translations will be added once the font for
      the language is created along with its romanization. Yes the carousel is
      just for show atm. Eventually each of these languages will have
      translations into my conlang and vice versa.
    </p>
    <MySlider>
      <MySlide index={0}>
        <h2> Shakespeare Sonnet 1</h2>
        {values.shakespeare.map((str, key) => (
          <p key={key}>{str}</p>
        ))}
      </MySlide>
      <ArabicSlide index={1}>
        <h2> Al Khansaa (idk the arabic name) </h2>
        {values.alKhansaa.map((str, key) => (
          <p key={key}>{str}</p>
        ))}
      </ArabicSlide>
    </MySlider>
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <DotGroup />
  </CarouselProvider>
);

export default ConlangPagePoemCarousel;
