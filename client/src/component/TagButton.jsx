import React, {useEffect, useState} from 'react'

const TagButton = (props) => {
  const [openDrop, setOpenDrop] = useState(false)
  const drop = React.useRef(null)
 
  return (
    <div ref={drop} className="tag-dropdown-container">
      <button className="start-session-btn" onClick={()=>setOpenDrop(openDrop=>!openDrop)}>Choose Tag</button>
      <div className="tag-dropdown-option-list">
      {openDrop && props.userTags.map((e, i) => (
            <div className="start-session-tags-dropdown" onClick={props.tagDropdownHandler} key={i} id={e.id}>{e.description}</div>
          ))}
      {openDrop && <div className="start-session-tags-dropdown" id="newTag" onClick={props.tagDropdownHandler} >New tag</div>}
      </div>
    </div>
  )
}

export default TagButton