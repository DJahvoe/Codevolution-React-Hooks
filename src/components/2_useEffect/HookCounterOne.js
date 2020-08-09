import React, { useState, useEffect } from 'react';

function HookCounterOne() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	// Runs function inside after every render
	// Second parameter of useEffect -> include specific state that will trigger execution of inner function
	useEffect(() => {
		console.log('useEffect - Updating document title');
		document.title = `You clicked ${count} times`;
	}, [count]);

	return (
		<div>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setCount((prevCount) => prevCount + 1)}>
				Click {count} times
			</button>
		</div>
	);
}

export default HookCounterOne;
