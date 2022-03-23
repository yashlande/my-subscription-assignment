import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { useHistory } from 'react-router-dom'
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

function SubscriptionList() {

    const state = useSelector(state => state);

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };

    const sampleData = {
        imgPath: 'https://www.cardiosmart.org/images/default-source/news-article-images/70545718.tmb-dtl-news-a.jpg?sfvrsn=b5c370e0_2',
        name: 'sample name',
        price: 25,
        qty: 2
    }

    const history = useHistory();

    return (
        <>
            {/* <div>SubscriptionList</div> */}
            {state.products.productRecords.length>0 &&
                state.products.productRecords.map((item,index)=>{
                    return(
                        <ProductCard key={index} data={item}/>
                    )
                })
            }
            <Fab className='fab' color="primary" aria-label="add" style={style} onClick={() => history.push('/addnew')}>
                <AddIcon />
            </Fab>

        </>
    )
}

export default SubscriptionList