// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';
import {TemporaryUploadPageValues as values} from '../values';
import UploadPageDropzone from './upload-page-dropzone';

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

const Text = styled('button', props => ({
  backgroundColor: '#777',
  color: 'white',
  cursor: 'pointer',
  width: '100%',
  border: 'none',
  textAlign: 'left',
  outline: 'none',
  fontSize: '15px',
// :after {
//   content: '\002B';
//   color: white;
//   font-weight: bold;
//   float: right;
//   margin-left: 5px;
// }
  ":hover": {
    backgroundColor: '#555',
  }
}));

const Content = styled('div', {

});

const UploadPageFileSim = () => {
    const collapse = () => {
        // const coll = ; // gets all under a certain class...
        // for (i = 0; i < coll.length; i++) {
        //     coll[i].addEventListener("click", function() {
        //         this.classList.toggle("active");
                
        //         var content = this.nextElementSibling;
        //         if (content.style.maxHeight){
        //             content.style.maxHeight = null;
        //         } else {
        //             content.style.maxHeight = content.scrollHeight + "px";
        //         } 
        //     });
        // }
    };

    return (
        <Center>
            <Parent>
            <Text> asoudhasodjsaojdsioa </Text>
            </Parent>
        </Center>
    );
};

export default UploadPageFileSim;
