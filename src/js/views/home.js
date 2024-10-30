import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacter();
    actions.getVehicles();
    actions.getPlanets();
  }, []);

  return (
    <div>
      <div className="d-flex">
      {store.characters?.map((character, index) => (
        <Card name={character.name} type={"characters"} id={character.uid}/>
      ))}
    </div>
    <div className="d-flex">
      {store.vehicles?.map((vehicle, index) => (
         <Card name={vehicle.name} type={"vehicles"} id={vehicle.uid}/>
      ))}
      </div>

      <div className="d-flex">
      {store.planets?.map((planet, index) => (
        <Card name={planet.name} type={"planets"} id={planet.uid}/>
      ))}
      </div>
    </div>
  );
};

