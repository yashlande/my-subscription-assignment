import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { useHistory } from 'react-router-dom'

function SubscriptionList() {

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

    const history = useHistory();

    return (
        <>
            <div>SubscriptionList</div>
            <Fab className='fab' color="primary" aria-label="add" style={style} onClick={()=>history.push('/addnew')}>
                <AddIcon />
            </Fab>
        </>
    )
}

export default SubscriptionList