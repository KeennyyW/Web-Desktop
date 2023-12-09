import React from 'react'
import { Toolbar, Button, List, ListItem } from 'react95';
import './Toolbar.css'; 

const MyToolbar = () => {
    return (
        <div className='ToolbarTest'>
            <Toolbar style={{ position: 'fixed', bottom: 0, width: '100%' }}>
                <Button active={false} size={32} />
                <List horizontalAlign="left" verticalAlign="bottom" open={true} style={{position: 'absolute', bottom: '100%', right: 0, display: 'flex'}}>
                    <ListItem>Program 1</ListItem>
                    <ListItem>Program 2</ListItem>
                    <ListItem>Program 3</ListItem>
                </List>
            </Toolbar>
            <img src={require("../assets/Windows95Logo.png")} alt="Windows 95 Logo" style={{ width: '50px', height: 'auto' }} />
        </div>
    )
}

export default MyToolbar
