import styled from 'styled-components';

export const FileListContainer = styled.div`
  margin-left: 0;
  width: 15%;
  height: 540px;
  float: left;
  background-color: #1a2639;
  color: #fcfcfc;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  padding-top: 5%;
  margin: 0;
`;
//c24d2c
export const TitleDiv = styled.div`
  background-color: #b34020;
  padding-left: 21%;
  padding-top: 5%;
  width: 90%;
  margin: 0% 5% 0% 5.1%;
  height: 50px;
  border-radius: 5px 5px 0px 0px;
`;

export const Title = styled.h2`
  color: #fff;
  margin: 0;
`;

export const FileList = styled.div`
  background-color: #3e4a61;
  margin: 0% 5% 5% 5%;
  height: 485px;
  border-radius: 0px 0px 5px 5px;
`;

export const FileButton = styled.button`
  background-color: #3e4a61;
  color: #fcfcfc;
  border: none;
  text-align: left;
  width: 100%;
  height: 40px; 
  transition: 0.25s;   

  &:hover{
    background-color: #1a2639;
  }
`;
