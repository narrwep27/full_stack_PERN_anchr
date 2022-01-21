import React from 'react';
import { IconBase } from 'react-icons/lib';
import {
	SiLinkedin,
	SiGithub,
	SiPostgresql,
	SiExpress,
	SiCss3,
	SiAdobephotoshop,
	SiHtml5,
	SiReact,
	SiJavascript,
	SiNodedotjs,
	SiNodemon,
	SiSequelize,
} from 'react-icons/si';

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';

export default function About () {
	return (
		<div className='About'>
			<div className='about-headers'>
				<img
					src='https://i.imgur.com/qpGdHlK.png'
					alt='the team'
					className='about-header-image'
				/>
				<br />
			</div>

			<div className='about-team-div'>
				<img
					src='https://media-exp1.licdn.com/dms/image/C4E03AQFCGOerXuChtw/profile-displayphoto-shrink_800_800/0/1630710978360?e=1647475200&v=beta&t=W4EZUap5tQPt0TRD9LH-fZ-Riu0hhRnfcFacnXKV8iQ'
					className='about-team-img'
					alt=""
				/>

				<div className='about-team-details'>
					<h2>
						<b>Narrwe Park</b> | Full Stack Developer
					</h2>
					<h3>Back-End Guru & Git Master</h3>{' '}
					<div className='icons'>
						<IconContext.Provider value={{ style: { margin: '10px' } }}>
							<a
								href='https://www.linkedin.com/in/narrwe-park/'
								alt='Narrwe Park LinkedIn'
								target='_blank'>
								<SiLinkedin size={30} />
							</a>
							<a
								href='https://github.com/narrwep27'
								alt='Narrwe Park GitHub'
								target='_blank'>
								<SiGithub size={30} />
							</a>
							<SiJavascript size={30} />
							<SiPostgresql size={30} /> <SiExpress size={30} />
							<SiNodedotjs size={30} /> <SiNodemon size={30} />{' '}
							<SiSequelize size={30} />
							<SiReact size={30} />
						</IconContext.Provider>
					</div>
					<div className='about-team-description'>
						Narrwe transitioned into software engineering from a career as a middle-school science teacher. He enjoys the logic and deduction behind coding languages and approaches software projects as puzzles to piece together. On his free time, he enjoys reading books about his always-changing interests, badly cooking new recipes, and keeping in shape.
					</div>
				</div>

				<div className='about-team-div'></div>
				<img
					src='https://avatars.githubusercontent.com/u/49847428?v=4'
					className='about-team-img'
				/>

				<div className='about-team-details'>
					<h2>
						<b>Dom DeLorenzo</b> | Full Stack Developer
					</h2>
					<h3>Back-End Master</h3>
					<IconContext.Provider value={{ style: { margin: '10px' } }}>
						<a
							href='https://www.linkedin.com/in/dominick-delorenzo-breed/'
							alt='Dom DeLorenzo LinkedIn'
							target='_blank'>
							<SiLinkedin size={30} margin={10} />
						</a>
						<a
							href='https://github.com/domdelorenzo'
							alt='Dom DeLorenzo GitHub'
							target='_blank'>
							<SiGithub size={30} />
						</a>
						<SiJavascript size={30} />
						<SiPostgresql size={30} /> <SiExpress size={30} />
						<SiNodedotjs size={30} /> <SiNodemon size={30} />{' '}
						<SiSequelize size={30} />
						<SiReact size={30} />
					</IconContext.Provider>
					<div className='about-team-description'>
						Dominick is software engineer with a background in project  management in the HRIS industry. He is driven deliver and support products through collaboration, accountability, and adaptability. When he isn't coding, you might find him hammock camping in a national forest, working on his pie crust recipe, or renewing his overdue library books.
					</div>
				</div>
			</div>

			<div className='about-team-div'>
				<img
					src='https://ca.slack-edge.com/T0351JZQ0-U02KM3G00HL-588a8e42fe94-512'
					className='about-team-img'
				/>

				<div className='about-team-details'>
					<h2>
						<b>Pablo Yocupicio</b> | Full Stack Developer
					</h2>
					<h3>Front-End Specialist</h3>
					<IconContext.Provider value={{ style: { margin: '10px' } }}>
						<a
							href='https://www.linkedin.com/in/pabloey/'
							alt='Pablo Yocupicio LinkedIn'
							target='_blank'>
							<SiLinkedin size={30} margin={10} />
						</a>
						<a
							href='https://github.com/Pabloey'
							alt='Pablo Yocupicio GitHub'
							target='_blank'>
							<SiGithub size={30} />
						</a>
						<SiHtml5 size={30} />
						<SiCss3 size={30} />
						<SiJavascript size={30} />
						<SiReact size={30} />
						<SiNodedotjs size={30} /> <SiNodemon size={30} />
						<SiSequelize size={30} />
					</IconContext.Provider>
					<div className='about-team-description'>
						Pablo is from Tucson, Arizona. Turned Software Developer from Construction Inspector. Tend to focus more on front-end development, but still proficient with back-end development. Dream is to land a software development position for a smaller team. Favorite thing when not coding is to play video games.
					</div>
				</div>
			</div>

			<div className='about-team-div'>
				<img
					src='https://media-exp1.licdn.com/dms/image/C4D03AQGTizQ-DzBoUA/profile-displayphoto-shrink_800_800/0/1638998388995?e=1648080000&v=beta&t=yGbrQCQbzqtmDusUY7meqiP9XdmxlT5iRjqic7Kk8us'
					className='about-team-img'
				/>

				<div className='about-team-details'>
					<h2>
						<b>Jerome Wy</b> | Full Stack Developer
					</h2>
					<h3>Front-End Styler</h3>
					<IconContext.Provider value={{ style: { margin: '10px' } }}>
						<a
							href='https://www.linkedin.com/in/jerome-wy/'
							alt='Jerome Wy LinkedIn'
							target='_blank'>
							<SiLinkedin size={30} margin={10} />
						</a>
						<a
							href='https://github.com/jerome-wy'
							alt='Jerome Wy GitHub'
							target='_blank'>
							<SiGithub size={30} />
						</a>
						<SiHtml5 size={30} />
						<SiCss3 size={30} />
						<SiJavascript size={30} />
						<SiReact size={30} />
						<SiAdobephotoshop size={30} />
						<SiNodedotjs size={30} /> <SiNodemon size={30} />
					</IconContext.Provider>
					<div className='about-team-description'>
						Jerome is a Healthcare Professional & Project Manager turned Software Engineer. Jerome is loves web design and web development so he decided it was time to pursue his passion as a Full Stack Developer. Whenever he has some spare time when he isn't studying/writing code or being a dad, you'll still find him at his desk playing League of Legends.
					</div>
				</div>
			</div>
		</div>
	);
}
