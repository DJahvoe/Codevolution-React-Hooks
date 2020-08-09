import React, { Component } from 'react';

class ClassCounterTwo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	incrementCount = () => {
		this.setState((prevState, props) => {
			return { count: prevState.count + 1 };
		});
	};

	decrementCount = () => {
		this.setState((prevState, props) => ({
			count: prevState.count - 1,
		}));
	};

	incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			this.incrementCount();
		}
	};

	render() {
		return (
			<div>
				Count: {this.state.count}
				<button onClick={this.incrementCount}>Increment</button>
				<button onClick={this.decrementCount}>Decrement</button>
				<button onClick={this.incrementFive}>Increment 5</button>
			</div>
		);
	}
}

export default ClassCounterTwo;
