import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './style.js';

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && (
    <Message>
      { isSaving ? 'Salvando...' : 'Salvo!' }
    </Message> 
  )
);

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
};

export default SaveMessage;
