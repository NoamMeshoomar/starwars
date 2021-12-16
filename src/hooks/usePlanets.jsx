import { useEffect, useState } from "react";
import BASE_URL from "../helpers/BASE_URL";

const usePlanets = () => {
    const [planets, setPlanets] = useState([]);

    const fetchPlanets = async () => {
        const neededPlanets = ["Tatooine", "Alderaan", "Naboo", "Bespin", "Endor"];
        const {results} = await (await fetch(BASE_URL + "/planets")).json();
        const result = [];
        for(let i = 0; i < results.length; i++)
            for(let j = 0; j < neededPlanets.length; j++)
                if(results[i].name === neededPlanets[j])
                    result.push({
                        name: results[i].name,
                        population: results[i].population
                    });
        return result;
    }

    useEffect(() => {
        fetchPlanets().then(res => setPlanets(res));
    }, []);

    return { planets };
}

export default usePlanets;