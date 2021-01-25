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
import {
  TemporaryConlangPagePoemCarouselValues as values,
  printValues,
} from '../values';

const MySlider = styled(Slider, {
  maxWidth: '1200px',
  overflow: 'hidden',
});

const MySlide = styled(Slide, {
  display: 'block',
  float: 'left',
  boxSizing: 'border-box',
  height: '700px',
  margin: '0',
});

const ArabicSlide = withStyle(MySlide, {
  direction: 'rtl',
  fontFamily: 'Linotype',
  textAlign: 'right',
});

/*
    In terms of the example poems, I want to make something like a sonnet.
    And then I want 2-3 examples of the Shi Shi Shi poems or the 子子子子 poem or the had had had had/ buffalo buffalo buffal o poems
*/
const ConlangPagePoemCarousel = () => (
  <CarouselProvider
    visibleSlides={3}
    totalSlides={6}
    step={3}
    naturalSlideWidth={400}
    naturalSlideHeight={500}
    hasMasterSpinner
  >
    <p>
      These are example poems that will be removed later on. Eventually these
      will be replaced with demos of poems in my conlang.
    </p>
    <MySlider>
      <MySlide index={0}>
        <h2> Example Shakespeare </h2>
        {printValues(values.shakespeare)}
      </MySlide>
      <ArabicSlide index={1}>
        <h2> Example al-Khansaa </h2>
        {printValues(values.alKhansaa)}
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
