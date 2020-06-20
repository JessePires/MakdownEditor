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
        const newFile = {
          title: this.state.title || 'Sem título',
          content: this.state.value
        };

        localStorage.setItem(this.state.id, JSON.stringify(newFile));
        
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile,
          }
        });
      }
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
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content
      });
    };
  }

  componentDidMount () {
    const files = Object.keys(localStorage);
    this.setState({
      files: files
        .filter((id) => id
            .match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)
        ).reduce((acc, fileId) => ({
        ...acc,
        [fileId]: JSON.parse(localStorage.getItem(fileId))
      }), {})
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
