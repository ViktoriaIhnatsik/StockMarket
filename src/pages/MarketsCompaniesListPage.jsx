import React, { useState, useEffect } from 'react'
import MarketsCompaniesItem from '../components/MarketsCompaniesItem'

export default function MarketsCompaniesListPage(props) {
    const [marketsCompaniesList, setMarketsCompaniesList] = useState(null)

    const id = props.match.params.companies
    useEffect(() => {
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setMarketsCompaniesList(data))

    }, [])


    return (
        <div className="bg-light">
        <div className="container pt-5 pb-5">
        <h1 classname="">{id}</h1>  

        {!marketsCompaniesList && <p>Loading</p>}

        <div className="row">
                {marketsCompaniesList && Object.entries(marketsCompaniesList).map(marketsCompaniesItem => {
                const key = marketsCompaniesItem[0]
                const value = marketsCompaniesItem[1]
                return (
                    <MarketsCompaniesItem key={key} marketsCompanies={value} />
                )
            })}
         </div>  

        </div>
        </div>   
    )
}
