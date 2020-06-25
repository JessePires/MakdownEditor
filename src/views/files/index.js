import React from 'react';
import { FileListContainer, TitleDiv, Title, FileList, StyledUl, FileButton } from './style.js'

const Files = ({ files, handleOpenFile }) => (
  <FileListContainer>
    <TitleDiv>
      <Title>Arquivos</Title>
    </TitleDiv>

    <FileList>
      <StyledUl>
        { Object.keys(files).map((fileId) => (
          <li key={ fileId } >
            <FileButton onClick={ handleOpenFile(fileId) }>
              { files[fileId].title }
            </FileButton>
          </li>
        ))}
      </StyledUl>
    </FileList>
  </FileListContainer>
);



export default Files;
