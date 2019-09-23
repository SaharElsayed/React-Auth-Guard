import React from 'react';
import { Container } from 'react-bootstrap';
import { injectIntl } from 'react-intl';

const Public = (props) => {
    const { messages } = props.intl;

    return (
        <Container>
            <h1>{messages.publicPage}</h1>
        </Container>
    )
}
export default injectIntl(Public);