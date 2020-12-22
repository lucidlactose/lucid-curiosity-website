// @flow
import React from 'react';
import {styled} from 'styletron-react';
import {DashedLineGrey} from '../styles';

type PropsType = {
  name: string,
  preview: string,
};

const Thumb = styled('div', {
  display: 'inline-flex',
  border: `1px solid ${DashedLineGrey}`,
  borderRadius: '2',
  boxSizing: 'border-box',
  width: '100px',
  height: '100px',
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

const HomePageImgThumbnail = (props: PropsType) => {
  return (
    <Thumb key={props.name}>
      <ThumbInner>
        <Img src={props.preview} />
      </ThumbInner>
    </Thumb>
  );
};

export default HomePageImgThumbnail;
