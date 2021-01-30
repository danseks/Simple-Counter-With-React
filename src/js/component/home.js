import React, { Fragment } from "react";
import { Counter } from "./counter.jsx";
import PropTypes from "prop-types";
import passageoftime from "../../img/passageoftime.png";
import { Buttons } from "./buttons.jsx";

//create your first component
export function Home() {
	return (
		<Fragment>
			<div className="container">
				<Counter increment={1} />
				<Counter increment={10} />
				<Counter increment={100} />
				<Counter increment={1000} />
				<Counter increment={10000} />
				<Counter increment={100000} />
				<img
					className="clock"
					src="passageoftime.png"
					alt="Clock"
					width="250"
					height="250"
				/>
			</div>
			{/* <div className="App">
				<Buttons />
			</div> */}
		</Fragment>
	);
}
