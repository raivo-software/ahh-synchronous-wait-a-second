import React, { Component } from 'react';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'fi',
      translations: {}
    }
  }

  componentDidMount(){
    fetch('/translations/')
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          translations: json
        });
        if(json.hasOwnProperty(this.state.lang)) {
          this.setTexts(json[this.state.lang]);
        }
      });
  }

  changeTexts(lang) {
    const texts = this.state.translations[lang];
    this.setTexts(texts);
  }

  setTexts(texts) {
    this.props.onTextsChanged({
      title: texts.greeting,
      content: texts.information,
      subtitle: texts.dailyPhilosophy
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeTexts('en')}>English</button>
        <button onClick={() => this.changeTexts('fi')}>Suomi</button>
      </div>
    );
  }
}

export default LanguageSelector;