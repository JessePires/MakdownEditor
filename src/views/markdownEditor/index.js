import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Files from '../files';

import { Textarea, View } from './style.js';

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props }) => (
  <div className='editor'>
    <Header 
      { ... props }
      handleChange={ handleChange }
    />

    <Files
      files={ files }
      handleOpenFile={ handleOpenFile }
    />

    <Textarea
      value={ value }
      onChange={ handleChange('value') }
      autoFocus
      ref={ textareaRef }
    />

    <View
      dangerouslySetInnerHTML={ getMarkup() }
    />
  </div>
);

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
};

export default MarkdownEditor;
