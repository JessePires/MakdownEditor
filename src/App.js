import React, { Component } from 'react';
import { v4 } from 'node-uuid';
import marked from 'marked';
import highlightJs from 'highlight.js';
import MarkdownEditor from './views/markdownEditor';

import './App.css';

marked.setOptions({
  highlight: (code) => {
    return highlightJs.highlightAuto(code).value;
  }
});

class App extends Component {
  constructor () {
    super();

    this.clearState = () => ({
      id: v4(),
      value: ''
    });

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    };

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true,
      });
    };

    this.getMarkup = () => {
      return { __html: marked(this.state.value) };
    };

    this.handleSave = () => {
      localStorage.setItem(this.state.id, this.state.value);
      this.setState({
        isSaving: false,
        files: {
          ...this.state.files,
          [this.state.id]: this.state.value
        }
      });
    };

    this.createNew = () => {
      this.setState(this.clearState());
      this.textarea.focus();
    };

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id);
      
      let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        return fileId === this.state.id ? acc : {
          ...acc,
          [fileId]: this.state.files[fileId]
        };
      }, {});

      this.setState({ files });
      this.createNew();
    };

    this.handleCreate = () => {
      this.createNew();
    };

    this.textareaRef = (node) => {
      this.textarea = node;
    };

    this.handleOpenFile = (fileId) => () => {
      this.setState({
        id: fileId,
        value: this.state.files[fileId]
      });
    };
  }

  componentDidMount () {
    const files = Object.keys(localStorage);
    this.setState({
      files: files.reduce((acc, fileId) => ({
        ...acc,
        [fileId]: localStorage.getItem(fileId)
      }), {})
    });
  }

  componentDidUpdate () {
    clearInterval(this.timer);
    
    if(this.state.isSaving){
      this.timer = setTimeout(this.handleSave, 400);
    }
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  render () {
    return (
      <MarkdownEditor 
        value={ this.state.value }
        isSaving={ this.state.isSaving }
        handleChange={ this.handleChange }
        handleRemove={ this.handleRemove }
        handleCreate={ this.handleCreate }
        getMarkup={ this.getMarkup }
        textareaRef={ this.textareaRef }
        files={ this.state.files }
        handleOpenFile={ this.handleOpenFile }
      />
    );
  }
}
  
export default App;
