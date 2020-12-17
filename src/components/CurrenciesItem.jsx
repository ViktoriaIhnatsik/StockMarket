import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Hoover = styled.div`
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


export default function CurrenciesItem({ currencies }) {
  return (
    <Hoover className="col-md-2 shadow p-3 m-3">
      <Link className="btn btn-block" to={`/currencies/${currencies.ticker}`}>
        <Color>{currencies.name}</Color> 
      </Link>
    </Hoover>
  );
}
