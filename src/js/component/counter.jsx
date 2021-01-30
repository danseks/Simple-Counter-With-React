import React, { Fragment } from "react";
import PropTypes, { number } from "prop-types";

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
			increment: 1000 * props.increment
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.getNumber() == 9
				? this.setState({ number: 0 })
				: this.setState({ number: this.getNumber() + 1 });
		}, this.getIncrement());
	}

	getNumber() {
		return this.state.number;
	}

	getIncrement() {
		return this.state.increment;
	}

	render() {
		return <div className="allNumbers">{this.state.number}</div>;
	}
}
Counter.propTypes = {
	increment: PropTypes.number
};
