import axios from 'axios';
import React from 'react';
import { PieChart, Pie } from 'recharts';

export default function Summary() {
	const getAllSessions = async () => {
		const sessions = await axios.get(`${BASE_URL}/`);
		console.log(sessions);
	};

	const getAllTags = async () => {
		const tags = await axios.get(`${BASE_URL}/`);
		console.log(tags);
	};

	return (
		<div className='Summary'>
			<PieChart width={700} height={700}>
				<Pie data={data} dataKey='time' outerRadius={250} fill='green' />
			</PieChart>
			testing
		</div>
	);
}
