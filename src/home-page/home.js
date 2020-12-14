// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';

const Center = styled('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const FusionStyle = styled('div', {
  fontSize: '80px',
  color: 'rgba(0,0,0,.8)',
  paddingRight: '30px',
  display: 'flex',
});

const FullHeightDiv = styled('div', {
  height: '100%',
  backgroundColor: '#eeeeee',
});

const Circle = styled('div', {
  height: '180px',
  width: '180px',
  marginTop: '20px',
  backgroundColor: 'white',
  ':hover': {backgroundColor: '#f0f8fa'},
  border: '10px solid #4db5d9',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GettingStartedLink = styled('a', {
  textDecoration: 'none',
  color: '#4db5d9',
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%',
});

const Home = () => (
  <FullHeightDiv>
    <Center>
      <FusionStyle>Fusion.js whatever</FusionStyle>
      <div>
      </div>
      <input type="file" id="input" multiple />
      <Center>
        <Circle>
          <GettingStartedLink href="https://fusionjs.com/docs/getting-started">
            Let&apos;s Get Started
          </GettingStartedLink>
        </Circle>
      </Center>
    </Center>
  </FullHeightDiv>
);

export default Home;
