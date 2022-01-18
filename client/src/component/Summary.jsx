import React from 'react';
import { PieChart, Pie } from 'recharts';

export default function Summary() {
	const summaryArr = [
		{ session: 'Running' },
		{ session: 'Studying' },
		{ session: 'Walking' },
		{ session: 'Gaming' },
	];

	const summaryHistArr = [
		{ session: 'Running', time: '44:15' },
		{ session: 'Walking', time: '1:15:15' },
		{ session: 'Studying', time: '15:10' },
		{ session: 'Reading', time: '45:00' },
	];

	const data = [
		{ name: 'Testing 1', time: 600 },
		{ name: 'Testing 2', time: 700 },
		{ name: 'Testing 3', time: 800 },
		{ name: 'Testing 4', time: 900 },
	];

	return (
		<div className='Summary'>
			<PieChart width={700} height={700}>
				<Pie data={data} dataKey='time' outerRadius={250} fill='green' />
			</PieChart>
			testing
		</div>
	);
}
