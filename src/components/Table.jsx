import React from "react";
import "../styles/Table.css";

const Table = ({ vehicleName, heads, values }) => {
    return(
        <div className="Table">
            <h3 style={{marginBottom: 20}}>Vehicle Name<br /><span style={{fontWeight: "400"}}>{vehicleName}</span></h3>
            <table>
                <thead>
                    <tr>
                        {heads?.map((head, index) => <th key={index}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {values?.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.planet.name}</td>
                                <td>{value.planet.population}</td>
                                <td>{value.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;