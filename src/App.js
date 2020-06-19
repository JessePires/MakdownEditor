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
      });
    };

    this.createNew = () => {
      this.setState(this.clearState());
      this.textarea.focus();
    };

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id);
      this.createNew();
    };

    this.handleCreate = () => {
      this.createNew();
    };

    this.textareaRef = (node) => {
      this.textarea = node;
    };
  }

  componentDidMount () {
    const value = localStorage.getItem('md');
    this.setState({ value: value || '' });
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
      />
    );
  }
}
  
export default App;
