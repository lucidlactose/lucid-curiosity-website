// @flow
import React from 'react';
import {Link} from 'fusion-plugin-react-router';
import {styled} from 'fusion-plugin-styletron-react';
import {TemporaryHomePageValues as values} from '../values';

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


const MessyPage = () => (
  <Wrapper>
    {/* <TitleWrapper> {values.TitleText} </TitleWrapper> */}

  </Wrapper>
);

export default MessyPage;
