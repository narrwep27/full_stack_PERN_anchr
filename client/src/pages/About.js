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

export default function About() {
	return (
		<div className='About'>
			<div className='about-headers'>
				<img
					src='https://i.imgur.com/W9uzQa3.png'
					alt='the team'
					className='about-header-image'
				/>
				<br />
			</div>

			<div className='about-team-div'>
				<img
					src='https://media-exp1.licdn.com/dms/image/C4E03AQFCGOerXuChtw/profile-displayphoto-shrink_800_800/0/1630710978360?e=1647475200&v=beta&t=W4EZUap5tQPt0TRD9LH-fZ-Riu0hhRnfcFacnXKV8iQ'
					className='about-team-img'
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
}
