// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {HeaderBackgroundColor} from '../styles';

const BackgroundWrapper = styled('div', {
  background: HeaderBackgroundColor,
  position: 'fixed',
  height: '50px',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '999',
});

const AlignmentWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  lineHeight: '2',
  margin: '0 auto',
  maxWidth: '1420px',
});

const NameWrapper = styled( 'div', {
  fontSize: '24px',
});

const ProfileWrapper = styled( 'div', {
  color: 'green',
});


const SharedHeaderThing = () => (
  <BackgroundWrapper>
    <AlignmentWrapper>
      <NameWrapper> (Img maybe?) SITE NAME </NameWrapper>
      <ProfileWrapper>Home</ProfileWrapper>
    </AlignmentWrapper>
  </BackgroundWrapper>
);

export default SharedHeaderThing;
