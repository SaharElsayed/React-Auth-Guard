import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import { Button, Container } from 'react-bootstrap';

class Header extends React.Component {
    login = () => {
        Auth.authenticate();
    }

    logout = () => {
        Auth.signOut();
    }

    render() {
        return (
            <Container className="p-3">
                <Link className="mr-3" to='/'>Home</Link>
                <Link className="mr-3" to='public'>Public</Link>
                <Link className="mr-3" to='private'>Private</Link>
                <Button className="mr-3" variant="primary" onClick={this.login}>Login</Button>
                <Button className="mr-3" variant="danger" onClick={this.logout}>Logout</Button>
            </Container>
        )
    }
}

export default Header;