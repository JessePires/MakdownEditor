import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import SaveMessage from '../../components/saveMessage';

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <header className='header' >
    <input 
      type='text'
      value={ title }
      onChange={ handleChange('title') }
      placeholder='insert title here'
    />

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
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default MarkdownEditorHeader;
