import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { useHistory } from 'react-router-dom'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function SubscriptionList() {

    const history = useHistory();
    const state = useSelector(state => state);

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

    const blankMessage = () => {
        return (
            <div className="noSubscription">
                You do not have any active subscription
            </div>
        )
    }

    return (
        <>
            {/* <div>SubscriptionList</div> */}
            {state.products.productRecords.length > 0 ?
                state.products.productRecords.map((item, index) => {
                    return (
                        <ProductCard key={index} data={item} />
                    )
                }) : blankMessage()
            }
            <Fab className='fab' color="primary" aria-label="add" style={style} onClick={() => history.push('/addnew')}>
                <AddIcon />
            </Fab>

        </>
    )
}

export default SubscriptionList