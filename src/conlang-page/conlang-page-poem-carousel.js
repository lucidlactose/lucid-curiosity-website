// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {
  CarouselProvider,
  Slide,
  Slider,
  DotGroup,
  Image,
  ButtonFirst,
  ButtonLast,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
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
  height: '500px',
  margin: '0',
  listStyleType: 'none',
});

const Img = styled(Image, {
  height: '300px',
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
    <h2>Carousel (With Master Loading Spinner)</h2>
    <p>
      This spinner will go away after all the images have loaded. You might want
      to use Chrome dev tools to throttle the network connection so you can see
      the spinner.
    </p>
    <MySlider>
      <MySlide index={0}>
        {values.shakespeare.map((str, key) => (
          <p key={key}>{str}</p>
        ))}
      </MySlide>
      <MySlide index={1}>
        {values.shakespeare.map((str, key) => (
          <p key={key}>{str}</p>
        ))}
      </MySlide>
    </MySlider>
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <DotGroup />
  </CarouselProvider>
);

export default ConlangPagePoemCarousel;
