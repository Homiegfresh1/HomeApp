import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Navbar from './navigation/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default Layout;