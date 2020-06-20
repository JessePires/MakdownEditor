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
      title: '',
      value: ''
    });

    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    };

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true,
      });
    };

    this.getMarkup = () => {
      return { __html: marked(this.state.value) };
    };

    this.handleSave = () => {
      if (this.state.isSaving) {
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem título',
            content: this.state.value 
          }
        };

        localStorage.setItem('markdown-editor', JSON.stringify(files));
        
        this.setState({
          isSaving: false,
          files
        });
      }
    };

    this.createNew = () => {
      this.setState(this.clearState());
      this.textarea.focus();
    };

    this.handleRemove = () => {      
      let files = Object.keys(this.state.files).reduce((acc, fileId) => {
        return fileId === this.state.id ? acc : {
          ...acc,
          [fileId]: this.state.files[fileId]
        };
      }, {});

      localStorage.setItem('markdown-editor', JSON.stringify(files));
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
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content
      });
    };
  }

  componentDidMount () {
    const files = JSON.parse(localStorage.getItem('markdown-editor'));

    this.setState({
      files
    });
  }

  componentDidUpdate () {
    clearInterval(this.timer);
    this.timer = setTimeout(this.handleSave, 400);
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
        title={ this.state.title }
      />
    );
  }
}
  
export default App;
