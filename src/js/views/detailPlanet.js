import React from "react";

const DetailPlanet = ({name}) =>{
    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={name == "Tatooine"?`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4`:`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`} className="card-img-top" alt="..."/>
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

