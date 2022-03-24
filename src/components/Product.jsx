import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { useHistory } from 'react-router-dom'
import { addProduct } from './../Redux/productSlice'
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from "./Breadcrumb";


function Product() {

    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector(state => state.products.productRecords);

    // console.log("Product State =", state)

    const [errors, setErrors] = React.useState({
        errorMsg: ''
    })

    const [quantity, setQuantity] = useState(0)

    const product_list = [
        {
            id: 1,
            imgPath: 'https://www.cardiosmart.org/images/default-source/news-article-images/70545718.tmb-dtl-news-a.jpg?sfvrsn=b5c370e0_2',
            name: 'Cow Milk',
            brand: 'Chitale',
            details: '500 ml Pouch',
            mrp: 25
        },
        {
            id: 2,
            imgPath: 'https://www.bigbasket.com/media/uploads/p/xxl/40195005_2-popular-brown-bread.jpg',
            name: 'Brown Bread',
            brand: 'Fresho',
            details: '200 g',
            mrp: 27
        },
        {
            id: 3,
            imgPath: 'https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-serial-sipper-watter-bottle-28150750314579.jpg?v=1619156235',
            name: 'Water',
            brand: 'Bislari',
            details: '1 ltr',
            mrp: 20
        }
    ];

    const [fullProdData, setFullProdData] = React.useState({
        id: 0,
        name: '',
        brand: '',
        details: '',
        mrp: 0
    })

    const [weekDay, setWeekDay] = useState({
        Mo: false,
        Tu: false,
        We: false,
        Th: false,
        Fr: false,
        Sa: false,
        Su: false
    })

    const handleFormData = (event) => {
        setFullProdData({
            ...fullProdData,
            ...product_list.find(x => x.name === event.target.value)
        })

        setErrors({
            ...errors,
            errorMsg: ''
        })
    }

    const handleQuantity = (param) => {
        if (param === 'add') {
            setQuantity(quantity + 1)
        } else {
            quantity > 0 ? setQuantity(quantity - 1) : null;
        }

        setErrors({
            ...errors,
            errorMsg: ''
        })
    }

    const handleCheckBox = (weekName, checkStatus) => {
        // console.log(`${weekName} ${checkStatus}`)
        setWeekDay({
            ...weekDay,
            [weekName]: !checkStatus,
        })

        setErrors({
            ...errors,
            errorMsg: ''
        })
    }

    const checklist = Object.entries(weekDay).map(([key, value]) => {
        return (
            <Checkbox key={key} weekName={`${key}`} checked={value} handleClick={handleCheckBox} />
        );
    })

    const alreadyInList = state.length > 0 ? state.some((x) => x.productDet.id === fullProdData.id) : false;

    const isDaySelected = Object.entries(weekDay).map(([key, value]) => {
        if (value === true) {
            return true
        } else {
            return false
        }
    }).some(x => x === true);

    const handleStartSubscription = () => {
        if (fullProdData.name === '') {
            setErrors({
                ...errors,
                errorMsg: 'Please Select Product'
            })
        } else if (quantity === 0) {
            setErrors({
                ...errors,
                errorMsg: 'Please select quantity'
            })
        }
        else if (isDaySelected === false) {
            setErrors({
                ...errors,
                errorMsg: 'Please select day'
            })
        }
        else {
            if (alreadyInList === false) {
                const finalData = {
                    productDet: { ...fullProdData },
                    quantity,
                    weekDay
                }
                dispatch(addProduct(finalData))
                history.push('/')
            } else {
                setErrors({
                    ...errors,
                    errorMsg: 'You have already subscribed this product.'
                })
            }
        }
    }

    const handleSelectAllDay = () => {
        Object.keys(weekDay).forEach(key => {
            setWeekDay({ ...weekDay, ...weekDay[key]= true })
        });
        setWeekDay({...weekDay,Su:true});
    }

    return (
        <>
            {/* {console.log(fullProdData)} */}
            <div className="product_container">
                <div className="product">
                    <div className="breadcrumb">
                        <Breadcrumb />
                    </div>
                    <b>Product</b>
                    <select name="name" value={fullProdData.name} onChange={(e) => handleFormData(e)} style={{ padding: '5px' }}>
                        <option value='' disabled>-Select Product-</option>
                        {
                            product_list.map((i, j) => {
                                return <option key={i.id} value={i.name}>{i.name}</option>
                            })
                        }
                    </select>

                    <b>Quantity</b>
                    <div className="btngrp">
                        <button className="qty" onClick={(e) => handleQuantity('sub')}>-</button>
                        <p>{quantity}</p>
                        <button className="qty" onClick={(e) => handleQuantity('add')}>+</button>
                    </div>
                    <div>
                        <b>Schedule</b> <button className="selectAllDay" onClick={(e) => handleSelectAllDay()}><u>Select All Day</u></button>
                    </div>
                    <div className="weekday">
                        {
                            checklist
                        }
                    </div>

                    <button className="btn-sup" onClick={(e) => handleStartSubscription()}>Start Subscription</button>
                    <div style={{ color: 'red', marginTop: '10px' }}>
                        <b>{errors.errorMsg}</b>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product;