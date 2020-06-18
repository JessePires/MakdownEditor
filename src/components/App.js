import React, { Component } from 'react';
import marked from 'marked';
import highlightJs from 'highlight.js';
import MarkdownEditor from './markdownEditor';

import './App.css';

marked.setOptions({
  highlight: (code) => {
    return highlightJs.highlightAuto(code).value;
  }
});

class App extends Component {
  constructor () {
    super();

    this.state = {
      value: '',
      isSaving: false,
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
      localStorage.setItem('md', this.state.value);
    };

    this.handleRemove = () => {
      localStorage.removeItem('md');
      this.setState({
        value: ''
      });
    };
  }

  componentDidMount () {
    const value = localStorage.getItem('md');
    this.setState({ value });
  }

  componentDidUpdate () {
    clearInterval(this.timer);
    this.timer = setTimeout( () => {
      this.handleSave();
      this.setState({
        isSaving: false,
      })
    }, 1000);
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
        getMarkup={ this.getMarkup }
      />
    );
  }
}
  
export default App;
