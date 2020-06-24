import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/button';
import SaveMessage from '../../components/saveMessage';

import { Header, Input } from './style.js';

const MarkdownEditorHeader = ({ title, isSaving, handleRemove, handleCreate, handleChange }) => (
  <Header>
    <Button 
      onClick={ handleCreate }
      kind='success'
    />
    
    <Input
      type='text'
      value={ title }
      onChange={ handleChange('title') }
      placeholder='insira o título aqui'
    />
    
    <Button
      onClick={ handleRemove } 
      kind='danger'
    />
    
    <SaveMessage isSaving={isSaving} /> 

  </Header>
);

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default MarkdownEditorHeader;
