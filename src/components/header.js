import React from 'react';

const Header = props => {
    return (
    <header>
     <div className="navbar navbar-dark bg-dark box-shadow">
      <div className="container d-flex justify-content-between">
         <a href="" className="navbar-brand d-flex align-items-center">
            <strong className="robo-ttl"> Robo List</strong>
         </a>
         <div className="form-group robo-srch-bx">
            <input type="search" className="form-control" id="srch_robo" placeholder="Search" onChange={props.SearchChange} />
         </div>
      </div>
   </div>
</header>
    );
}

export default Header;
