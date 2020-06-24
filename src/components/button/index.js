import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style.js';
import { ReactComponent as Add } from '../../assets/add.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';

const Button = ({ onClick, kind }) => (
  <StyledButton
    onClick={ onClick }
    kind={ kind }
    className={ `button ${kind ? '-' + kind : ''}` }
  >
    { kind === 'success' ? <Add /> : <Delete /> }
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  kind: PropTypes.oneOf(['success', 'danger'])
};

export default Button;
