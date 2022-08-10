import { Box } from '@mui/material';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import loginlogo from '../../../assets/images/login/logo1.png';

const Login = () => {
    return (
        <Fragment>
            <Container fluid={true} className="p-0" style={{backgroundColor: "#014AAD"}} >
                <Row>
                    <Col>
                    
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Login;