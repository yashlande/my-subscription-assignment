import React from 'react'
import Checkbox from './Checkbox';

function ProductCard({data}) {

    const checklist = Object.entries(data.weekDay).map(([key, value]) => {
        return (
            <Checkbox key={key} weekName={`${key}`} checked={value} />
        );
    })
    
    return (
        <>
            <div className="card_container">
                <div className='img'>
                    <img alt='image' src={data.productDet.imgPath} width='100px' height='125px'/>
                </div>
                <div className="desc">
                    <p>{data.productDet.brand}</p>
                    <b>{data.productDet.name}</b>
                    <p>{data.productDet.details}</p>
                    <p>Quantity :{data.quantity}</p>
                    <p>MRP :<span style={{fontFamily:'Arial'}}>&#8377;</span> {data.productDet.mrp}</p>
                    <div className="card_week">
                        {
                            checklist
                        }
                    </div>
                </div>
            </div>
        </>
    )

}


export default ProductCard