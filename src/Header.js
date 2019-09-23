import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import { Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setCurrentLang } from './Redux-config/actions/lang';
import { injectIntl } from 'react-intl';

class Header extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    login = () => {
        Auth.authenticate();
    }

    logout = () => {
        Auth.signOut();
    }

    switcher = (lang) => {
        this.props.setCurrentLang(lang);
    }

    renderLangSwitcher = () => {
        return (
            <div className="m-3">
                <Button variant="dark" className="mr-3" id="en" onClick={() => this.switcher('en')}>English</Button>
                <Button variant="dark" className="mr-3" id="ar" onClick={() => this.switcher('ar')}>العربية</Button>
            </div>
        )
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <Container className="p-3">
                {this.renderLangSwitcher()}
                <div>
                    <Link className="mr-3" to='/'>{messages.home}</Link>
                    <Link className="mr-3" to='public'>{messages.public}</Link>
                    <Link className="mr-3" to='private'>{messages.private}</Link>
                    <Button className="mr-3" variant="primary" onClick={this.login}>{messages.login}</Button>
                    <Button className="mr-3" variant="danger" onClick={this.logout}>{messages.logout}</Button>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { lang: state.locale.lang }
}

const HeaderComponent = injectIntl(Header);

export default connect(mapStateToProps, { setCurrentLang })(HeaderComponent);