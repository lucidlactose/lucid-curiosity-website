// @flow
import React from 'react';

type FilesType = {
  name: string,
  path: string,
  size: number,
  type: string,
};

type PropsType = {
  file: FilesType,
};

const UploadPageDropzoneImgMetaData = (props: PropsType) => {
  const {name, path, size, type} = props.file;

  const toKB = (file_size: number) => {
    if (file_size > 1000000) {
      return (file_size / 1000000).toFixed(2) + ' MB';
    }
    return (file_size / 1000).toFixed(2) + ' KB';
  };

  return (
    <>
      {name || path} : files {toKB(size)} : {type}
    </>
  );
};

export default UploadPageDropzoneImgMetaData;
