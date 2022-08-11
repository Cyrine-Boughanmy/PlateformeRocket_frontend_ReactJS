import React from 'react';
import { Button } from 'reactstrap';
import { motion } from 'framer-motion';
import './Button.css';

const Btn = (props) =>{
    return <button  
    className='btn-se-connecter'
        {...props.attrBtn}
        >{props.children}</button>;
};

export default Btn;