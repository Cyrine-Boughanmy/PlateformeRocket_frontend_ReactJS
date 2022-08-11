import { Box, Tooltip } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import loginlogo from '../../../assets/images/login/logo1.png';
import PageLoader from '../hooks/PageLoader';

const Login = () => {
    return (
        
        <Fragment>
            
            <Container fluid={true} className="p-0" style={{backgroundColor: "#014AAD"}} >
                
                <Row>
                    <Col>
                    <Box  textAlign="center" sx={{
                        position: "absolute",
                        justifyContent:'center',
                        alignItems:"center",
                        transform: "translate(-50%,-50%)",
                        top: "8%",
                        left: "50%"
                        
                    }}>
                        <img 
                       style={{
                        width:80,
                       
                    }}
                         src={loginlogo} alt='logo' />
                     
                    
                    </Box>
                        <LoginForm />
                    </Col>
                </Row>
            </Container>
            
        </Fragment>
    );
};

export default Login;