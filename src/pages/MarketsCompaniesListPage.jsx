import React, { useState, useEffect } from 'react'
import MarketsCompaniesItem from '../components/MarketsCompaniesItem'

export default function MarketsCompaniesListPage(props) {
    const [marketsCompaniesList, setMarketsCompaniesList] = useState(null)

    useEffect(() => {
        const id = props.match.params.companies
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setMarketsCompaniesList(data))

    }, [])


    return (
        <div>
            <h2>Companies List Page</h2>

            {!marketsCompaniesList && <p>Loading</p>}
            {marketsCompaniesList && Object.entries(marketsCompaniesList).map(marketsCompaniesItem => {
                const key = marketsCompaniesItem[0]
                const value = marketsCompaniesItem[1]
                return (
                    <MarketsCompaniesItem key={key} marketsCompanies={value} />
                )
            })}
        </div>
    )
}
