// @flow
import React from 'react';
import {styled} from 'styletron-react';

const Wrapper = styled('div', {
  margin: '0 auto',
  padding: '32px 0',
});

const TitleWrapper = styled('th', {
  fontSize: '32px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
});

const ConlangPage = () => (
  <Wrapper>
    <TitleWrapper>
      {' '}
      Welcome to my Conalng Documentation. Keep your hands and feet within the
      vehicle.
    </TitleWrapper>
  </Wrapper>
);

export default ConlangPage;
