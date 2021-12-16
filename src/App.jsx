import React from "react";
import Table from "./components/Table";
import Chart from "./components/Chart";
import useMostVehiclePopulation from "./hooks/useMostVehiclePopulation";
import usePlanets from "./hooks/usePlanets";
import './App.css';

function App() {
    const { vehicle } = useMostVehiclePopulation();
    const { planets } = usePlanets();

    return (
        <div className="App">
            <Table vehicleName={vehicle?.name} heads={["Planet", "Population", "Pilot"]} values={vehicle?.pilots} />
            <Chart planets={planets} />
        </div>
    );
}

export default App;