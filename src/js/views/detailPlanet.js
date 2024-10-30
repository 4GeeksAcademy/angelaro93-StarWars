import React from "react";

const DetailPlanet = ({name}) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>{diameter}</p>
          <p>{rotation_period}</p>
          <p>{orbital_period}</p>
          <p>{population}</p>
          <p>{climate}</p>
          <p>{terrain}</p>
          <p>{surface_water}</p>
          <p>{created}</p>
          <p>{edited}</p>
          <p>{url}</p>
          <button className="btn btn-primary">go back</button>
        </div>
      </div>
    )
}

export default DetailPlanet

