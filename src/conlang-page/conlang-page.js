// @flow
import React from 'react';
import {assetUrl} from 'fusion-core';
import {styled} from 'fusion-plugin-styletron-react';
import { CarouselProvider, Slide, Slider, DotGroup, ImageWithZoom, ButtonFirst, ButtonLast, ButtonBack, ButtonNext } from 'pure-react-carousel';

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

const MyCarouselProvider = styled(CarouselProvider, {
  maxWidth: '800px',
})

const MySlider = styled(Slider, {
  maxWidth: '800px',
});

const MySlide = styled(Slide, {
  float: 'left',
  width: '33.333%',
})

const ConlangPage = () => (
  <Wrapper>
    <TitleWrapper> Welcome to my Conalng Documentation. Keep your hands and feet within the vehicle. </TitleWrapper>
    <MyCarouselProvider
      visibleSlides={3}
      totalSlides={3}
      step={3}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      hasMasterSpinner
    >
      <MySlider>
        <MySlide>
          <img src={assetUrl('../assets/jolly_roger.png')} />
        </MySlide>
        <MySlide>
          <img src={assetUrl('../assets/jolly_roger.png')} />
        </MySlide>
        <MySlide>
          <img src={assetUrl('../assets/jolly_roger.png')} />
        </MySlide>
      </MySlider>
      <ButtonFirst>First</ButtonFirst>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
      <ButtonLast>Last</ButtonLast>
      <DotGroup />
    </MyCarouselProvider>
  </Wrapper>
);

export default ConlangPage;
