import React, { useEffect, useState } from 'react';
import { TotalAmount } from '../services/Session';
import { PieChart, Pie, Tooltip, Cell, LabelList } from 'recharts';
import { randomColor } from 'randomcolor';

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

	const data = allTime.map((e, i) => {
		return {
			description: e.description,
			total_time: Math.round((parseInt(e.total_time) / sum) * 10000) / 100,
			fill: randomColor(),
		};
	});

	const totalTime = timeconversion(sum);

	return (
		<div className='Summary'>
			<div className='summary-each-item'>
				<div className='anchor-logo-image'>
					<img
						src='https://i.imgur.com/VSgadZa.png'
						alt='anchr.'
						width='400px'
					/>
					<h1>Summary Results</h1>
				</div>

				{allTime.map((e, i) => (
					<div key={i}>
						<div className='summary-items-container'>
							<div className='summary-items-description'>{i} - {e.description}</div>
							<div className='summary-items-time'>
								{timeconversion(e.total_time)}
							</div>
						</div>
					</div>
				))}
				<div className='summary-total-timespent-container'>
					<div className='summary-total-timespent-text'>Total time</div>
					<div className='summary-total-timespent'>{totalTime}</div>
				</div>
			</div>

			<div className='piechart-div'>
				<PieChart width={700} height={700}>
					<Pie
						paddingAngle={5}
						innerRadius={150}
						outerRadius={250}
						nameKey='end'
						dataKey='total_time'
						isAnimationActive={true}
						data={data}
						label>
						<LabelList
							dataKey='description'
							position='outsideEnd'
							fill='#000000'
							stroke='#000000'
						/>
					</Pie>
					<Tooltip label='Total Time' />
				</PieChart>
			</div>
		</div>
	);
}
