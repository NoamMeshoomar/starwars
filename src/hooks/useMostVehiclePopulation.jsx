import { useEffect, useState } from "react";
import BASE_URL from "../helpers/BASE_URL";

const useMostVehiclePopulation = () => {
    const [vehicle, setVehicle] = useState(null);

    const fetchData = async () => {
        const vehicles = [];
        // Get vehicles from all pages
        const {count, results} = await (await fetch(BASE_URL + "/vehicles")).json();
        vehicles.push(...results);
        for(let i = 2; i < Math.ceil(count / 10) + 1; i++) {
            const {results} = await (await fetch(BASE_URL + `/vehicles/?page=${i}`)).json();
            vehicles.push(...results);
        }
        // Get pilots information and put it in vehicles array instead of the link
        for(let i = 0; i < vehicles.length; i++) {
            vehicles[i].totalPopulation = 0;
            const pilots = vehicles[i].pilots;
            for(let j = 0; j < pilots.length; j++) {
                const pilot = pilots[j];
                const {name, homeworld} = await (await fetch(pilot)).json();
                const planet = await (await fetch(homeworld)).json();
                vehicles[i].totalPopulation += planet.population === "unknown" ? 0 : +planet.population;
                vehicles[i].pilots[j] = {
                    name, 
                    planet: {
                        name: planet.name,
                        population: planet.population === "unknown" ? 0 : +planet.population
                    }
                }
            }
        }
        // Get the one with highest sum of population
        return vehicles.sort((a, b) => a.totalPopulation - b.totalPopulation)[vehicles.length - 1];
    }

    useEffect(() => {
        fetchData().then(res => setVehicle(res));
    }, []);

    return { vehicle };
}

export default useMostVehiclePopulation;