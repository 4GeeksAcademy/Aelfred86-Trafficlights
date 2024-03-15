import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("")
	const [color1, setColor1] = useState(false)
	const [color2, setColor2] = useState(false)
	return (
		<div className="text-center container">
			<h1 className="text-center mt-5">Traffic Light</h1>

			<div className="d-flex flex-column justify-content-center align-items-center">
				<div className="d-flex bg-dark" style={{ width: "20px", height: "25vh" }}>


				</div>

				<div className="d-flex flex-column bg-dark p-5 justify-content-center align-items-center" style={{ maxWidth: "150px" }}>

					<div onMouseOver={() => setColor("red")} className="btn btn-danger p-5" style={{
						width: "50px", height: "50px",
						boxShadow: `${color == "red" ? "0px 0px 100px 50px rgb(255, 34, 0)" : ""}`
					}} onMouseLeave={() => setColor("")}>

					</div>

					<div onMouseOver={() => setColor1(!color1)} className="btn p-5 mt-3 btn-warning" style={{
						width: "50px", height: "50px",
						boxShadow: `${color1 ? "0px 0px 100px 50px yellow" : ""}`
					}} onMouseLeave={() => setColor1(false)}>

					</div>

					<div onMouseOver={() => setColor2(!color1)} className="btn p-5 mt-3 btn-success" style={{
						width: "50px", height: "50px",
						boxShadow: `${color2 ? "0px 0px 100px 50px green" : ""}`
					}} onMouseLeave={() => setColor2(false)}>

					</div>

				</div>


			</div>

		</div>
	);
};

export default Home;
