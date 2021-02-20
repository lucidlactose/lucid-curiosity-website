// @flow
import React, {useState} from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {TemporaryUploadPageValues as values} from '../values';

const Center = styled('div', {
  justifyContent: 'center',
  border: '1px solid black',
  boxSizing: 'border-box',
  height: '100%',
  width: '750px',
  padding: '32px',
});

const Parent = styled('div', {
  maxWidth: '710px',
  marginRight: '16px',
});

const Text = styled('button', {
  backgroundColor: '#777',
  color: 'white',
  cursor: 'pointer',
  width: '100%',
  border: 'none',
  textAlign: 'left',
  outline: 'none',
  fontSize: '15px',
  ':hover': {
    backgroundColor: '#555',
  },
});

const Content = styled('div', props => ({
  display: props.$isactive ? 'block' : 'none',
}));

const UploadPageFileSim = () => {
  const [isHidden, setIsHidden] = useState(false);
  const collapse = () => {
    setIsHidden(!isHidden);
  };
  return (
    <Center>
      <Parent>
        <Text onClick={collapse}> asoudhasodjsaojdsioa </Text>
        <Content $isactive={isHidden}> Something else </Content>
      </Parent>
    </Center>
  );
};

export default UploadPageFileSim;
