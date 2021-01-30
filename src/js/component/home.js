import React, { Fragment } from "react";
import { Counter } from "./counter.jsx";
import PropTypes from "prop-types";
import backintime from "../../img/backintime.png";

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
					src="backintime.png"
					alt="Clock"
					width="250"
					height="260"
				/>
			</div>
		</Fragment>
	);
}
