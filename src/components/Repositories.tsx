import * as React from 'react';
import {List, ListItem, ListItemText} from "@mui/material";

interface Props {
    Id: string;
    Name: string;
}

export default function Repositories({ Id, Name } : Props) {
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <ListItem>
                <ListItemText primary={Name} secondary={Id.toString()} />
            </ListItem>
            </List>
        </div>
    )
}