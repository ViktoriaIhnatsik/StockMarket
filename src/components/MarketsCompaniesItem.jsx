import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Hoover = styled.div`
  background-color: #ffffff;

  &:hover {
    background-color: #03c181;
    p {
      color: white;
      font-weight: bold;
    }
  }
`;
const Color = styled.p`
  font-size: 16px;

  &:hover {
    color: white;
    font-weight: bold;
  }
`;

export default function MarketsCompaniesItem({ marketsCompanies }) {
  return (
    <Hoover className="col-md-2 shadow rounded p-2 m-3">
      <Link
        className="btn  btn-block"
        to={`/markets/${marketsCompanies.market}/${marketsCompanies.ticker}`}>
        <Color>{marketsCompanies.name}</Color>
      </Link>
    </Hoover>
  )
}
