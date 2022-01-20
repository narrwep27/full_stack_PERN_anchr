import React, {useEffect, useState} from "react";
import {GetTagByTagId} from '../services/Tag'

export default function Timer(props) {
  const [currentTag, setCurrentTag]=useState('')
  const handleSession = () => {
    sessionInterrupt()
    props.setSession(true);
  };
  const sessionInterrupt = () => {
    let remainingTime = props.initTime-props.time
    props.setSessionObject({...props.sessionObject,"timeSpent": remainingTime})
    props.setTime(0)
  }

  const getCurrentTag = async () => {
    const result = await GetTagByTagId(props.sessionObject.tagId)
    setCurrentTag(result.description)
    return result
  }
  getCurrentTag()

	return (
		<div className='Timer'>
			<div className='timer-countdown'>
				{currentTag}: <br />
				<span className='time-remaining'>
					{props.hours} : {props.minutes} : {props.seconds}
				</span>
			</div>
			<button onClick={handleSession} className='timer-end-session-btn'>
				End Session Early
			</button>
		</div>
	);
  }
