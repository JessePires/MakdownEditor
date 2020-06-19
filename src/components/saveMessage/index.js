import React from 'react';
import PropTypes from 'prop-types';
import './saveMessage.css';

const SaveMessage = ({ isSaving }) => (
  isSaving !== null && (
    <p className='isSaving'>
      { isSaving ? 'Salvando...' : 'Salvo!' }
    </p> 
  )
);

SaveMessage.propTypes = {
  isSaving: PropTypes.bool
};

export default SaveMessage;
