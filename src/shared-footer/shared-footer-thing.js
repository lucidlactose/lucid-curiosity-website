// @flow
import React from 'react';
import {assetUrl} from 'fusion-core';
import {styled} from 'fusion-plugin-styletron-react';
import {BackgroundSkyBlue} from '../styles';
import {TemporaryFooterValues as values} from '../values';

const Wrapper = styled('div', {
  backgroundColor: BackgroundSkyBlue,
  margin: '-8px',
});

const AlignmentWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  lineHeight: '2',
  minHeight: '256px',
  maxWidth: '1420px',
  margin: '0 auto',
  paddingTop: '64px',
});

const ImageWrapper = styled('img', {
  width: '100px',
  height: 'auto',
});

const FlexChildWrapper = styled('div', {
});

const TextWrapper = styled('div', {
  color: 'black',
});

const SharedFooterThing = () => (
  <Wrapper>
    <AlignmentWrapper>
      <FlexChildWrapper>
        <ImageWrapper src={assetUrl('../assets/jolly_roger.png')} />
      </FlexChildWrapper>
      <FlexChildWrapper>
        { values.MiddleBox.map((val, key) => (
            <TextWrapper key={key}> {val} </TextWrapper>
          ))}
      </FlexChildWrapper>
      <FlexChildWrapper>
        <TextWrapper> {values.RightBox} </TextWrapper>
      </FlexChildWrapper>
    </AlignmentWrapper>
  </Wrapper>
);

export default SharedFooterThing;
