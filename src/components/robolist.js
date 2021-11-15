import React from 'react';

const RoboList = props => {
    return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
        <div className="row">
        {
          props.filterData.includes(true) ?
          props.robots.map((robot,index) => 

            (props.filterData[index]) &&
            <div className="col-md-4" data-aid={index} key={robot.id}>
              <div className="card mb-4 box-shadow">
                <img className="card-img-top" src={ `https://robohash.org/${robot.id}` } alt={robot.name} />
                <div className="card-body">
                  <h5 className="card-title">{robot.name}</h5>
                  <p className="card-text">{robot.email}</p>                 
                </div>
              </div>
            </div>           
            )
            : 
            <div className="col-md-12">
                  <h5 className="card-title text-center">No robot found</h5>
            </div>
        }
        </div>
        </div>
      </div>
    </main>
    );
}

export default RoboList;
