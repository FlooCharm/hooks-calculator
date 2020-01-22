import React, { useState, useEffect } from 'react';
import './Keyboard.css';

export default function Keyboard () {
	let [display, setDisplay] = useState(0)
	
	useEffect(() => {
		let savedDisplay = Number(localStorage.getItem('display')) || 0;
		setDisplay(savedDisplay)
	}, [])

	let addToInput = (input) => {
		let newDisplay = display;
		newDisplay = newDisplay * 10 + input * 0.01;

		setDisplay(newDisplay)
		localStorage.setItem('display', newDisplay)
	}

	let deleteFromInput = () => {
		let newDisplay = display;
		newDisplay = Math.floor(newDisplay * 10) / 100;

		setDisplay(newDisplay)
		localStorage.setItem('display', newDisplay)
	}

	let format = (n) => {
		return `${n.toFixed(2)}`
	}

	return (
		<div>
			<div className='display'>{format(display)}</div>
			<div>
				<div>
					<button className='keyboardBtn' onClick={() => addToInput(9)}>9</button>
					<button className='keyboardBtn' onClick={() => addToInput(8)}>8</button>
					<button className='keyboardBtn' onClick={() => addToInput(7)}>7</button>
				</div>
				<div>
					<button className='keyboardBtn' onClick={() => addToInput(6)}>6</button>
					<button className='keyboardBtn' onClick={() => addToInput(5)}>5</button>
					<button className='keyboardBtn' onClick={() => addToInput(4)}>4</button>
				</div>
				<div>
					<button className='keyboardBtn' onClick={() => addToInput(3)}>3</button>
					<button className='keyboardBtn' onClick={() => addToInput(2)}>2</button>
					<button className='keyboardBtn' onClick={() => addToInput(1)}>1</button>
				</div>
				<div>
					<button className='keyboardBtn delBtn' onClick={() => addToInput(0)}>0</button>
					<button className='keyboardBtn' onClick={() => deleteFromInput()}>DEL</button>
				</div>
			</div>
		</div>
	)
}