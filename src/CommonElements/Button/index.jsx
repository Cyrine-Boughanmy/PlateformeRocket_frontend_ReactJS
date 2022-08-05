import React from 'react';
import { Button } from 'reactstrap';

const Btn = (props) =>{
    return <Button  style={{backgroundColor:"#014AAD" , color :"#FFFFFF"}} {...props.attrBtn}>{props.children}</Button>;
};

export default Btn;