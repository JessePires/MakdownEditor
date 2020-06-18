import React from 'react';
import PropTypes from 'prop-types';

const MarkdownEditorHeader = ({ isSaving, handleRemove }) => (
  <header className='header' >
    <button className='remove' onClick={ handleRemove } >Remover</button>
    <p className='isSaving'>
      { isSaving ? 'Salvando...' : 'Salvo!' }
    </p>
  </header>
);

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default MarkdownEditorHeader;
