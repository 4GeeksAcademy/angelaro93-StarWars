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

  useEffect(() => {
    const favoritesFromStorage = localStorage.getItem('favorites');
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('https://data.1freewallpapers.com/download/starry-sky-stars-black-glitter-3840x2160.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
      }}
    >
      <div className="container">
        <h2 className="text-light mb-4">Characters</h2>
        <div className="row">
          {store.characters?.map((character) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={character.uid}>
              <Card 
                name={character.name} 
                type="characters" 
                id={character.uid} 
                imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                className="card-fixed" // Aplica la clase CSS para la tarjeta
              />
               <div>
               <button type="button" className="btn btn-primary" onClick={()=> actions.addToFavorites(character.name)}>Like</button>
                {character.name}</div>
            </div>
           
          ))}
        </div>

        <h2 className="text-light mb-4">Vehicles</h2>
        <div className="row">
          {store.vehicles?.map((vehicle) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={vehicle.uid}>
              <Card 
                name={vehicle.name} 
                type="vehicles" 
                id={vehicle.uid} 
                imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                className="card-fixed" // Aplica la clase CSS para la tarjeta
              />
            </div>
          ))}
        </div>

        <h2 className="text-light mb-4">Planets</h2>
        <div className="row">
          {store.planets?.map((planet) => (
            <div className="col-6 col-md-4 col-lg-3 mb-4" key={planet.uid}>
              <Card 
                name={planet.name} 
                type="planets" 
                id={planet.uid} 
                imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                className="card-fixed" // Aplica la clase CSS para la tarjeta
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
