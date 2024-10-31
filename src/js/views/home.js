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
      {/* Contenedor principal con fondo */}
      <div 
        style={{
          backgroundImage: `url('https://data.1freewallpapers.com/download/starry-sky-stars-black-glitter-3840x2160.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
        }}
      >
        {/* Cards de characters */}
        <div className="d-flex flex-wrap" style={{ gap: '20px', marginBottom: '40px' }}>
          {store.characters?.map((character) => (
            <div className="col-6 col-md-4 col-lg-2" key={character.uid} style={{ margin: '10px' }}> {/* Margen entre cada tarjeta */}
              <Card 
                name={character.name} 
                type="characters" 
                id={character.uid} 
                imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
  
        <div className="d-flex flex-wrap" style={{ gap: '20px', marginBottom: '40px' }}>
          {store.vehicles?.map((vehicle) => (
            <div className="col-6 col-md-4 col-lg-2" key={vehicle.uid} style={{ margin: '10px' }}> 
              <Card 
                name={vehicle.name} 
                type="vehicles" 
                id={vehicle.uid} 
                imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
  
        <div className="d-flex flex-wrap" style={{ gap: '20px' }}>
          {store.planets?.map((planet) => (
            <div className="col-6 col-md-4 col-lg-2" key={planet.uid} style={{ margin: '10px' }}> 
              <Card 
                name={planet.name} 
                type="planets" 
                id={planet.uid} 
                imageStyle={{ width: '100%', height: '150px', objectFit: 'cover' }} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}  