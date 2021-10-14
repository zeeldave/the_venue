import React from 'react';
import {scroller} from 'react-scroll';

import {Drawer, List, ListItem} from '@material-ui/core'





const SideDrawer = (props) =>
{


    const Links = [
        { where:'featured', value:'To the TOP' },
        { where:'venueinfo', value:'Venue Info' },
        { where:'highlights', value:'Highlights' },
        { where:'pricing', value:'Pricing' },
        { where:'location', value:'Location' }
    ]
    
    
    
    const renderItem = (item) =>
    {
        return(
    <ListItem button onClick={()=> scrollToElement(item.where)} key={item.where}> 
        {item.value}
    </ListItem>
        )
    }
    


    const scrollToElement = (element) =>{

        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset: -150,
        });
            props.onClose(false)
        }




    return(
<Drawer
anchor="right"
open={props.open}
onClose={() => props.onClose(false)}
>

<List component="nav">
{Links.map((item)=>renderItem(item))}
</List>


</Drawer>
    )
}

export default SideDrawer;