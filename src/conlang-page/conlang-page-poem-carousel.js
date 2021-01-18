// @flow
import React from 'react';
import {assetUrl} from 'fusion-core';
import {styled} from 'fusion-plugin-styletron-react';
import {
  CarouselProvider,
  Slide,
  Slider,
  DotGroup,
  //   ImageWithZoom,
  ButtonFirst,
  ButtonLast,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

const MySlider = styled(Slider, {
  position: 'relative',
  overflow: 'hidden',
  maxWidth: '800px',
});

const MySlide = styled(Slide, {
  float: 'left',
  position: 'relative',
  display: 'block',
  boxSizing: 'border-box',
  height: '0',
  margin: '0',
  listStyleType: 'none',
});

const Img = styled('img', {
  height: '300px',
});

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
        <Img src={assetUrl('../assets/jolly_roger.png')} />
      </MySlide>
      <MySlide index={1}>
        <Img src={assetUrl('../assets/img02.jpg')} />
      </MySlide>
      <MySlide index={2}>
        <Img src={assetUrl('../assets/img03.jpg')} />
      </MySlide>
      <MySlide index={3}>
        <Img src={assetUrl('../assets/img04.jpg')} />
      </MySlide>
      <MySlide index={4}>
        <Img src={assetUrl('../assets/img05.jpg')} />
      </MySlide>
      <MySlide index={5}>
        <Img src={assetUrl('../assets/img06.jpg')} />
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
