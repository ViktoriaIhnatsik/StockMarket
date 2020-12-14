import React, { useState, useEffect } from 'react';


export default function MarketsCompaniesDetailPage(props) {
    const [companiesItem, setCompaniesItem] = useState(null);
    console.log(props)
    useEffect(() => {
        const id = props.match.params.id
        const url = `https://market-data-collector.firebaseio.com/market-collector/markets/companies/${id}.json`

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>

        </div>
    )
}
