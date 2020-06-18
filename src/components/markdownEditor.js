import React from 'react';
import PropTypes from 'prop-types';
import Header from './markdownEditorHeader';

const MarkdownEditor = ({ value, isSaving, handleChange, handleRemove, getMarkup }) => (
  <div className='editor'>
    <Header 
      isSaving={ isSaving }
      handleRemove={ handleRemove }
    />
    <textarea className='TextArea' value={ value } onChange={ handleChange } autoFocus />
    <article className='view' dangerouslySetInnerHTML={ getMarkup() } />
  </div>
);

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
};

export default MarkdownEditor;
