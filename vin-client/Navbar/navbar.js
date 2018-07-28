import React from 'react';
import { Link } from "react-router-dom";


const navbar = (props) => (
    <div>
      <nav>
        <Link to="/"><button class="active waves-effect waves-light btn">Login</button></Link>
        <Link to="/profile"><button class="active waves-effect waves-light btn">Profile</button></Link>
        <Link to="/search"><button class="active waves-effect waves-light btn">Search</button></Link>
        <Link to="/myStock"><button class="active waves-effect waves-light btn">My Stocks</button></Link>
      </nav>

    </div>
);


export default navbar;
