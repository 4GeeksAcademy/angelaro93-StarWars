const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: []
        },
        actions: {
            // Ejemplo de función que llama a otra función dentro de actions
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            // Carga de datos desde una API
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
        
            getCharacter: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(response => response.json())
                    .then(data => setStore({ characters: data.results }))
                    .catch(error => console.error("Error fetching characters:", error));
            },
            getVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles")
                    .then(response => response.json())
                    .then(data => setStore({ vehicles: data.results }))
                    .catch(error => console.error("Error fetching vehicles:", error));
            },
            getPlanets: () => {
                fetch("https://www.swapi.tech/api/planets")
                    .then(response => response.json())
                    .then(data => setStore({ planets: data.results }))
                    .catch(error => console.error("Error fetching planets:", error));
            },

            getCharacterDetail: (id) => {
                fetch(`https://www.swapi.tech/api/people/${id}/`)
                    .then(response => response.json())
                    .then(data => {return data})
                    .catch(error => console.error("Error fetching planets:", error));
            },


        }
    };
};

export default getState;

