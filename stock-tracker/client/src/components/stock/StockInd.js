import React from "react";

export const stock = ({match}) => (
  <li className="individual-stock-view">
    {match.params.stock}
  </li>
);