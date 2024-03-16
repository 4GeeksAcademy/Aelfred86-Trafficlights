import React, { useState, useEffect } from "react";

const Home = () => {
    const [color, setColor] = useState("red");
    const [looping, setLooping] = useState(false);

    useEffect(() => {
        let intervalId;

        if (looping) {
            intervalId = setInterval(() => {
                setColor(prevColor => {
                    if (prevColor === "red") {
                        return "yellow";
                    } else if (prevColor === "yellow") {
                        return "green";
                    } else if (prevColor === "green") {
                        return "red";
                    }
                });
            }, 1000);

            // Limpiar el intervalo al desmontar el componente o cuando looping cambie a false
            return () => clearInterval(intervalId);
        }
    }, [looping]);

    return (
        <div className="text-center container">
            <h1 className="text-center mt-5">Traffic Lights</h1>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="d-flex bg-dark" style={{ width: "20px", height: "25vh" }}></div>
                <div className="d-flex flex-column bg-dark p-5 justify-content-center align-items-center" style={{ maxWidth: "150px" }}>
                    <div name="red" onClick={() => setColor("red")} className="btn btn-danger p-5 rounded-circle" style={{ boxShadow: `${color === "red" ? "0px 0px 100px 50px rgb(255, 34, 0)" : ""}` }}></div>
                    <div name="yellow" onClick={() => setColor("yellow")} className="btn p-5 mt-3 btn-warning rounded-circle" style={{ boxShadow: `${color === "yellow" ? "0px 0px 100px 50px yellow" : ""}` }}></div>
                    <div name="green" onClick={() => setColor("green")} className="btn p-5 mt-3 btn-success rounded-circle" style={{ boxShadow: `${color === "green" ? "0px 0px 100px 50px green" : ""}` }}></div>
                </div>
                <button className="btn btn-primary" onClick={() => setLooping(!looping)}>Trafficlights on</button>
            </div>
        </div>
    );
};

export default Home;
