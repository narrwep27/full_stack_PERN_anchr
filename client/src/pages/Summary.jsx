import React, { useEffect, useState } from 'react';
import { TotalAmount } from '../services/Session';
import { PieChart, Pie, Label, LabelList, Tooltip } from 'recharts';

export default function Summary(props) {
	const sessions = JSON.parse(localStorage.getItem('sessions'));
	const id = localStorage.getItem('id');
	const [allTime, setAllTime] = useState([0]);

	const timeArray = [0];

	const sumNumbers = () => {
		sessions.map((e) => {
			return timeArray.push(e.timeSpent);
		});
	};

	sumNumbers();

	useEffect(() => {
		const getTotal = async () => {
			const res = await TotalAmount(id);
			setAllTime(res);
		};
		getTotal();
	}, []);

	const sum = timeArray.reduce((a, r) => a + r);

	const timeconversion = (t) => {
		let minutes = Math.floor(t / 60000);
		let seconds = ((t % 60000) / 1000).toFixed(0);
		return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
	};

	const totalTime = timeconversion(sum);

	const data = [
		{ description: 'coding', Total_Time: 60000 },
		{ description: 'typing', Total_Time: 60000 },
		{ description: 'studying', Total_Time: 1200000 },
		{ description: 'reading', Total_Time: 500000 },
	];

	// I want to use allTime but the value of Total_Time are strings
	// Creating a data array for testing purposes only

	return (
		<div className='Summary'>
			<div className='summary-each-item'>
				<h1>Summary</h1>
				{allTime.map((e, i) => (
					<p key={i}>
						{e.description}: {timeconversion(e.Total_Time)}
					</p>
				))}
				<h3>Total time spent: {totalTime}</h3>
			</div>

			<div className='piechart-div'>
				<PieChart width={500} height={500}>
					<Pie
						nameKey='description'
						dataKey='Total_Time'
						isAnimationActive={true}
						data={data}
						outerRadius={250}
						fill='gray'></Pie>
					<Tooltip label='Total Time' />
				</PieChart>
			</div>
		</div>
	);
}
