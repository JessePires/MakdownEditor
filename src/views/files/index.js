import React from 'react';
import { FileListContainer, Title, StyledUl } from './style.js'

const Files = ({ files, handleOpenFile }) => (
  <FileListContainer>
    <Title>Arquivos</Title>

    <StyledUl>
      { Object.keys(files).map((fileId) => (
        <li key={ fileId } >
          <button onClick={ handleOpenFile(fileId) }>
            { files[fileId].title }
          </button>
        </li>
      ))}
    </StyledUl>
  </FileListContainer>
);



export default Files;
