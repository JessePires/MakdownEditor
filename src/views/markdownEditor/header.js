import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import SaveMessage from '../../components/saveMessage';

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='header' >
    <Button 
      onClick={ handleCreate }
      kind='success'
    >
      Criar Novo
    </Button>
    
    <Button
      onClick={ handleRemove } 
      kind='danger'
    >
      Remover
    </Button>
    
    <SaveMessage isSaving={isSaving} /> 

  </header>
);

MarkdownEditorHeader.propTypes = {
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default MarkdownEditorHeader;
