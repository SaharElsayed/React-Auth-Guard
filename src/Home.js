import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const Home = (props) => {
    const { messages } = props.intl;

    return (
        <Container>
            <h1>{messages.homePage}</h1>
        </Container>
    )
}

const mapStateToProps = state => {
    // console.log(state);

    return { lang: state.locale.lang }
}

const HomeComponent = injectIntl(Home);

export default connect(mapStateToProps)(HomeComponent);