import React from 'react';
import { Container } from 'react-bootstrap';
import { injectIntl } from 'react-intl';

const Private = (props) => {
    const { messages } = props.intl;

    return (
        <Container>
            <h1>{messages.privatePage}</h1>
        </Container>
    )
}
export default injectIntl(Private);