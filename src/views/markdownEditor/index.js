import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
  <div className='editor'>
    <Header { ... props } />

    <textarea 
      className='TextArea'
      value={ value }
      onChange={ handleChange }
      autoFocus
      ref={ textareaRef }
    />
    <article className='view' dangerouslySetInnerHTML={ getMarkup() } />
  </div>
);

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
};

export default MarkdownEditor;
