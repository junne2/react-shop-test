import React, { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import Type from './Type';

function OrderPage({setStep}) {
    const [orderDatas] = useContext(OrderContext);

  return (
    <div>
        <h1>🧳 Travel Products </h1>
        <div className='product'>
            <p>가고 싶은 여행지의 수량을 입력해 주세요.</p>
            <Type orderType="products" />
        </div>
        <div className='option' style={{display: "flax", marginTop:30 }}>
            <div style={{width:"50%"}}>
                <Type orderType= "options" />
            </div>
            <div>
                <h2>Total Price: {orderDatas.totals.total}</h2>
                <button onClick={() => setStep(1)}>주문하기</button>
            </div>
        </div>
    </div>
  )
}

export default OrderPage