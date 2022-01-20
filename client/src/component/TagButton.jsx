import React, {useEffect, useState} from 'react'

const TagButton = (props) => {
  const [openDrop, setOpenDrop] = useState(false)
  const drop = React.useRef(null)
 
  return (
    <div ref={drop} className="tag-dropdown">
      <button onClick={()=>setOpenDrop(openDrop=>!openDrop)}>Choose Tag</button>
      {openDrop && props.userTags.map((e, i) => (
            <div onclick={props.tagDropdownHandler} key={i} value={e.id}>{e.description}</div>
          ))}
    </div>
  )
}

export default TagButton