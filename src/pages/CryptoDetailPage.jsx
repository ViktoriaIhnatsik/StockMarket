import React, { useEffect, useState } from 'react'

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
        <div>
            {!cryptoItem && <p>LOADING</p> }

            <div className="container shadow w-50 mt-5 ">
                {cryptoItem && (
                    <>
                    <h2> {cryptoItem.name}</h2>
                        <p>Price: {cryptoItem.price}</p>

                        <p>Market: {cryptoItem.market}</p>
                        <p>Today: {cryptoItem.today}</p>
                        
                       

                    </>
                    
                    
                ) }

            </div>
            
        </div>
    )
}
