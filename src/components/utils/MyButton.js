import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';


const MyButton = (props) =>{
    return(
        <Button href={props.link}
        variant="contained"
        size="small"
        style={{
            background:"#8e8e8e",
            color:'#ffffff',
            ...props.style
        }}>
<img src={TicketIcon}
className="iconImage"
alt="icon_button"
/>


{props.text}
        </Button>
    )
}

export default MyButton; 