import React from "react";

export const symbol = ({match}) => (
  <li className="individual-stock-view">
    {match.params.symbol}
  </li>
);