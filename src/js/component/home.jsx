import React from "react";
import { useState } from "react";

const Home = () => {
	const [selected, setSelected] = useState("");
	const colors = ["red", "orange", "green"];

	const handler = (color) => {
		setSelected(color);
	};

	const circlesHTML = colors.map((e) => {
		let prendido = "off";

		if (e == selected) {
			prendido = "on";
		}

		return (
			<div className="d-flex justify-content-center">
				<div className="col-2 rounded p-3 text-light bg-dark align-items-center justify-content-center">
					<div className="d-flex justify-content-center">
						<button
							className={`${e}-circle-${prendido}`}
							onClick={() => {
								handler(e);
							}}></button>
					</div>
				</div>
			</div>
		);
	});
	return (
		<div>
			<div className="d-flex align-items-stretch justify-content-center vh-10">
				<div className="col-sm-1 pt-5 text-light bg-dark"></div>
			</div>
			{circlesHTML}
		</div>
	);
};

export default Home;
