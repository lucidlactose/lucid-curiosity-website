// @flow
import React from 'react';
import {assetUrl} from 'fusion-core';
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
        <p>From fairest creatures we desire increase,</p>
        <p>That thereby beauty’s rose might never die,</p>
        <p>But as the riper should by time decrease,</p>
        <p>His tender heir mught bear his memeory:</p>
        <p>But thou, contracted to thine own bright eyes,</p>
        <p>Feed’st thy light’st flame with self-substantial fuel,</p>
        <p>Making a famine where abundance lies,</p>
        <p>Thyself thy foe, to thy sweet self too cruel.</p>
        <p>Thou that art now the world’s fresh ornament</p>
        <p>And only herald to the gaudy spring,</p>
        <p>Within thine own bud buriest thy content</p>
        <p>And, tender churl, makest waste in niggarding.</p>
        <p>Pity the world, or else this glutton be,</p>
        <p>To eat the world’s due, by the grave and thee.</p>
      </MySlide>
      <MySlide index={1}>
        <p>From fairest creatures we desire increase,</p>
        <p>That thereby beauty’s rose might never die,</p>
        <p>But as the riper should by time decrease,</p>
        <p>His tender heir mught bear his memeory:</p>
        <p>But thou, contracted to thine own bright eyes,</p>
        <p>Feed’st thy light’st flame with self-substantial fuel,</p>
        <p>Making a famine where abundance lies,</p>
        <p>Thyself thy foe, to thy sweet self too cruel.</p>
        <p>Thou that art now the world’s fresh ornament</p>
        <p>And only herald to the gaudy spring,</p>
        <p>Within thine own bud buriest thy content</p>
        <p>And, tender churl, makest waste in niggarding.</p>
        <p>Pity the world, or else this glutton be,</p>
        <p>To eat the world’s due, by the grave and thee.</p>
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
