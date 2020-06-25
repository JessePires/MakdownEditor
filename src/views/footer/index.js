import React from 'react';
import { StyledFooter, Info, GithubLink } from './style.js';
import { ReactComponent as GithubIcon} from '../../assets/github 1.svg';

const Footer = () => (
  <StyledFooter>
    <Info>
      Criador: Jessé Pires Barbato Rocha
    </Info>
    <GithubLink href='https://github.com/JessePires' target='blank'>
      <GithubIcon />
    </GithubLink>
  </StyledFooter>
);

export default Footer;
