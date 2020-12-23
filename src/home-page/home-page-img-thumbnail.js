// @flow
import React from 'react';
import {styled} from 'styletron-react';
import {DashedLineGrey} from '../styles';

type PropsType = {
  name: string,
  preview: string,
};

const ThumbnailWrapper = styled('div', {
  display: 'block',
});

const Thumb = styled('div', {
  display: 'inline-flex',
  border: `1px solid ${DashedLineGrey}`,
  borderRadius: '2',
  boxSizing: 'border-box',
  width: '200px',
  height: '200px',
  margin: '0 8 8 0',
  padding: '4px',
});

const ThumbInner = styled('div', {
  display: 'flex',
  minWidth: '0',
  overflow: 'hidden',
});

const Img = styled('img', {
  display: 'block',
  width: 'auto',
  height: '100%',
});

const HomePageImgThumbnail = (props: PropsType) => (
  <ThumbnailWrapper>
    <Thumb key={props.name}>
      <ThumbInner>
        <Img src={props.preview} />
      </ThumbInner>
    </Thumb>
  </ThumbnailWrapper>
);

export default HomePageImgThumbnail;
