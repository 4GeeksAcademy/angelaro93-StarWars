import React from "react";

const DetailVehicles = ({name}) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{model}</p>
          <p>{vehicle_class}</p>
          <p>{manufacturer}</p>
          <p>{cost_in_credits}</p>
          <p>{length}</p>
          <p>{crew}</p>
          <p>{passengers}</p>
          <p>{max_atmosphering_speed}</p>
          <p>{cargo_capacity}</p>
          <p>{url}</p>
          <button className="btn btn-primary">go back</button>
        </div>
      </div>
    )
}

export default DetailVehicles

