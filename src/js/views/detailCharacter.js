import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


const DetailCharacter = ({name}) =>{
  const params = useParams()
  const {actions,store} = useContext(Context)
  const [character, setCharacter] = useState(null)
  useEffect(()=> {
actions.getCharacterDetail(params.theid)
  },[]) 
useEffect(() =>{
 setCharacter(store.selectedCharacter)
},[store.selectedCharacter])


    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{character.result?.properties?.name}</h5>
          <p>{character.result?.properties?.height}</p>
          <p>{character.result?.properties?.skin_color}</p>
          <p>{character.result?.properties?.mass}</p>
          <p>{character.result?.properties?.hair_color}</p>
          <p>{character.result?.properties?.eye_color}</p>
          <p>{character.result?.properties?.birth_year}</p>
          <p>{character.result?.properties?.created}</p>
          <p>{character.result?.properties?.gender}</p>
          <p>{character.result?.properties?.edited}</p>
          <p>{character.result?.properties?.name}</p>
          <p>{character.result?.properties?.homeworld}</p>
          <p>{character.result?.properties?.url}</p>
          <button className="btn btn-primary">go back</button>
        </div>
      </div>
    )
}

export default DetailCharacter
