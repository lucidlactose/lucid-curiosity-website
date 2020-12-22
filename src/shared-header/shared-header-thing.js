// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {BackgroundSkyBlue} from '../styles';

const BackgroundWrapper = styled('div', {
  background: BackgroundSkyBlue,
  height: '50px',
  position: 'fixed',
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
  maxWidth: '1420px',
  margin: '0 auto',
});

const NameWrapper = styled('div', {
  fontSize: '24px',
});

const ProfileWrapper = styled('div', {
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
