import React from "react";
import { useNavigate } from "react-router";


const Card =({name, type, id}) => {
const navigate = useNavigate()
    return(
    <div className="card" style={{width: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <button className="btn btn-primary" onClick={()=>navigate(`/detail-${type}/${id}`)}>view more</button>
        </div>
      </div>
      )
}

export default Card