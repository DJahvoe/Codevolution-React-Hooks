import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
	const [count, setCount] = useState(0);

	// Declare function inside of useEffect
	function doSomething() {
		console.log();
	}

	// Interval Counter 1
	// const tick = () => {
	// 	setCount(count + 1);
	// };

	// useEffect(() => {
	// 	const interval = setInterval(tick, 1000);
	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// }, [count]);

	// Interval Counter 2
	const tick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	useEffect(() => {
		// function doSomething() {
		//     console.log();
		// }
		// doSomething()
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return <div>{count}</div>;
}

export default IntervalHookCounter;
