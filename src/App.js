import React from 'react';
import Header from './Header';
import Router from './Router';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from './local/messages';
import './App.css';
class App extends React.Component {

  render() {
    const { lang } = this.props;

    return (
      <IntlProvider
        locale={lang}
        messages={messages[lang]}
      >
        <div className={lang === 'ar' ? 'rtl' : 'ltr'} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <Header />
          <Router />
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    lang: state.locale.lang
  }
}

export default connect(mapStateToProps)(App);
