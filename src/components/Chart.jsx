import React, { useEffect, useState } from "react";
import "../styles/Chart.css";

const Chart = ({ planets }) => {
    const [maxNum, setMaxNum] = useState(null);

    useEffect(() => {
        setMaxNum(Math.max(...planets.map(planet => +planet.population)));
    }, [planets]);

    return(
        <div className="Chart">
            { planets.map((planet, index) => {
                return(
                    <div key={index} className="planet">
                        <p>{planet.population}</p>
                        <div style={{width: 100, height: (planet.population / maxNum) * 450 + 50, backgroundColor: "black"}}></div>
                        <p>{planet.name}</p>
                    </div>
                )
            }) }
        </div>
    )
}

export default Chart;