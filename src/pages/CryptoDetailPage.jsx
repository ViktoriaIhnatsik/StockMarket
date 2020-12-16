import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Background = styled.div`
background-color: #F2F9F4;
`

export default function CryptoDetailPage(props) {


    const [cryptoItem, setCryptoItem]= useState(null)


    

    useEffect(()=>{
        const id =props.match.params.id

        const url = `https://market-data-collector.firebaseio.com/market-collector/crypto/usd/${id}.json`

        fetch(url)
        .then(res => res.json())

        .then (data => setCryptoItem(data))
    },[])

    return (
        <div className="container ">
            {!cryptoItem && <p>LOADING</p> }

            <Background className="container shadow rounded w-50  p-5  mt-5">
                {cryptoItem && (
                    <>
                    <h2> {cryptoItem.name}</h2>
                        <p>Price: {cryptoItem.price}</p>
                        <p>Market: {cryptoItem.market}</p>
                        <p>Today: {cryptoItem.today}</p>
                    </>        
                ) }
            </Background>
        </div>
    )
}
