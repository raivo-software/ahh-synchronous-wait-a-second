import React, { Component } from 'react';
import AppTitle from './AppTitle';
import AppContent from './AppContent';
import LanguageSelector from './LanguageSelector';
import Clock from './Clock';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      texts: {
        title: 'Ladataan...',
      }
    };
  }

  setTexts(texts) {
    this.setState({
      texts: texts
    });
  }

  componentDidMount() {
    /*
    setTimeout(() => {
      window.alert('Huhuu, oletko siellä??');
    }, 5000);
    window.alert('En ole täällä!');
    */
  }

  render() {
    return (
      <div>
        <LanguageSelector onTextsChanged={texts => this.setTexts(texts)} />
        <AppTitle title={this.state.texts.title} subtitle={this.state.texts.subtitle} />
        <AppContent>
          <p>{this.state.texts.content}</p>
          <Clock />
        </AppContent>
      </div>
    );
  }
}

export default App;
