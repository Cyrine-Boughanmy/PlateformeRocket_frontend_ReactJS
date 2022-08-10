import React from 'react';
import { Button } from 'reactstrap';

const Btn = (props) =>{
    return <Button  style={{backgroundColor:"#014AAD" ,'&:hover': {
        backgroundColor: '#FFFFFF',
        opacity: [0.9, 0.8, 0.7],
      },
       color :"#FFFFFF"}}
        {...props.attrBtn}
        >{props.children}</Button>;
};

export default Btn;